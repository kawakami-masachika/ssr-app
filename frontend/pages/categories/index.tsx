import Link from 'next/link'

export type CategoriesProps = {
  data: {
    items: any[]
  }
}

const Categories = ({ data }: CategoriesProps) => {
  const categories = data.items.map((p) => <li key={p.id}>{p.name}</li>)
  return (
    <>
      <div>Categories</div>
      <ul>{categories}</ul>
      <Link href="/">戻る</Link>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/category')
  const data = await res.json()

  return { props: { data } }
}

export default Categories
