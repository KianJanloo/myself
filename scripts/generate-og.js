import { writeFileSync } from "fs"
import { join } from "path"

// Generate a simple 1200x630 PNG with a solid background
// This is a minimal PNG generator - creates a valid PNG file with a solid color

const width = 1200
const height = 630
const r = 26, g = 26, b = 26 // Dark background #1a1a1a

// Create raw image data (RGBA)
const rawData = Buffer.alloc(width * height * 4)
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const offset = (y * width + x) * 4
    rawData[offset] = r
    rawData[offset + 1] = g
    rawData[offset + 2] = b
    rawData[offset + 3] = 255
  }
}

// PNG file structure
function crc32(buf) {
  let crc = -1
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i]
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0)
    }
  }
  return (crc ^ -1) >>> 0
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type, "ascii")
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const combined = Buffer.concat([typeBuffer, data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(combined))
  return Buffer.concat([length, combined, crc])
}

// Signature
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

// IHDR
const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(width, 0)
ihdr.writeUInt32BE(height, 4)
ihdr[8] = 8 // bit depth
ihdr[9] = 2 // color type (RGB)
ihdr[10] = 0 // compression
ihdr[11] = 0 // filter
ihdr[12] = 0 // interlace

// IDAT (uncompressed)
const rawRows = []
for (let y = 0; y < height; y++) {
  rawRows.push(Buffer.from([0])) // filter none
  rawRows.push(rawData.slice(y * width * 4, (y + 1) * width * 4))
}
const rawBuffer = Buffer.concat(rawRows)
const { deflateSync } = await import("zlib")
const compressed = deflateSync(rawBuffer)

// IEND
const iend = Buffer.alloc(0)

const png = Buffer.concat([
  signature,
  chunk("IHDR", ihdr),
  chunk("IDAT", compressed),
  chunk("IEND", iend),
])

const outPath = join(process.cwd(), "public", "og-image.png")
writeFileSync(outPath, png)
console.log(`OG image generated at ${outPath} (${png.length} bytes)`)
