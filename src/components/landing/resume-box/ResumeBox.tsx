import { motion } from 'framer-motion';
import resumeImage from "@/assets/Resume.png"
import resume from "/Resume.pdf"

const ResumeBox = () => {
  return (
    <div className="border-2 border-foreground/20 p-8 rounded-3xl max-w-[70%] max-md:max-w-full mx-auto shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Resume</h2>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={resume}
          download
          className="bg-accent text-white px-6 py-3 rounded-xl cursor-pointer font-semibold shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download
        </motion.a>
      </header>
      <div className="relative w-full h-[500px] max-md:h-[300px] max-sm:h-[200px] overflow-hidden bg-transparent group">
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={resumeImage} 
          alt="Resume Preview" 
          className="w-full mx-auto rounded-2xl h-auto object-top transform group-hover:scale-[1.02] transition-all duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-secondary via-secondary/80 to-transparent rounded-b-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="mt-4 text-gray-300 text-sm">
        <p>Front-End Developer with over 2.5 years of experience in building modern web applications using React and Next.js. Passionate about creating seamless user experiences and delivering high-performance solutions.</p>
      </div>
    </div>
  );
};

export default ResumeBox;
