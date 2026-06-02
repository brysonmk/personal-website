import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Hi, I'm <span className={styles.accent}>Bryson Kushner</span></h1>
      <p className={styles.tagline}>
        {/* Your tagline here */}
        Building things for the web.
      </p>
    </section>
  )
}
