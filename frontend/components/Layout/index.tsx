import GlobalNavigation from '../GlobalNavigation'
import styles from './index.module.css'
import { useDarkMode } from '../../hooks/useDarkMode'
import { useDayTime } from '../../hooks/useDayTime'

type Props = {
  children: JSX.Element
}

const Layout = (props: Props) => {
  const { className, toggleDarkMode } = useDarkMode()
  const dayTimeClass = useDayTime()

  return (
    <>
      <button onClick={() => toggleDarkMode()}>toggle</button>

      <div className={`${styles.container} ${className} ${dayTimeClass}`}>
        <GlobalNavigation></GlobalNavigation>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
