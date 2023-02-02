import React, { useState } from 'react'

const Navbar = () => {

  const [nav, setNav] = useState(true)


  return (
    <div className='navigation'>
      <div className='logo'>
        {/* <img src={require('../images/tv.png')} /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="54" viewBox="0 0 91 54" fill="none">
          <rect x="10" y="13.383" width="20" height="40" fill="#FF7700" />
          <rect y="13.383" width="40" height="10" fill="#FF7700" />
          <path d="M65.1311 53.495L43.4805 13.3737L86.7817 13.3737L65.1311 53.495Z" fill="#FF7700" />
        </svg>
      </div>
      <div className={`notch ${nav ? 'nthon' : ''}`}>
        <div>About</div>
        <div>Experience</div>
        <div>Work</div>
        <div>Contact</div>
      </div>
      <div className='menu-icon'>
        <input type="checkbox" id="menu" onChange={() => { setNav(!nav) }}></input>
        <label htmlFor="menu" className={`icon `}>
          <div className="menu"></div>
        </label>
      </div>
    </div>
  )
}

export default Navbar