import { useForm } from 'react-hook-form'

type PaymentForm = {
  btnLabel?: string;
  payment?: {}
  categories: {id: number; name: string; code: string}[]
}

const PaymentForm = (props: PaymentForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }


  const create = async (data: any) => {
    const res = await fetch('http://localhost:3200/payments', { headers, method: 'POST', body: JSON.stringify(data) })
    return res;
  }

  // 支払いカテゴリー
  const categories = props.categories.map((c) => (
    <option key={c.code} value={c.code}>
      {c.name}
    </option>
  ));

  const onSubmit = (data: any) =>{
    create(data).then(() => {
      reset();
    })
  }


  return (
    <>
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
          <textarea {...register('memo', { required: false, maxLength: 300 })} name="memo" id="paymentMemo"></textarea>
        </div>

        <div>
          <label htmlFor="category">支払いカテゴリー</label>
          <select {...register('categoryCode', { required: true })} id="category">
            {categories}
          </select>
          {errors.category?.type === 'required' && <p role="alert">支払いカテゴリーを選択してください</p>}
        </div>

        <input type="submit" value={props.btnLabel || '登録'} />
      </form>
    </>
  )
}

export default PaymentForm
