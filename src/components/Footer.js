import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation} from 'react-router-dom'

const Footer = () => {

  const location = useLocation()
  const [footer,setFooter] = useState(false)

  useEffect(()=>{
    if(location.pathname === '/resume'){
      setFooter(true)
    }
    else{
      setFooter(false)
    }
  },[location.pathname])

  return (
    <section className={`ftr ${footer?'d-none':''}`}>
        <div>&#169; Copyright 2023 Made by ThilakVoruganti</div>
    </section>
  )
}

export default Footer