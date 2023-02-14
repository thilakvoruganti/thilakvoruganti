import React,{ createContext, useContext, useState} from 'react'

const PortContent = createContext()


const PortProvider = (props) => {

    const [logoc, setLogoc] = useState({ color1: '#8D8D8D', color2: '#000000', color3: '#C3DA37' })
    const [bcpts, setBcpts] = useState({bc:'',tc:''})



  return (
    <PortContent.Provider value={{logoc, setLogoc,bcpts, setBcpts }}>
        {props.children}
    </PortContent.Provider>
  )
}

const usePort = () => useContext(PortContent)

export { usePort, PortProvider}