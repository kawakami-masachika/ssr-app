import { H, Section } from 'react-headings'

export type CategoriesProps = {
  data: {
    items: any[]
  }
}

const Categories = ({ data }: CategoriesProps) => {
  console.log(data)
  const categories = data.items.map((p) => <li key={p.code}>{p.name}</li>)
  return (
    <Section component={<H>Categories</H>}>
      <ul>{categories}</ul>
    </Section>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3200/category')
  const data = await res.json()

  return { props: { data } }
}

export default Categories
