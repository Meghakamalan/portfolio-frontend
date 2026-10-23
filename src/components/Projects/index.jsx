// defining project images
const PROJECT_IMAGES = {
  DevForge: '/images/devforge.png',
  'Romer App': '/images/romer.png',
  'Ticket Tracker': '/images/Ticket-Tracker.png',
  'SafeEntry': '/images/Safeentry.png'
}

export default function Projects ({ projects }) {
  // Sort projects: SafeEntry first, DevForge last, keeping all others in between
  const sortedProjects = projects ? [...projects].sort((a, b) => {
    const isSafeEntryA = a.title === 'SafeEntry' || a.title === 'Safe Entry';
    const isSafeEntryB = b.title === 'SafeEntry' || b.title === 'Safe Entry';
    const isDevForgeA = a.title === 'DevForge';
    const isDevForgeB = b.title === 'DevForge';

    if (isSafeEntryA) return -1;
    if (isSafeEntryB) return 1;
    if (isDevForgeA) return 1;
    if (isDevForgeB) return -1;
    return 0;
  }) : [];

  return (
    <section id='projects' className='section-container'>
      <h2 className='section-header'>My Work</h2>
      <div className='projects-grid'>
        {/* Project Cards */}
        {sortedProjects.map(project => (
          <div key={project._id} className='project-card'>
            <div className='project-preview-box'>
              {/* Project Image */}
              <img
                src={
                  PROJECT_IMAGES[project.title] ||
                  '/images/default-placeholder.jpg'
                }
                alt={project.title}
                className='project-img'
              />
            </div>
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-desc'>{project.description}</p>
            {/* Tech Stack for each project */}
            <div className='tech-tags'>
              {project.techStack?.map((tech, idx) => (
                <span key={idx} className='tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}