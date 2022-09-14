import { GithubIcon, TwitterIcon } from "./Icons";

export function Footer() {
	return (
		<>
			<footer className='footer p-10 bg-base-300 text-base-content'>
				<div>
					<span className='footer-title text-xl mb-1'>Projects</span>
					<a
						className='link link-hover text-lg'
						href='https://github.com/naffydharni006/anDiary'
						target='_blank'
						rel='noreferrer'
					>
						anDiary
					</a>
					<a className='link link-hover text-lg'>E-Tasks</a>
				</div>
				<div>
					<span className='footer-title text-xl'>Social</span>
					<div className='grid grid-flow-col gap-4'>
						<a
							rel='noreferrer'
							href='https:github.com/naffydharni006'
							target={"_blank"}
						>
							<GithubIcon className="h-6 w-6" />
						</a>
						<a
							href='https://twitter.com/dharni_naffy'
							target={"_blank"}
							rel='noreferrer'
						>
							<TwitterIcon className="h-6 w-6" />
						</a>
					</div>
				</div>
				<div className='text-lg'>
					<p>
						Made using{" "}
						<a
							href='https://nextjs.org'
							target='_blank'
							className='text-black underline hover:decoration-2'
							rel='noreferrer'
						>
							Next.js
						</a>{" "}
						and{" "}
						<a
							href='https://tailwindcss.com'
							target='_blank'
							className='text-black underline hover:decoration-2'
							rel='noreferrer'
						>
							Tailwind
						</a>
						.
						<br />
						Deploys from{" "}
						<a
							href='https://vercel.com'
							target='_blank'
							className='text-black underline hover:decoration-2'
							rel='noreferrer'
						>
							Vercel
						</a>
						.
					</p>
				</div>
			</footer>
		</>
	)
}
