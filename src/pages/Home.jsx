import styles from './Home.module.css'

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
    </section>
  )
}
