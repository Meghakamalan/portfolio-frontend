import { useEffect, useState } from 'react'
import Home from './pages/Home'
import './App.css'
// api base url
const API_BASE_URL = 'https://portfolio-h985.onrender.com'

export default function App () {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      try {
        const [projectsRes, skillsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/projects`),
          fetch(`${API_BASE_URL}/api/skills`)
        ])

        const projectsData = await projectsRes.json()
        const skillsData = await skillsRes.json()

        setProjects(projectsData)
        setSkills(skillsData)
      } catch (error) {
        console.error('Error loading API data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className='loader'>Loading portfolio...</div>

  return <Home projects={projects} skills={skills} />
}
