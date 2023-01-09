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
      <div>Payments</div>
      <ul>{payments}</ul>
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
