// src/components/Experience/index.jsx
export default function Experience () {
  return (
    <section id='experience' className='section-container experience-section'>
      <h2 className='section-header'>Technical Experience</h2>
      <div className='experience-grid' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        <div className='experience-card' style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#2d3748', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Full-Stack Web Development Student & Capstone Developer</h3>
          <p style={{ color: '#718096', fontSize: '0.95rem', fontWeight: '500', marginBottom: '1rem' }}>Humber Polytechnic, Toronto, ON | Jan 2026 – Present (Expected Dec 2026)</p>
          <ul style={{ color: '#4a5568', paddingLeft: '1.25rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Achieved Dean's List academic standing in the Web Development graduate certificate program.</li>
            <li>Designed and engineered full-stack web applications, RESTful APIs, and responsive front-end user interfaces using React, JavaScript, Node.js, Express, MongoDB, and PostgreSQL.</li>
            <li>Implemented secure user authentication workflows and role-based access control systems for community and visitor management platforms.</li>
          </ul>
        </div>

        <div className='experience-card' style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#2d3748', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Full-Stack Project & Systems Builder</h3>
          <p style={{ color: '#718096', fontSize: '0.95rem', fontWeight: '500', marginBottom: '1rem' }}>Independent & Collaborative Projects | 2026</p>
          <ul style={{ color: '#4a5568', paddingLeft: '1.25rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>SafeEntry:</strong> Developed a full-stack community and visitor management web platform featuring role-based access control for residents, guards, and administrators using React, Node.js, Express, and MongoDB Atlas.</li>
            <li><strong>Ticket Tracker:</strong> Built an ASP.NET Core MVC travel routing web app integrating Entity Framework Core, PostgreSQL, Dijkstra's pathfinding algorithm, and Leaflet.js maps.</li>
            <li><strong>DevForge & Romer:</strong> Architected data-driven developer CMS platforms and travel discovery apps consuming external REST APIs.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}