import { GetServerSideProps } from "next"
import React from "react"

const PaymentShow = () => {
  return (
    <>
      <div>Payment Show</div>
      <div></div>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3200/payments/${context.params?.id || 0}`)
  const data = await res.json()
  console.log(data);
  return { props: { data } }
}

export default PaymentShow
