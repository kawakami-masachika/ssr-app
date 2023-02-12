import { ReactNode, useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './toast.module.scss'

type ToastProps = {
  visible: boolean
  children: ReactNode
}
export const Toast = ({ children, visible }: ToastProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.getElementById('toast-container')
    setMounted(true)
  }, [])

  return mounted && ref.current && visible
    ? createPortal(<div className={styles.info}>{children}</div>, ref.current)
    : null
}
