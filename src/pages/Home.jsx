import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home ({ projects, skills }) {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </>
  )
}
