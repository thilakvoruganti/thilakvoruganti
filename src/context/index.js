import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PortContent = createContext()


const PortProvider = (props) => {

  const location = useLocation()

  const [logoc, setLogoc] = useState({ color1: '#8D8D8D', color2: '#000000', color3: '#C3DA37' })
  const [bcpts, setBcpts] = useState({ bc: '', tc: '' })

  useEffect(() => {
    let data = require('../json/projects.json')
    const lp = location.pathname.split('/')
    data.forEach((element) => {
      if (element.key === lp[2]) {
        setLogoc({ color1: element.logocolor, color2: element.logocolor, color3: element.logocolor })
        setBcpts({ bc: element.logocolor, tc: element.bctcolor })
      }
    })
    if (location.pathname === '/') {
      setLogoc({ color1: '#8D8D8D', color2: '#000000', color3: '#C3DA37' })
    }
    if (location.pathname === '/projects') {
      setLogoc({ color1: '#DFB921', color2: '#839292', color3: '#9A82C2' })
    }
    if (location.pathname === '/timeline') {
      setLogoc({ color1: '#DADCF1', color2: '#6BC25C', color3: '#9A82C2' })
    }
  }, [location.pathname])
  return (
    <PortContent.Provider value={{ logoc, setLogoc, bcpts, setBcpts }}>
      {props.children}
    </PortContent.Provider>
  )
}

const usePort = () => useContext(PortContent)

export { usePort, PortProvider }