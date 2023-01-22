import Link from "next/link"

export type CategoryProps = {
  data: {
    items: {
      id: number;
      code: string;
      name: string;
    }[]
  }
}

const AddPayments = ({ data }: CategoryProps) => {
  const payments = data.items.map((p) => <li key={p.id}>{p.name}</li>)
  return (
    <>
      <div>支払い登録</div>
      <ul>{payments}</ul>
      <Link href="/">HOME</Link>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/category')
  const data = await res.json()
  return { props: { data } }
}

export default AddPayments
