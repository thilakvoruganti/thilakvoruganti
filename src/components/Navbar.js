import React, { useRef, useState, useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { usePort } from '../context'

const Navbar = () => {




  const navigate = useNavigate()
  const location = useLocation()

  const { logoc, setLogoc, bcpts } = usePort()

  const [tmenu, setTmenu] = useState(false)

  const [breadcrumb, setBreadcrumb] = useState('Aboutme')

  const ref = useRef()

  
  useEffect(() => {
    if (location.pathname === '/') {
      setLogoc({ color1: '#8D8D8D', color2: '#000000', color3: '#C3DA37' })
      setBreadcrumb('Aboutme')
    }
    if (location.pathname === '/projects') {
      setLogoc({ color1: '#DFB921', color2: '#839292', color3: '#9A82C2' })
      setBreadcrumb('Projects')
    }
    if (location.pathname.includes('/projects/')) {
      setBreadcrumb('Projects')
    }
    if (location.pathname === '/timeline') {
      setLogoc({ color1: '#DADCF1', color2: '#6BC25C', color3: '#9A82C2' })
      setBreadcrumb('Timeline')
    }
  },[location.pathname])



  return (
    <>
      <nav className='nvgtn'>
        <div className='logo-c' onClick={() => {
          setBreadcrumb('Aboutme')
          navigate('/')

        }}>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="87" height="40" viewBox="0 0 87 40" fill="none">
            <rect x="10" y="3.05176e-05" width="20" height="40" fill={logoc.color1} />
            <rect y="3.05176e-05" width="40" height="10" fill={logoc.color2} />
            <path d="M87 0H44L65.5 40L87 0Z" fill={logoc.color3} />
          </svg>
        </div>
        <div className='nvc'>
          <div className={`nvc-item ${location.pathname === '/' ? 'bc-active' : ''}`} onClick={() => {
            setBreadcrumb('Aboutme')
            navigate('/')

          }}>
            <div>Aboutme</div>
          </div>
          <div style={{ backgroundColor: `${location.pathname.includes('/projects/') ? bcpts.bc : ""}`, color: `${location.pathname.includes('/projects/') ? bcpts.tc : ""}` }} className={`nvc-item ${location.pathname === '/projects' ? 'bc-active' : ''}`} onClick={() => {
            setBreadcrumb('Projects')
            navigate('/projects')
          }}>
            <div>Projects</div>
          </div>
          <div className={`nvc-item ${location.pathname === '/timeline' ? 'bc-active' : ''}`} onClick={() => {
            setBreadcrumb('Timeline')
            navigate('/timeline')
          }}>
            <div>Timeline</div>
          </div>
        </div>
        <div className='sr-c'>
          <div className='socials'>
            <a href='https://github.com/thilakvoruganti' target="_blank" rel="noopener noreferrer">
              <svg className='git social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" />
                <path d="M47.6692 26.3265L46.4286 27.0408L43.1579 26.4286H39.6617L37.5188 26.6327L35.6015 27.1429L33.6842 26.0204L32.218 25.3061L30.8647 25H29.6241L29.2857 25.8163L28.9474 27.1429V28.8776L29.3985 30.3061L28.4962 31.3265L27.7068 32.551L27.1429 34.5918V37.1429L27.594 39.2857L28.3835 41.2245L29.6241 42.6531L31.6541 44.0816L33.3459 44.6939L34.6992 45L35.7143 45.2041L37.0677 45.4082L36.2782 46.2245L35.9398 47.0408L35.7143 48.0612L34.6992 48.3673L34.1353 48.5714H32.4436L31.6541 48.3673L29.8496 47.0408L29.1729 46.0204L28.0451 45.102L27.2556 44.5918L26.4662 44.3878H25.4511L25 44.5918V44.7959L25.2256 45.102L26.4662 46.0204L27.4812 47.0408L28.1579 48.3673L28.9474 49.4898L30.0752 50.4082L31.3158 50.9184L32.4436 51.0204H34.6992L35.6015 50.8163V55H46.4286V48.4694L46.3158 47.3469L45.6391 46.0204L44.9624 45.4082L47.1053 45.102L49.2481 44.5918L50.9398 43.7755L52.406 42.6531L53.5338 41.4286L54.2105 40.102L54.6617 38.7755L54.8872 37.1429L55 35.7143L54.8872 34.3878L54.6617 33.2653L54.0977 32.0408L53.4211 31.0204L52.7444 30.3061L52.9699 29.2857L53.0827 28.5714V27.7551L52.9699 26.7347L52.7444 25.7143L52.406 25H51.391L50.3759 25.2041L49.0226 25.7143L47.6692 26.3265Z" />
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/thilakvoruganti' target="_blank" rel="noopener noreferrer">
              <svg className='ln social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" stroke="black" />
                <path d="M41.4588 35.6234V37.3441L41.7581 37.0449L42.7307 35.9975L43.4788 35.399L44.8254 34.9501L46.0973 34.6509H48.6409L49.9875 34.9501L51.1845 35.399L51.9327 35.9975L52.98 37.0449L53.6534 38.0175L54.1771 39.2893L54.4763 40.4863L54.6259 41.5337L54.7007 42.4314L54.7756 43.5536V54.3267L54.5511 54.6259L54.4015 54.7756L54.1022 55H48.9401L48.6409 54.7756L48.4913 54.6259L48.3416 54.3267V43.5536L48.1172 42.4314L47.7431 41.5337L47.3691 41.01L46.7706 40.4863L46.2469 40.187L45.798 40.0374H44.4514L43.8529 40.187L43.2544 40.4863L42.6559 41.01L42.207 41.5337L41.7581 42.4314L41.4588 43.5536V54.3267L41.288 54.6259L41.0848 54.7756L40.7855 55H35.7731L35.4738 54.7756L35.3242 54.6259L35.1746 54.3267V35.6234L35.3242 35.2494L35.4738 35.0998L35.9227 34.9501H40.7107L41.01 35.0998L41.2344 35.2494L41.4588 35.6234Z" fill="black" stroke="black" />
                <path d="M32.2569 54.1023V35.6983L32.1072 35.399L31.8828 35.1746L31.5087 34.9501H26.7207L26.3466 35.1746L26.1222 35.399L25.9726 35.6983V54.1023L26.0474 54.4763L26.2718 54.7008L26.6459 54.9252H31.5835L31.9576 54.7008L32.182 54.4763L32.2569 54.1023Z" fill="black" />
                <path d='M25.49999,29.1147a3.61471,3.61471 0 1,0 7.22942,0a3.61471,3.61471 0 1,0 -7.22942,0' fill="black" stroke="black" />
              </svg>
            </a>
            <a href='mailto:thilak.voruganti@gmail.com' target="_blank" rel="noopener noreferrer">
              <svg className='gm social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" stroke="black" />
                <path d="M31.2143 50.9524V38.3333L40.0238 45.9524L48.8333 38.3333V51.0714L48.9524 52.1429L49.3095 52.8571L49.6667 53.4524L50.2619 54.0476L50.9762 54.5238L51.8095 54.881L53 55L53.9524 54.881L54.9048 54.5238L55.619 54.0476L56.2143 53.4524L56.5714 52.8571L56.9286 52.1429L57.1667 51.0714V29.5238V29.0476L57.0476 28.2143L56.8095 27.619L56.4524 26.9048L55.9762 26.3095L55.5 25.8333L54.9048 25.4762L54.0714 25.119L53.2381 25H52.5238L51.5714 25.2381L50.619 25.7143L40.0238 34.881L29.7857 25.9524L29.1905 25.5952L28.4762 25.2381L27.5238 25H26.4524L25.7381 25.2381L24.9048 25.5952L24.1905 26.1905L23.5952 26.9048L23.2381 27.619L23 28.5714V29.7619V50.9524L23.119 52.0238L23.5952 52.9762L24.1905 53.8095L24.9048 54.2857L25.7381 54.7619L26.5714 54.881H27.4048L28.2381 54.7619L29.3095 54.2857L29.9048 53.8095L30.619 52.9762L30.9762 52.0238L31.2143 50.9524Z" fill="black" />
              </svg>
            </a>
          </div>
          <div className='resume-c'>
            <div className='resume'>Resume</div>
            <div className='arw-con'>
              <svg className='arw' xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 42 24" fill="none">
                <path d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar nvgtn-m">
        <div className={`logo-c ${tmenu ? 'd-none' : ''}`} onClick={() => {
          setBreadcrumb('/')
          navigate('/')

        }}>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="87" height="40" viewBox="0 0 87 40" fill="none">
            <rect x="10" y="3.05176e-05" width="20" height="40" fill={logoc.color1} />
            <rect y="3.05176e-05" width="40" height="10" fill={logoc.color2} />
            <path d="M87 0H44L65.5 40L87 0Z" fill={logoc.color3} />
          </svg>
        </div>
        <div className={`sr-c ${tmenu ? '' : 'd-none'}`}>
        <div className='socials'>
            <a href='https://github.com/thilakvoruganti' target="_blank" rel="noopener noreferrer">
              <svg className='git social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" />
                <path d="M47.6692 26.3265L46.4286 27.0408L43.1579 26.4286H39.6617L37.5188 26.6327L35.6015 27.1429L33.6842 26.0204L32.218 25.3061L30.8647 25H29.6241L29.2857 25.8163L28.9474 27.1429V28.8776L29.3985 30.3061L28.4962 31.3265L27.7068 32.551L27.1429 34.5918V37.1429L27.594 39.2857L28.3835 41.2245L29.6241 42.6531L31.6541 44.0816L33.3459 44.6939L34.6992 45L35.7143 45.2041L37.0677 45.4082L36.2782 46.2245L35.9398 47.0408L35.7143 48.0612L34.6992 48.3673L34.1353 48.5714H32.4436L31.6541 48.3673L29.8496 47.0408L29.1729 46.0204L28.0451 45.102L27.2556 44.5918L26.4662 44.3878H25.4511L25 44.5918V44.7959L25.2256 45.102L26.4662 46.0204L27.4812 47.0408L28.1579 48.3673L28.9474 49.4898L30.0752 50.4082L31.3158 50.9184L32.4436 51.0204H34.6992L35.6015 50.8163V55H46.4286V48.4694L46.3158 47.3469L45.6391 46.0204L44.9624 45.4082L47.1053 45.102L49.2481 44.5918L50.9398 43.7755L52.406 42.6531L53.5338 41.4286L54.2105 40.102L54.6617 38.7755L54.8872 37.1429L55 35.7143L54.8872 34.3878L54.6617 33.2653L54.0977 32.0408L53.4211 31.0204L52.7444 30.3061L52.9699 29.2857L53.0827 28.5714V27.7551L52.9699 26.7347L52.7444 25.7143L52.406 25H51.391L50.3759 25.2041L49.0226 25.7143L47.6692 26.3265Z" />
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/thilakvoruganti' target="_blank" rel="noopener noreferrer">
              <svg className='ln social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" stroke="black" />
                <path d="M41.4588 35.6234V37.3441L41.7581 37.0449L42.7307 35.9975L43.4788 35.399L44.8254 34.9501L46.0973 34.6509H48.6409L49.9875 34.9501L51.1845 35.399L51.9327 35.9975L52.98 37.0449L53.6534 38.0175L54.1771 39.2893L54.4763 40.4863L54.6259 41.5337L54.7007 42.4314L54.7756 43.5536V54.3267L54.5511 54.6259L54.4015 54.7756L54.1022 55H48.9401L48.6409 54.7756L48.4913 54.6259L48.3416 54.3267V43.5536L48.1172 42.4314L47.7431 41.5337L47.3691 41.01L46.7706 40.4863L46.2469 40.187L45.798 40.0374H44.4514L43.8529 40.187L43.2544 40.4863L42.6559 41.01L42.207 41.5337L41.7581 42.4314L41.4588 43.5536V54.3267L41.288 54.6259L41.0848 54.7756L40.7855 55H35.7731L35.4738 54.7756L35.3242 54.6259L35.1746 54.3267V35.6234L35.3242 35.2494L35.4738 35.0998L35.9227 34.9501H40.7107L41.01 35.0998L41.2344 35.2494L41.4588 35.6234Z" fill="black" stroke="black" />
                <path d="M32.2569 54.1023V35.6983L32.1072 35.399L31.8828 35.1746L31.5087 34.9501H26.7207L26.3466 35.1746L26.1222 35.399L25.9726 35.6983V54.1023L26.0474 54.4763L26.2718 54.7008L26.6459 54.9252H31.5835L31.9576 54.7008L32.182 54.4763L32.2569 54.1023Z" fill="black" />
                <path d='M25.49999,29.1147a3.61471,3.61471 0 1,0 7.22942,0a3.61471,3.61471 0 1,0 -7.22942,0' fill="black" stroke="black" />
              </svg>
            </a>
            <a href='mailto:thilak.voruganti@gmail.com' target="_blank" rel="noopener noreferrer">
              <svg className='gm social' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="39.5" stroke="black" />
                <path d="M31.2143 50.9524V38.3333L40.0238 45.9524L48.8333 38.3333V51.0714L48.9524 52.1429L49.3095 52.8571L49.6667 53.4524L50.2619 54.0476L50.9762 54.5238L51.8095 54.881L53 55L53.9524 54.881L54.9048 54.5238L55.619 54.0476L56.2143 53.4524L56.5714 52.8571L56.9286 52.1429L57.1667 51.0714V29.5238V29.0476L57.0476 28.2143L56.8095 27.619L56.4524 26.9048L55.9762 26.3095L55.5 25.8333L54.9048 25.4762L54.0714 25.119L53.2381 25H52.5238L51.5714 25.2381L50.619 25.7143L40.0238 34.881L29.7857 25.9524L29.1905 25.5952L28.4762 25.2381L27.5238 25H26.4524L25.7381 25.2381L24.9048 25.5952L24.1905 26.1905L23.5952 26.9048L23.2381 27.619L23 28.5714V29.7619V50.9524L23.119 52.0238L23.5952 52.9762L24.1905 53.8095L24.9048 54.2857L25.7381 54.7619L26.5714 54.881H27.4048L28.2381 54.7619L29.3095 54.2857L29.9048 53.8095L30.619 52.9762L30.9762 52.0238L31.2143 50.9524Z" fill="black" />
              </svg>
            </a>
          </div>
          <div className='resume-c'>
            <div className='resume'>Resume</div>
            <div className='arw-con'>
              <svg className='arw' xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 42 24" fill="none">
                <path d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM0 13.5H40V10.5H0V13.5Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: `${location.pathname.includes('/projects/') ? bcpts.bc : ""}`, color: `${location.pathname.includes('/projects/') ? bcpts.tc : ""}` }} className={`nvc-m ${tmenu ? '' : 'nvc-e'}`} >
          <div className={`${tmenu ? 'd-none' : ''}`}>{breadcrumb}</div>
          <button className="navbar-toggler btn-tgl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className='menu-icon'>
              <input ref={ref} type="checkbox" id="menu" onChange={() => setTmenu(!tmenu)}></input>
              <label htmlFor="menu" className={`icon `}>
                <div className="menu"></div>
              </label>
            </div>
          </button>
        </div>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className={`nvc`}>
            <div className={`nvc-item ${location.pathname === '/' ? 'bc-active' : ''}`} onClick={() => {
              ref.current.click()
              setBreadcrumb('Aboutme')
              navigate('/')
            }} >
              <div>Aboutme</div>
            </div>
            <div style={{ backgroundColor: `${location.pathname.includes('/projects/') ? bcpts.bc : ""}`, color: `${location.pathname.includes('/projects/') ? bcpts.tc : ""}` }} className={`nvc-item ${location.pathname === '/projects' ? 'bc-active' : ''}`} onClick={() => {
              ref.current.click()
              setBreadcrumb('Projects')
              navigate('/projects')
            }}>
              <div>Projects</div>
            </div>
            <div className={`nvc-item ${location.pathname === '/timeline' ? 'bc-active' : ''}`} onClick={() => {
              ref.current.click()
              setBreadcrumb('Timeline')
              navigate('/timeline')
            }}>
              <div>Timeline</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar