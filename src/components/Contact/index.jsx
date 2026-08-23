export default function Contact () {
  return (
    <section id='contact' className='section-container contact-section'>
      <div className='single-contact-box'>
        <h2 className='contact-title'>Get In Touch</h2>
        <p className='contact-description'>
          I'm currently open to web development opportunities and Coop
          positions. Feel free to reach out directly via email or connect with
          me on social platforms.
        </p>
        <p className='email-link'>
          {/* mail link for easy access */}
          <a href='mailto:megha.kamalan@outlook.com'>
            megha.kamalan@outlook.com
          </a>
        </p>
        <div className='social-links-wrapper'>
          <span className='social-label'>You can also find me here:</span>
          <div className='social-buttons'>
            {/* linkedin and github links */}
            <a
              href='https://www.linkedin.com/in/megha-kamalan-65ab013a6/'
              target='_blank'
              rel='noreferrer'
              className='social-btn linkedin'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/Meghakamalan'
              target='_blank'
              rel='noreferrer'
              className='social-btn github'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
