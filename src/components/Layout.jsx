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
      </footer>
    </div>
  )
}
