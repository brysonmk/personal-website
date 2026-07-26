import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import usePageTitle from '@/hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not Found')
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p className={styles.message}>
        Looks like this page took a wrong turn — it's not in any of my repos.
      </p>
      <p className={styles.subtext}>Let's get you back to something that compiles.</p>
      <Link to="/" className={styles.homeLink}>← Back home</Link>
    </div>
  )
}
