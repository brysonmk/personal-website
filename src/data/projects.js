const projects = [
  {
    title: 'Social Media Application',
    period: 'Fall 2023 – Winter 2024',
    description:
      'Full-stack social media app with a React frontend, Express/Node.js backend, and MongoDB database. Deployed to production via Render.',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    links: [
      { label: 'Frontend', href: 'https://github.com/brysonmk/social-media-app-frontend' },
      { label: 'Backend', href: 'https://github.com/brysonmk/social-media-app-backend' },
    ],
    featured: true,
  },
  {
    title: 'Soccer Event Database',
    period: 'Spring 2024',
    description:
      'Relational database built with PostgreSQL to store and query a multi-season soccer events dataset. Loaded JSON data via custom Python scripts and ran complex SQL queries to surface player performance metrics across La Liga and Premier League.',
    tech: ['PostgreSQL', 'Python', 'SQL'],
    links: [
      { label: 'GitHub', href: 'https://github.com/brysonmk/COMP3005_W24_Group_Project' },
    ],
    featured: true,
  },
]

export default projects
export const featuredProjects = projects.filter((p) => p.featured)
