import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
type HomeProps = { data: { hello: string } }
export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>ssr app</title>
      </Head>
      <div>
        <p>{data.hello}</p>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/')
  const data = await res.json()

  return { props: { data } }
}
