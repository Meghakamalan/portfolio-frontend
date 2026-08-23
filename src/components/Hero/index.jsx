export default function Hero () {
  return (
    <header id='home' className='hero-section'>
      <div className='hero-container'>
        <div className='hero-text'>
          <p className='greeting-tag'>HEY! THIS IS</p>
          <h1>Megha Kamalan</h1>
          <p className='role-title'>Full Stack Developer</p>
        </div>
        <div className='hero-image-wrapper'>
          <img
            src='/images/Me.jpeg'
            alt='Megha Kamalan'
            className='profile-img'
          />
        </div>
      </div>
    </header>
  )
}
