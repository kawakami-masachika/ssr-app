import { createContext, useState } from 'react'

type DarkMode = { darkMode?: boolean; setDarkMode?: (darkMode: boolean) => void }

export const ThemeContext = createContext<DarkMode>({})

export const ThemeProvider = (props: { children: JSX.Element }) => {
  const [state, setState] = useState<boolean>()

  return (
    <ThemeContext.Provider value={{ darkMode: state, setDarkMode: (darkMode: boolean) => setState(darkMode) }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
