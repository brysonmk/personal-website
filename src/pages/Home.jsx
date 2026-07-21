import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { featuredProjects } from '@/data/projects'

const currently = [
  { emoji: '💼', text: 'Finishing my Computer Science degree at Carleton University' },
  { emoji: '🛠️', text: 'Building this website and adding new projects to my portfolio' },
  { emoji: '📚', text: 'Deepening my TypeScript and React skills' },
]

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Hi, I'm <span className={styles.accent}>Bryson Kushner</span></h1>
      <p className={styles.tagline}>
        Software developer focused on building clean, thoughtful web experiences.
      </p>
      <p className={styles.bio}>
        I'm a Computer Science student at Carleton University (graduating May 2026),
        specializing in software engineering. Most recently I worked as a Frontend UI
        Developer Co-op at Ciena Corporation, where I built and enhanced features for a
        large-scale network management platform and migrated UI from Ember.js to React.
      </p>
      <p className={styles.bio}>
        I work primarily with React, TypeScript, and JavaScript on the frontend, and
        Node.js, Express, and MongoDB on the backend. I care about writing maintainable
        code and shipping things that actually work.
      </p>

      <div className={styles.cta}>
        <Link to="/projects" className={styles.ctaPrimary}>View Projects</Link>
        <Link to="/contact" className={styles.ctaSecondary}>Get in Touch</Link>
      </div>

      <div className={styles.currently}>
        <h2>Currently</h2>
        <ul>
          {currently.map(({ emoji, text }) => (
            <li key={text}>
              <span className={styles.emoji} aria-hidden="true">{emoji}</span>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.featured}>
        <div className={styles.featuredHeader}>
          <h2>Featured Projects</h2>
          <Link to="/projects" className={styles.seeAll}>See all →</Link>
        </div>
        <div className={styles.featuredGrid}>
          {featuredProjects.map(({ title, description, tech }) => (
            <Link key={title} to="/projects" className={styles.featuredCard}>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.featuredTech}>{tech.slice(0, 4).join(' · ')}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
