import Head from 'next/head'
import { useRouter } from 'next/router'
import { H, Section } from 'react-headings'
import { useForm } from 'react-hook-form'

const NewCategory = () => {
  const form = useForm()
  const router = useRouter()

  const onSubmit = async (formValue: any) => {
    await fetch('http://localhost:3200/category', {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(formValue),
    })
    router.push('/categories')
  }

  return (
    <>
      <Head>add new category</Head>
      <Section component={<H>create new category</H>}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="code">コード</label>
            <input
              id="code"
              type="text"
              {...form.register('code', { required: true, maxLength: 3, minLength: 1 })}
            ></input>
          </div>
          <div>
            <label htmlFor="name">名前</label>
            <input
              id="name"
              type="text"
              {...form.register('name', { required: true, maxLength: 20, minLength: 1 })}
            ></input>
          </div>
          <button type="submit">作成</button>
        </form>
      </Section>
    </>
  )
}

export default NewCategory
