import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
export const useDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const className = darkMode ? 'dark-scheme' : 'light-scheme'
  const toggleDarkMode = () => setDarkMode && setDarkMode(!darkMode)
  return { className: className, toggleDarkMode }
}
