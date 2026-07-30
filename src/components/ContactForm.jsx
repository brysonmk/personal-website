import { useState } from 'react'
import styles from './ContactForm.module.css'

// Web3Forms access key — get a free one at https://web3forms.com
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? 'YOUR_ACCESS_KEY_HERE'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email.'
  if (!message.trim()) errors.message = 'Please enter a message.'
  else if (message.trim().length < 10) errors.message = 'Message is a little short.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message from ${values.name}`,
          ...values,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setValues(initialValues)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.result} role="status">
        <p className={styles.resultTitle}>Thanks for reaching out! 🎉</p>
        <p className={styles.resultText}>
          Your message is on its way — I'll get back to you soon.
        </p>
        <button
          type="button"
          className={styles.reset}
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          Something went wrong sending your message. Please email me directly instead.
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
