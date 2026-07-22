import styles from './About.module.css'
import usePageTitle from '@/hooks/usePageTitle'

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] },
  { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Ember.js'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Linux', 'Chrome DevTools', 'Selenium'] },
]

const experience = [
  {
    title: 'Frontend UI Developer Co-op',
    company: 'Ciena Corporation',
    period: 'May 2025 – Dec 2025',
    bullets: [
      'Built and enhanced features for Navigator Network Control Suite, a large-scale optical network management platform',
      'Migrated UI functionality from Ember.js to React across multiple repositories',
      'Debugged UI behavior and network requests using JavaScript, TypeScript, and Chrome DevTools',
    ],
  },
  {
    title: 'Quality Assurance Intern',
    company: 'Epiphan Video',
    period: 'May 2022 – Sep 2022, May 2023 – Jan 2024',
    bullets: [
      'Built and maintained an automated regression test suite in Python with Selenium',
      'Designed test cases for new software releases in collaboration with QA and development teams',
      'Extracted data from web interfaces using web scraping techniques',
    ],
  },
]

export default function About() {
  usePageTitle('About')
  return (
    <div className={styles.about}>
      <section className={styles.section}>
        <h1>About</h1>
        <p>
          I'm a Computer Science student at Carleton University (graduating May 2026),
          specializing in the software engineering stream. I enjoy building for the web —
          from polished frontends to the backends that power them.
        </p>
        <p>
          Outside of code I follow soccer closely and spend time reading about software
          craft and system design.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Experience</h2>
        <div className={styles.jobs}>
          {experience.map((job) => (
            <div key={job.title} className={styles.job}>
              <div className={styles.jobHeader}>
                <div>
                  <span className={styles.jobTitle}>{job.title}</span>
                  <span className={styles.jobCompany}> · {job.company}</span>
                </div>
                <span className={styles.jobPeriod}>{job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          {skills.map(({ category, items }) => (
            <div key={category} className={styles.skillGroup}>
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
