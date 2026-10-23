import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Experience from '../components/Experience/index';

export default function Home ({ projects, skills }) {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience />
      <Skills skills={skills} />
      <Contact />
    </>
  )
}
