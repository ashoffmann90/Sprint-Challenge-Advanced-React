import React from 'react'
import {useDarkMode} from '../hooks/useDarkMode'


function DarkModeButton() {

    const [darkMode, setDarkMode] = useDarkMode('isDark')
    const toggleMode = e => {
      e.preventDefault()
      setDarkMode(!darkMode)
    }

    return(
        <button data-testid='button' onClick={toggleMode}>DarkMode</button>
    )
}

export default DarkModeButton