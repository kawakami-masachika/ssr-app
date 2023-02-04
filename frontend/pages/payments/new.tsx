import Link from "next/link"
import { useForm } from "react-hook-form";

export type CategoryProps = {
  data: {
    items: {
      id: number;
      code: string;
      name: string;
    }[]
  }
}

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const AddPayments = ({ data }: CategoryProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const categories = data.items.map((c) => <option key={c.id} value={c.code }>{c.name}</option>)

  const create = async (data :any) => {
    console.log(data)
    const res = await fetch('http://localhost:3200/payments', { headers,  method: 'POST', body: JSON.stringify(data) })
    return res
  };

  const onSubmit = (data: any) => create(data);

  return (
    <>
      <div className="container">
        <h3>支払い登録</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="paymentName">支払い内容</label>
            <input {...register('name', { required: true, maxLength: 20 })} type="text" id="paymentName" />
            {errors.name?.type === 'required' && <p role="alert">支払い内容は必須です</p>}
          </div>

          <div>
            <label htmlFor="paymentPrice">金額</label>
            <input {...register('price', { required: true, min: 1, max: 100000000 })} type="number" id="paymentPrice" />
            {errors.price?.type === 'required' && <p role="alert">金額は必須です</p>}
          </div>

          <div>
            <label htmlFor="paymentMemo">メモ</label>
            <textarea
              {...register('memo', { required: false, maxLength: 300 })}
              name="memo"
              id="paymentMemo"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category">支払いカテゴリー</label>
            <select {...register('categoryCode', { required: true })} id="category">
              {categories}
            </select>
            {errors.category?.type === 'required' && <p role="alert">支払いカテゴリーを選択してください</p>}
          </div>

          <input type="submit" value="登録" />
        </form>

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
