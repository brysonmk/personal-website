import styles from './Contact.module.css'
import usePageTitle from '@/hooks/usePageTitle'
import ContactForm from '@/components/ContactForm'

const channels = [
  {
    label: 'Email',
    value: 'brysonkushner@gmail.com',
    href: 'mailto:brysonkushner@gmail.com',
    note: 'Best way to reach me — I usually reply within a day.',
  },
  {
    label: 'GitHub',
    value: 'github.com/brysonmk',
    href: 'https://github.com/brysonmk',
    note: 'Projects, experiments, and works in progress.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/brysonkushner',
    href: 'https://linkedin.com/in/brysonkushner',
    note: 'Work history and professional updates.',
  },
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <p className={styles.intro}>
        Whether it's an opportunity, a question about something I've built, or
        just to say hi — I'd love to hear from you.
      </p>

      <ContactForm />

      <h2 className={styles.orHeading}>Or reach me directly</h2>
      <ul className={styles.channels}>
        {channels.map(({ label, value, href, note }) => (
          <li key={label} className={styles.channel}>
            <span className={styles.label}>{label}</span>
            <a
              href={href}
              className={styles.value}
              {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
            >
              {value}
            </a>
            <p className={styles.note}>{note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
