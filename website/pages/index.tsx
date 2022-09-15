import type { NextPage } from 'next'
import { About, Footer, Hero, Navbar, Projects, Meta } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <div className='bg-base-200'>
        <Meta />
        <Navbar />
        <main className='container px-10 mx-auto md:px-20'>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
