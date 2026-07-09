import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaEnvelope, FaUser, FaTag, FaComment } from 'react-icons/fa'
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
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 via-accent-secondary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative glass rounded-3xl p-8 md:p-10 border border-white/10 group-hover:border-accent/20 transition-all duration-500">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl">
              <FaEnvelope className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                Send a Message
              </h3>
              <p className="text-sm text-text-muted">
                I'll get back to you within 24 hours
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-text-primary">
                  <FaUser className="w-3.5 h-3.5 text-accent" />
                  Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-accent/50 hover:border-white/20'
                    } text-text-primary placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/8`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                      <FaExclamationTriangle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-text-primary">
                  <FaEnvelope className="w-3.5 h-3.5 text-accent" />
                  Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-accent/50 hover:border-white/20'
                    } text-text-primary placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/8`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                      <FaExclamationTriangle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <FaTag className="w-3.5 h-3.5 text-accent" />
                Subject *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border transition-all duration-300 ${
                    errors.subject 
                      ? 'border-red-500/50 focus:border-red-500' 
                      : 'border-white/10 focus:border-accent/50 hover:border-white/20'
                  } text-text-primary placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/8`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <FaExclamationTriangle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <FaComment className="w-3.5 h-3.5 text-accent" />
                Message *
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-500/50 focus:border-red-500' 
                      : 'border-white/10 focus:border-accent/50 hover:border-white/20'
                  } text-text-primary placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white/8`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                    <FaExclamationTriangle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-accent-secondary text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
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
                className="text-center text-green-400 text-sm flex items-center justify-center gap-2"
              >
                <FaCheck className="w-4 h-4" />
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
                  Unable to send email automatically.
                </p>
                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-xl hover:bg-accent/20 border border-accent/20 transition-all duration-300 text-sm font-medium cursor-pointer"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Open Email Client
                </button>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactForm
