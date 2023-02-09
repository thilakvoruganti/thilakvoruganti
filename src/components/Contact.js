import React, { useState } from 'react'

const Contact = () => {

    const [ctdt, setCtdt] = useState({'name':'','email':'','message':''})
    const [alert,setAlert] = useState({})

    const onCd = (e) => {
        setCtdt({...ctdt,[e.target.name]:e.target.value})
    }

    const subcd = (e) => {
        e.preventDefault()
        let cname = /^[a-zA-Z]{1,}$/.test(ctdt.name)
        let cemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ctdt.email)
        let cmsg = /^[a-zA-Z0-9]{1,}$/.test(ctdt.message)
        console.log(cname,cemail,cmsg)
        setAlert({...alert,'name':cname,'email':cemail,'message':cmsg})
        if(cname && cemail && cmsg){
            console.log('hi')
        }
    }

    return (
        <div className='contact'>
            <h1>Contact me</h1>
            <form onSubmit={subcd}>
                <div className="form-floating">
                    <input 
                        type="text" 
                        className={`iptcd form-control ${alert.name === false?'is-invalid':''}`}
                        placeholder='Name' 
                        id="name"
                        name='name'  
                        value={ctdt.name}
                        onChange={onCd} 
                    />
                    <label className='lblcd' htmlFor="name">Name</label>
                </div>
                <div className={`altmsg ${alert.name === false?'altop':''}`}>Enter a valid name</div>
                <div className="form-floating">
                    <input 
                        type="gmail" 
                        placeholder='Email'
                        className={`iptcd form-control ${alert.email === false?'is-invalid':''}`} 
                        id="email"
                        name='email'  
                        value={ctdt.email}
                        onChange={onCd} 
                    />
                    <label className='lblcd' htmlFor="gmail">Email</label>
                </div>
                <div className={`altmsg ${alert.email === false?'altop':''}`}>Enter a valid email</div>
                <div className="form-floating">
                    <textarea  
                        className={`iptcd form-control ${alert.message === false?'is-invalid':''}`}
                        placeholder='Message' 
                        id="message" 
                        name='message'
                        value={ctdt.message}
                        onChange={onCd}
                    />
                    <label className='lblcd' htmlFor="message">Message</label>
                </div>
                <div className={`altmsg ${alert.message === false?'altop':''}`}>Enter a valid message</div>
                <button>Contact me</button>
            </form>
        </div>
    )
}

export default Contact