import styles from './Projects.module.css'
import projects from '@/data/projects'
import usePageTitle from '@/hooks/usePageTitle'

export default function Projects() {
  usePageTitle('Projects')
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
