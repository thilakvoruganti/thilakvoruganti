import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePort } from '../context'

const Project = () => {
    let data = require('../json/projects.json')
    const [pdata,setPdata] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    const {setLogoc,bcpts,setBcpts} = usePort()

    useEffect(()=>{
        data.map((element)=>{
            if(element.key === params.slug){
                setPdata(element)
                setLogoc({ color1: element.logocolor, color2: element.logocolor, color3: element.logocolor})
                setBcpts({...bcpts,bc:element.logocolor,tc:element.bctcolor})
            }
        })
    },[])


  return (
    <section className='ipt'>
        <div className='tt-c' style={{color:pdata?.pcolor, backgroundColor:pdata?.scolor}}>
            <h1>{pdata?.title}</h1>
            <div className='bt-c'>
                <button style={{color:pdata?.pcolor,borderColor:pdata?.pcolor}}><a target="_blank" href={pdata.link} style={{color:pdata?.pcolor}}>{pdata?.linktext}</a></button>
                <button style={{color:pdata?.pcolor,borderColor:pdata?.pcolor}} onClick={()=>{
                    navigate('/projects')
                }}>Go Back</button>
            </div>
        </div>
        <div className='ov'  style={{color:pdata?.textcolor, backgroundColor:pdata?.scolor}}>
            <h2>Project Overview</h2>
            <p>{pdata?.p1}</p>
            <p>{pdata?.p2}</p>
        </div>
        <div className='tg'  style={{color:pdata?.textcolor, backgroundColor:pdata?.scolor}}>
            <h2>Technologies</h2>
            {pdata?.technologies?.map((element)=>{
                return <button className='btns' style={{color:pdata?.textcolor,borderColor:pdata?.textcolor}} key={element} >{element}</button>
            })}
        </div>
    </section>
  )
}

export default Project