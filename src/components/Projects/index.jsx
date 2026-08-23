// defining project images
const PROJECT_IMAGES = {
  DevForge: '/images/devforge.png',
  'Romer App': '/images/romer.png',
  'Ticket Tracker': '/images/Ticket-Tracker.png'
}

export default function Projects ({ projects }) {
  return (
    <section id='projects' className='section-container'>
      <h2 className='section-header'>My Work</h2>
      <div className='projects-grid'>
        {/* Project Cards */}
        {projects?.map(project => (
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
