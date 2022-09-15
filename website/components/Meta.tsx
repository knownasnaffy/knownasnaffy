import Head from 'next/head'

interface MetaProps {
  title?: string
  description?: string
}

export function Meta({ title, description }: MetaProps) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Naffy Dharni'}</title>
        <meta
          name='description'
          content={description ? description : 'Front-End Developer'}
        />
        <link rel='icon' href='/logo.png' />
      </Head>
    </>
  )
}
