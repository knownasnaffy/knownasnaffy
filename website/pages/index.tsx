import type { NextPage } from "next"
import Head from "next/head"
import { About, Footer, Navbar } from "../components"

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
				<section className='flex flex-col min-h-screen justify-items-start place-content-center'>
					<h1 className='font-bold text-9xl md:underline underline-offset-8 decoration-primary decoration-8'>
						<span className='text-primary'>Naffy</span> Dharni
					</h1>
				</section>
				<About />
				<section
					id='projects'
					className='pt-16'
				>
					<h2 className='text-5xl font-bold'>
						<span className='pb-2 border-b-8 rounded-lg border-primary/90'>
							<span className='text-primary/90'>My</span> Projects
						</span>
					</h2>
					<div className="grid grid-cols-1 gap-8 mt-8 xl:m-10 xl:mt-16 xl:gap-24 md:grid-cols-2 xl:grid-cols-2">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer grayscale aspect-square group andiary-p">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Write daily journals</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">anDiary</p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer grayscale aspect-square group etask-p">
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-2xl font-semibold text-white capitalize">Live with sustainable development</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">SD Tasks</p>
                </div>
            </div>
        </div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Home
