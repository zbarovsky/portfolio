import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import About from './about'
import Footer from '../components/footer'
import Techstack from './techstack'
import Nhead from './nhead'


export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Nhead />
        <Techstack />
        <About />
        <h3>projects section</h3>
        <h3>contact me section</h3>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
