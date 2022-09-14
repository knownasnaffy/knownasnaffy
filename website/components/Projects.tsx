import { DemoIcon, GithubIcon } from "./Icons"

export function Projects() {
	return (
		<>
			<section
				id='projects'
				className='pt-24 '
			>
				<h2 className='text-5xl font-bold'>
					<span className='pb-2 border-b-8 rounded-lg border-primary/90'>
						<span className='text-primary/90'>My</span> Projects
					</span>
				</h2>
				<div className='grid grid-cols-1 gap-8 mt-8 xl:my-20 xl:gap-24 md:grid-cols-3 xl:grid-cols-3'>
					<ProjectCard
						name='anDiary'
						description='Write daily journals in your pc'
						demoUrl='https://andiary.tk'
						repo='naffydharni006/anDiary'
					/>
					<ProjectCard
						name='SD-Tasks'
						description='App which gives you tasks for sustainable development'
						demoUrl='https://sustainable-tasks.tk'
						repo='naffydharni006/sustainable-tasks'
					/>
				</div>
			</section>
		</>
	)
}

interface ProjectCardProps {
	name: string
	description?: string
	demoUrl?: string
	repo?: string
}

function ProjectCard({ name, description, demoUrl, repo }: ProjectCardProps) {
	return (
		<>
			<div className='card w-96 bg-base-100 hover:shadow-md transition-shadow duration-300'>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>{description}</p>
					<div className='card-actions justify-end'>
						{demoUrl ? (
							<a
								className='btn btn-primary transition-colors duration-500'
								target='_blank'
								href={demoUrl}
								rel='noreferrer'
							>
								Demo
							</a>
						) : (
							""
						)}
						{repo ? (
							<a
								className='btn btn-primary transition-colors duration-500'
								href={"https://github.com/" + repo}
								target='_blank'
								rel='noreferrer'
							>
								Repo
							</a>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	)
}
