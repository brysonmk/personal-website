import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import usePageTitle from '@/hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not Found')
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </div>
  )
}
