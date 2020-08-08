import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import About from './about'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <h1 className='nameHeader'>Zack Barovsky</h1>
        </div>
        <About />
        <h3>projects section</h3>
        <h3>stack imgs section</h3>
        <h3>contact me section</h3>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
