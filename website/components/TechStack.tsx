/* eslint-disable @next/next/no-img-element */

export function TechStack() {
  return (
    <>
      <section data-aos="fade-right" data-aos-duration="1000" id='techs' className='pt-24 relative'>
        <h2 className='text-5xl font-bold'>
          <span className='pb-2 border-b-8 rounded-lg border-primary'>
            <span className='text-primary'>Tech</span> Stack
          </span>
        </h2>
				<div className='my-20'/>
        <img
          src='https://skillicons.dev/icons?i=css,html,js,ts,md,nodejs,powershell,py,mongodb,stackoverflow,nextjs,tailwind,tauri,twitter,jest,electron,git,github,githubactions,netlify,vercel,vscode&perline=8'
          alt='Skills'
					className='w-full grayscale hidden md:flex'
        />
        <img
          src='https://skillicons.dev/icons?i=css,html,js,ts,md,nodejs,powershell,py,mongodb,stackoverflow,nextjs,tailwind,tauri,twitter,jest,electron,git,github,githubactions,netlify,vercel,vscode&perline=5'
          alt='Skills'
					className='w-full grayscale md:hidden flex'
        />
      </section>
    </>
  )
}
