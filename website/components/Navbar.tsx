import Link from "next/link"
import { GithubIcon } from "./Icons"
import dynamic from "next/dynamic"

export function Navbar() {
	const ProgressBar = dynamic(() => import("./ProgressBar"), {
		ssr: false,
	})
	return (
		<>
			<ProgressBar />
			<nav
				id='navbar'
				className='navbar bg-base-100 fixed z-40'
			>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label
							tabIndex={0}
							className='btn btn-ghost lg:hidden hover:bg-transparent'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 hover:stroke-primary'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a href='#about'>About</a>
							</li>
							<li tabIndex={0}>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#techs">Tech Stack</a>
							</li>
						</ul>
					</div>
					<Link href='/'>
						<a className='btn btn-ghost normal-case text-xl hover:bg-transparent'>
							<span className='text-primary mr-1'>Naffy</span>{" "}
							Dharni
						</a>
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<a
						className='btn btn-ghost hover:bg-transparent hover:text-primary transition-colors duration-500'
						href='#about'
					>
						About
					</a>
					<a
						className='btn btn-ghost hover:bg-transparent hover:text-primary transition-colors duration-500'
						href='#projects'
					>
						Projects
					</a>
					<a className='btn btn-ghost hover:bg-transparent hover:text-primary transition-colors duration-500' href="#techs">
						Tech Stack
					</a>
				</div>
				<div className='navbar-end'>
					<a
						href='https://github.com/naffydharni006/naffydharni006'
						className='btn btn-ghost hover:bg-transparent group'
					>
						<GithubIcon className='h-5 w-5 group-hover:stroke-primary transition-colors duration-500' />
					</a>
				</div>
			</nav>
		</>
	)
}
