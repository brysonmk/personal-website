import { Outlet, NavLink } from 'react-router-dom'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logo}>
            Bryson Kushner
          </NavLink>
          <ul className={styles.links}>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Bryson Kushner</p>
        <ul className={styles.socialLinks}>
          <li><a href="https://github.com/brysonmk" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/brysonkushner" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="mailto:brysonkushner@gmail.com">Email</a></li>
        </ul>
      </footer>
    </div>
  )
}
