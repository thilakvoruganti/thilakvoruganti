import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Project = () => {
    const [pdata, setPdata] = useState({})
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        let data = require('../json/projects.json')
        const projectColor = (key) => {
            data.forEach((element) => {
                if (element.key === key) {
                    setPdata(element)
                }
            })
        }
      projectColor(params.slug)
    }, [params.slug])


    return (
        <section className='ipt'>
            <div className='tt-c' style={{ color: pdata?.pcolor, backgroundColor: pdata?.scolor }}>
                <h1>{pdata?.title}</h1>
                <div className='bt-c'>
                    <button style={{ color: pdata?.pcolor, borderColor: pdata?.pcolor }}><a target="_blank" rel="noopener noreferrer" href={pdata.link} style={{ color: pdata?.pcolor }}>{pdata?.linktext}</a></button>
                    <button style={{ color: pdata?.pcolor, borderColor: pdata?.pcolor }} onClick={() => {
                        navigate('/projects')
                    }}>Go Back</button>
                </div>
            </div>
            <div className='ov' style={{ color: pdata?.textcolor, backgroundColor: pdata?.scolor }}>
                <h2>Project Overview</h2>
                <p>{pdata?.p1}</p>
                <p>{pdata?.p2}</p>
            </div>
            <div className='tg' style={{ color: pdata?.textcolor, backgroundColor: pdata?.scolor }}>
                <h2>Technologies</h2>
                {pdata?.technologies?.map((element) => {
                    return <button className='btns' style={{ color: pdata?.textcolor, borderColor: pdata?.textcolor }} key={element} >{element}</button>
                })}
            </div>
        </section>
    )
}

export default Project