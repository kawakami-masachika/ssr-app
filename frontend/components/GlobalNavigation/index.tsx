import Link from 'next/link'
import styles from './index.module.css'

const index = () => {
  return (
    <nav className={styles.globalNavigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/category">Category</Link>
        </li>
        <li>
          <Link href="/payments">Payments</Link>
        </li>
      </ul>
    </nav>
  )
}

export default index
