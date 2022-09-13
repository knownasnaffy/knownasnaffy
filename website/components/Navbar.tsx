export function Navbar() {
	return (
		<>
			<div className='navbar bg-base-100 fixed shadow-md'>
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
								<a>About</a>
							</li>
							<li tabIndex={0}>
								<a>Projects</a>
							</li>
							<li>
								<a>Tech Stack</a>
							</li>
						</ul>
					</div>
					<a className='btn btn-ghost normal-case text-xl hover:bg-transparent'>
						<span className='text-primary mr-1'>Naffy</span> Dharni
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<a className='btn btn-ghost hover:bg-transparent hover:text-primary'>
						About
					</a>
					<a className='btn btn-ghost hover:bg-transparent hover:text-primary'>
						Projects
					</a>
					<a className='btn btn-ghost hover:bg-transparent hover:text-primary'>
						Tech Stack
					</a>
				</div>
				<div className='navbar-end'>
					<a className='btn btn-ghost hover:bg-transparent'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='h-5 w-5 hover:stroke-primary'
						>
							<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
						</svg>
					</a>
				</div>
			</div>
		</>
	)
}
