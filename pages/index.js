import Navigation from '../components/navbar'
import About from './about'
import Footer from '../components/footer'
import Techstack from './techstack'
import Nhead from './nhead'
import Project from './project'
import Contact from './contact'


export default function Home() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Nhead />
        <Techstack />
        <About />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
