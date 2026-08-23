export default function Skills ({ skills }) {
  return (
    <section id='skills' className='section-container'>
      <h2 className='section-header'>Skills</h2>
      <div className='skills-grid'>
        {/* Skills  */}
        {skills?.map(skill => (
          <div key={skill._id} className='skill-pill'>
            <span className='skill-name'>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
