import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: {hello: string}) {
  return (
    <>
      <Head>
        <title>ssr app</title>
      </Head>
      <div>
        <p>{props.hello}</p>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/');
  const json = await res.json();

  return {props: json}
}