import styles from './Projects.module.css'

const projects = [
  {
    title: 'Social Media Application',
    period: 'Fall 2023 – Winter 2024',
    description:
      'Full-stack social media app with a React frontend, Express/Node.js backend, and MongoDB database. Deployed to production via Render.',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    links: [],
  },
  {
    title: 'Soccer Event Database',
    period: 'Spring 2024',
    description:
      'Relational database built with PostgreSQL to store and query a multi-season soccer events dataset. Loaded JSON data via custom Python scripts and ran complex SQL queries to surface player performance metrics across La Liga and Premier League.',
    tech: ['PostgreSQL', 'Python', 'SQL'],
    links: [],
  },
]

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>{project.title}</h2>
              <span className={styles.period}>{project.period}</span>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.footer}>
              <ul className={styles.tech}>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className={styles.links}>
                  {project.links.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
