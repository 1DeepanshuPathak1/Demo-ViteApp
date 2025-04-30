import { useState } from 'react'
import Button from '../components/Button'
import { FaPaperPlane, FaExclamationTriangle } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      })
    }
  }
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      setFormStatus({
        submitted: true,
        error: false
      })
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setFormStatus({
        submitted: false,
        error: true
      })
    }
  }
  
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>This page demonstrates form handling with React.</p>
      {formStatus.submitted && (
        <div className="alert alert-success">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      {formStatus.error && (
        <div className="alert alert-error">
          <FaExclamationTriangle /> Please fix the errors in the form.
        </div>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        
        <Button variant="primary" type="submit">
          <FaPaperPlane /> Send Message
        </Button>
      </form>
    </div>
  )
}

export default Contact