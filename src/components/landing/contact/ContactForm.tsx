import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaEnvelope } from 'react-icons/fa'
import { sendEmail, createEmailLink } from '../../../utils/service/emailService'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      // Only log errors in development mode
      if (import.meta.env.DEV) {
        console.error('Email sending error:', error)
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailFallback = () => {
    const emailLink = createEmailLink(formData)
    window.open(emailLink, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-text-primary mb-6 text-center gradient-text">
          Send me a message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-colors ${
                  errors.name ? 'border-red-500' : 'border-white/20 focus:border-accent'
                } text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationTriangle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-colors ${
                  errors.email ? 'border-red-500' : 'border-white/20 focus:border-accent'
                } text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationTriangle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-colors ${
                errors.subject ? 'border-red-500' : 'border-white/20 focus:border-accent'
              } text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <FaExclamationTriangle className="w-3 h-3" />
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-white/20 focus:border-accent'
              } text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20`}
              placeholder="Tell me about your project or just say hello!"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <FaExclamationTriangle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r cursor-pointer from-accent to-accent-secondary text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              <>
                <FaCheck className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 text-sm"
            >
              Thank you! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-3"
            >
              <p className="text-red-400 text-sm">
                Unable to send email automatically. Use the button below to send via your email client.
              </p>
              <button
                type="button"
                onClick={handleEmailFallback}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium"
              >
                <FaEnvelope className="w-4 h-4" />
                Open Email Client
              </button>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactForm
