import Link from "next/link"
import PaymentForm from "./components/form";
import Head from 'next/head'

export type CategoryProps = {
  data: {
    items: {
      id: number
      code: string
      name: string
    }[]
  }
}

const AddPayments = ({ data }: CategoryProps) => {
  return (
    <>
      <Head>
        <title>add new payment</title>
      </Head>
      <div className="container">
        <h3>支払い登録</h3>
        <PaymentForm
          categories={data.items}
        />
        <Link href="/">HOME</Link>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/category')
  const data = await res.json()
  return { props: { data } }
}

export default AddPayments
