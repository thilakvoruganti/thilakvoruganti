import React from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  let navigate = useNavigate()
  let data = require('../json/projects.json')

  return (
    <section className='pjts'>
      {data?.map((element) => {
        return <div key={element.uid} className={`pjts-c ${element.className}`}>
          <div className='d-flex justify-content-between'>
            <button className='btntl'>{element.type}</button>
            <div className='ls-c' onClick={() => {
              navigate(`/projects/${element.key}`)
            }}>
              <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                <circle cx="23.5" cy="23.5" r="22" stroke={element.svgcolor} strokeWidth="3" />
                <path d="M37.0607 25.0607C37.6464 24.4749 37.6464 23.5251 37.0607 22.9393L27.5147 13.3934C26.9289 12.8076 25.9792 12.8076 25.3934 13.3934C24.8076 13.9792 24.8076 14.9289 25.3934 15.5147L33.8787 24L25.3934 32.4853C24.8076 33.0711 24.8076 34.0208 25.3934 34.6066C25.9792 35.1924 26.9289 35.1924 27.5147 34.6066L37.0607 25.0607ZM11 25.5L36 25.5V22.5L11 22.5V25.5Z" fill={element.svgcolor} />
              </svg>
            </div>
          </div>
          <h3>{element.title}</h3>
          {element?.p?.map((e) => {
            return <p key={e.pk} >{e.pt}</p>
          })}
        </div>
      })}
    </section>
  )
}

export default Projects