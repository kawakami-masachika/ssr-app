import Head from 'next/head'
import { H, Section } from 'react-headings'
import styles from './index.module.scss'

type HomeProps = { data: { hello: string } }
export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>ssr app home</title>
      </Head>
      <Section component={<H>Home</H>}></Section>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/')
  const data = await res.json()

  return { props: { data } }
}
