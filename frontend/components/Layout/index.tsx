import GlobalNavigation from '../GlobalNavigation'
import styles from './index.module.css'

type Props = {
  children: JSX.Element
}

const index = (props: Props) => {
  return (
    <div className={styles.container}>
      <GlobalNavigation></GlobalNavigation>
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default index
