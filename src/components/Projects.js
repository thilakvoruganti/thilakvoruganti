import React, { useState,useEffect } from 'react'

const Projects = () => {

  const [pjtl,setPjtl] = useState(1)
  const [pjc1,setPjc1] = useState(false)
  const [pjc2,setPjc2] = useState(false)
  const [pjc3,setPjc3] = useState(false)
  const [pjc4,setPjc4] = useState(false)
  const height = window.innerHeight/1080

  const[pjtlu,setPjtlu] = useState(true)


  useEffect(()=>{

    const sy = () => {
      // if(window.scrollY > 1360*height  &&  window.scrollY < 1925*height && pjtlu){
      //   const cof = 1.5-(0.5/(1925*height-1360*height))*(window.scrollY-1360*height)
      //   if(pjtl > 1){
      //     setPjtl(cof)
      //   }
      // }

      if(window.scrollY > 1925*height){
        setPjc1(true)
        setPjc2(true)
        setPjtlu(false)
      }

      if(window.scrollY > 2225*height){
        setPjc3(true)
        setPjc4(true)
      }

      if(window.scrollY < 1925*height){
        setPjc1(false)
        setPjc2(false)
      }

      if(window.scrollY < 2225*height){
        setPjc3(false)
        setPjc4(false)
      }

    }

    const scroll = window.addEventListener('scroll', sy)

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  })


  return (
    <section className='projects'>
      <div className='d-flex justify-start'>
        <h1 style={{transform:`matrix(${pjtl}, 0, 0, ${pjtl}, 0, 0)`}}>Projects</h1>
      </div>
      <div className='pjc'>
        <div className={`pj ${pjc1?'pjct':''}`}>
          <h2>01.Guidance TamilNadu</h2>
          <p>‘Guidance’ is the Government of Tamil Nadu’s nodal agency for investment promotion and single window facilitation.
            I contributed to the creation of their website from the ground up using the frontend tools I am familiar with.</p>
          <button>Case Study <svg className='btnarw' xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
            <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807612 23.9792 0.807612 23.3934 1.3934C22.8076 1.97918 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z" fill="#FF7700" />
          </svg></button>
        </div>
        <div className={`pj ${pjc2?'pjct':''}`}>
          <h2>02.Ecoflights</h2>
          <p>‘Guidance’ is the Government of Tamil Nadu’s nodal agency for investment promotion and single window facilitation.
            I contributed to the creation of their website from the ground up using the frontend tools I am familiar with.</p>
          <button>Case Study <svg className='btnarw' xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
            <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807612 23.9792 0.807612 23.3934 1.3934C22.8076 1.97918 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z" fill="#FF7700" />
          </svg></button>
        </div>
        <div className={`pj ${pjc3?'pjct':''}`}>
          <h2>03.E-commerce</h2>
          <p>‘Guidance’ is the Government of Tamil Nadu’s nodal agency for investment promotion and single window facilitation.
            I contributed to the creation of their website from the ground up using the frontend tools I am familiar with.</p>
          <button>Case Study <svg className='btnarw' xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
            <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807612 23.9792 0.807612 23.3934 1.3934C22.8076 1.97918 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z" fill="#FF7700" />
          </svg></button>
        </div>
        <div className={`pj ${pjc4?'pjct':''}`}>
          <h2>04.Portfolio</h2>
          <p>‘Guidance’ is the Government of Tamil Nadu’s nodal agency for investment promotion and single window facilitation.
            I contributed to the creation of their website from the ground up using the frontend tools I am familiar with.</p>
          <button>Case Study <svg className='btnarw' xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
            <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807612 23.9792 0.807612 23.3934 1.3934C22.8076 1.97918 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z" fill="#FF7700" />
          </svg></button>
        </div>
      </div>
    </section>
  )
}

export default Projects