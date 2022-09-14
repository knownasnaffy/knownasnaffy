import type { NextPage } from "next"
import Head from "next/head"
import { About, Footer, Hero, Navbar } from "../components"
import { Projects } from "../components/Projects"

const Home: NextPage = () => {
	return (
		<div className='bg-base-200'>
			<Head>
				<title>Naffy Dharni</title>
				<meta
					name='description'
					content='Front-End Developer'
				/>
				<link
					rel='icon'
					href='/logo.png'
				/>
			</Head>
			<Navbar />
			<main className='container px-10 mx-auto md:px-20'>
				<Hero />
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	)
}

export default Home
