import Link from 'next/link'
import PaymentForm from './components/form'

export type CategoryProps = {
  data: {
    items: {
      id: number
      code: string
      name: string
    }[]
  }
}

const EditPayment = ({ data }: CategoryProps) => {
  return (
    <>
      <div className="container">
        <h3>支払い内容変種</h3>
        <PaymentForm categories={data.items} />
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

export default EditPayment
