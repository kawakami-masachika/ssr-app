import Head from 'next/head'
import { H, Section } from 'react-headings'

export type PaymentsProps = {
  data: {
    payments: any[]
  }
}

const Payments = ({ data }: PaymentsProps) => {
  console.log(data)
  const payments = data.payments.map((p) => <li key={p.id}>{p.name}</li>)
  return (
    <>
      <Head>
        <title>payment list</title>
      </Head>
      <Section component={<H>Payments</H>}>
        <ul>{payments}</ul>
      </Section>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/payments?offset=0&limit=20')
  const data = await res.json()

  console.log('server log', data)

  return { props: { data } }
}

export default Payments
