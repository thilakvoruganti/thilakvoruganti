import React, { useEffect, useState } from 'react'



const About = () => {

  const height = window.innerHeight/1080

  const[amtle,setAmtle] = useState(1.5)
  // const[amtley,setAmtley] = useState(1.5)

  const[ampo, setAmpo] = useState(false)
  const[ampt, setAmpt] = useState(false)
  const[ampth, setAmpth] = useState(false)
  const[tldst,setTldst] = useState(false)
  const[tlbtns,setTlbtns] = useState(false)

  useEffect(()=>{

    const sy = () => {

      if(window.scrollY > 125*height  &&  window.scrollY < 690*height){
          const cof = 1.5-(0.5/(690*height-125*height))*(window.scrollY-125*height)
          if(amtle > 1){
            setAmtle(cof)
          }
      }
      if(window.scrollY > 700*height){
        setAmpo(true)
        setAmpt(true)
        setAmpth(true)
      }
      if(window.scrollY < 700*height){
        setAmpo(false)
        setAmpt(false)
        setAmpth(false)
      }
      if(window.scrollY > 850*height){
        setTldst(true)
        setTlbtns(true)
      }
      if(window.scrollY < 700*height){
        setTldst(false)
        setTlbtns(false)
      }
    }

    const scroll = window.addEventListener('scroll', sy)
  })

  return (
    <section className='about'>
      <div className={`tldsply ${tldst?'tldst':''} tab-content`} id="tl-tabContent">
        <div className="tl-tab tlt-gp tab-pane fade show active" id="tl-home" role="tabpanel" aria-labelledby="tl-home-tab" tabIndex="0">
        <div className='tf'>Present - March 2022</div>
          <h2 className='tld-h1'>Personal goal pursuit</h2>
          <ul>
            <li>Collaborated with a team to design and develop a website, that makes it much easier and more convenient for investors to obtain business-related clearances from the government sector. </li>
            <li>Developed interactive, responsive and optimised webpages using jQuery and Javascript.</li>
            <li>Worked and guided Back-end team in developing portal.</li>
            <li>Skills Learned: Node, Express, Seaborn, Matplotlib, Pandas.</li>
          </ul>
        </div>
        <div className="tl-tab tlt-tcs tab-pane fade" id="tl-profile" role="tabpanel" aria-labelledby="tl-profile-tab" tabIndex="0">
          <div className='tf'>Feb 2022 - Feb 2021</div>
          <h2 className='tld-h1'>Tata Consultancy Services</h2>
          <h2 className='tld-h2'>Frontend Developer</h2>
          <ul>
            <li>Collaborated with a team to design and develop a website, that makes it much easier and more convenient for investors to obtain business-related clearances from the government sector. </li>
            <li>Developed interactive, responsive and optimised webpages using jQuery and Javascript.</li>
            <li>Worked and guided Back-end team in developing portal.</li>
            <li> Technologies: HTML, Sass, Bootstrap, Javascript, jQuery.</li>
          </ul>
        </div>
        <div className="tl-tab tlt-griet tab-pane fade" id="tl-contact" role="tabpanel" aria-labelledby="tl-contact-tab" tabIndex="0">
        <div className='tf'>Oct 2020 - Aug 2016</div>
          <h2 className='tltgriet'>Gokaraju Rangaraju Institute of Engineering and Technology</h2>
          <ul>
            <li>Collaborated with a team to design and develop a website, that makes it much easier and more convenient for investors to obtain business-related clearances from the government sector. </li>
            <li>Developed interactive, responsive and optimised webpages using jQuery and Javascript.</li>
            <li>Worked and guided Back-end team in developing portal.</li>
            <li> Technologies: HTML, Sass, Bootstrap, Javascript, jQuery.</li>
          </ul>
        </div>
      </div>
      <div className='abme'>
        <h1 className='am-tle' style={{transform:`matrix(${amtle}, 0, 0, ${amtle}, 0, 0)`}} >About me.</h1>
        <p className={`${ampo?"ampo":""}`}>I am a frontend developer who enjoys the challenge of creating something from scratch and bringing it to life on the web.I am a frontend developer who enjoys the challenge of creating something from scratch and bringing it to life on the web.</p>
        <p className={`${ampt?"ampo":""}`}>I am a frontend developer who enjoys the challenge of creating something from scratch and bringing it to life on the web.I am a frontend developer who enjoys the challenge of creating something from scratch and bringing it to life on the web.</p>
        <p className={`${ampth?"ampo":""}`}>I am a frontend developer who enjoys </p>
        <div className='d-flex'>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
          <ul>
            <li>Express</li>
            <li>Node</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div className={`tl ${tlbtns?'tlbtns':''} nav nav-pills`} id="tl-tab" role="tablist">
        <div className="nv-it nav-item" role="presentation">
          <button className="tl-btn tl-gp nav-link active " id="tl-home-tab" data-bs-toggle="pill" data-bs-target="#tl-home" type="button" role="tab" aria-controls="tl-home" aria-selected="true">
            <svg className='svgtl sgp' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48.5" fill="white" stroke="#FF7700" strokeWidth="3" />
              <rect width="67.5" height="52" transform="translate(16 24)" fill="white" />
              <path d="M24.5 35L25.5 35.2456L20.2644 50.7456H20H19.5H19H18.5L18 50.2456L17.5 49.7456L17 49.2456L16.5 48.2456L16 47.2456L16.5 44.7456L18 41.2456L19 39.7456L20.5 37.7456L21.5 36.7456L22.5 35.7456L23.5 35.2456L24.5 35Z" fill="#FF7700" />
              <path d="M30.5 35.5H27.5L16.5 67.5V69V70.5L18.5 71.5H21L23 69L24.5 66L26 63.5L27.5 61L28 60H28.5L30.5 60.5L31 61L32 64.5L33 67.5L34 71L35 72.5L36 73L38.5 72.5L40 71.5V69L39 65L38.5 61.5L38 58L36.5 56.5L34 54.5L32.5 52.5L33 49.5L34 46.5L34.5 45.5H35L38 46.5L39.5 47.5L42.5 48.5H44L45.5 48V47L45 45.5L44 44.5L43.5 44L41 42L39 40.5L37 39L35.5 37.5L34 36.5L32 35.5H30.5Z" fill="#FF7700" />
              <path d="M35 76H47V64H59V51H71.5V39H83.5" stroke="#FF7700" strokeWidth="3" />
              <circle cx="34.5" cy="29.5" r="5.5" fill="#FF7700" />
            </svg>
            <svg className='svgtlh sgph' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#FF7700" />
              <path d="M24.5 35L25.5 35.2456L20.2644 50.7456H20H19.5H19H18.5L18 50.2456L17.5 49.7456L17 49.2456L16.5 48.2456L16 47.2456L16.5 44.7456L18 41.2456L19 39.7456L20.5 37.7456L21.5 36.7456L22.5 35.7456L23.5 35.2456L24.5 35Z" fill="white" />
              <path d="M30.5 35.5H27.5L16.5 67.5V69V70.5L18.5 71.5H21L23 69L24.5 66L26 63.5L27.5 61L28 60H28.5L30.5 60.5L31 61L32 64.5L33 67.5L34 71L35 72.5L36 73L38.5 72.5L40 71.5V69L39 65L38.5 61.5L38 58L36.5 56.5L34 54.5L32.5 52.5L33 49.5L34 46.5L34.5 45.5H35L38 46.5L39.5 47.5L42.5 48.5H44L45.5 48V47L45 45.5L44 44.5L43.5 44L41 42L39 40.5L37 39L35.5 37.5L34 36.5L32 35.5H30.5Z" fill="white" />
              <path d="M35 76H47V64H59V51H71.5V39H83.5" stroke="white" strokeWidth="3" />
              <circle cx="34.5" cy="29.5" r="5.5" fill="white" />
            </svg>
          </button>
        </div>
        <div className="nv-it nav-item" role="presentation">
          <button className="tl-btn tl-tcs nav-link" id="tl-profile-tab" data-bs-toggle="pill" data-bs-target="#tl-profile" type="button" role="tab" aria-controls="tl-profile" aria-selected="false">
            <svg className='svgtl stcs' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48.5" fill="#FEFEFE" stroke="#FF7700" strokeWidth="3" />
              <path d="M43.75 67L44.75 66H72.25L79.75 44L81 43H82.25L83.25 43.5V45L74.5 69.75L44.75 69.25L43.75 68.25V67Z" fill="#FF7700" stroke="#FF7700" />
              <path d="M36.75 71.75L37.75 71H79V75.5H37.75L36.75 74.5L36.25 73.25L36.75 71.75Z" fill="#FF7700" stroke="#FF7700" />
              <path d="M35.25 66.25V76.75H16.5V50.25V48.5L17.25 47L18.75 45.75L21.25 44L23 43H28H28.5L30.25 44L32.25 45.75L33.5 47L34.5 48.5L35.25 50.25V57H59.75L60.75 57.5L61.25 58L61.75 58.5L62.25 59V60V60.75V61.5V62.5L61.75 63.25L61.25 63.75L60.75 64.25L59.75 64.75H35.25H34L33.5 64.25L26.25 56.75L25.25 55.75L24.5 55H24L23.5 55.75L24 56.75L32.25 65.25L33.5 66.25H35.25Z" fill="#FF7700" stroke="#FF7700" />
              <circle cx="33.75" cy="33" r="10" fill="#FF7700" />
            </svg>
            <svg className='svgtlh stcsh' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#FF7700" />
              <path d="M43.75 67L44.75 66H72.25L79.75 44L81 43H82.25L83.25 43.5V45L74.5 69.75L44.75 69.25L43.75 68.25V67Z" fill="white" stroke="white" />
              <path d="M36.75 71.75L37.75 71H79V75.5H37.75L36.75 74.5L36.25 73.25L36.75 71.75Z" fill="white" stroke="white" />
              <path d="M35.25 66.25V76.75H16.5V50.25V48.5L17.25 47L18.75 45.75L21.25 44L23 43H28H28.5L30.25 44L32.25 45.75L33.5 47L34.5 48.5L35.25 50.25V57H59.75L60.75 57.5L61.25 58L61.75 58.5L62.25 59V60V60.75V61.5V62.5L61.75 63.25L61.25 63.75L60.75 64.25L59.75 64.75H35.25H34L33.5 64.25L26.25 56.75L25.25 55.75L24.5 55H24L23.5 55.75L24 56.75L32.25 65.25L33.5 66.25H35.25Z" fill="white" stroke="white" />
              <circle cx="33.75" cy="33" r="10" fill="white" />
            </svg>
          </button>
        </div>
        <div className="nv-it nav-item" role="presentation">
          <button className="tl-btn tl-griet nav-link" id="tl-contact-tab" data-bs-toggle="pill" data-bs-target="#tl-contact" type="button" role="tab" aria-controls="tl-contact" aria-selected="false">
            <svg className='svgtl sgriet' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48.5" fill="white" stroke="#FF7700" strokeWidth="3" />
              <path d="M55 41.75H44.75L37.75 42.75L32.75 44L29.25 46L26.5 48.75L23.5 54.5L21.5 59.75L20 64.75L19.25 68.75L19 71V72L19.25 72.75L20 73.75L22 75.5L23.25 76.25L25 76.75L27 77.25H28.25L29.5 76.75L30.5 76.25L31.25 75.5L31.75 74.5V73.75V72.75L31.25 71.75L30.5 71L29.5 70L28.25 69.25L27 68.75V51.5L50 59.75L73.25 51.5V68.75L71.25 69.5L69.25 71L68.25 72.75V74.5L69.25 76.25L71.25 77.25L73.25 77.5L76.5 76L79.25 74.5L80.5 72.75V71V68.75L80 66.75L79 62.75L77.5 58L75.5 53.25L73.75 49.5L71.5 46.75L69 45L66 43.75L62 42.75L55 41.75Z" fill="#FF7700" />
              <path d="M28.5 67.25V53.75L49 61.25V88.25L28.5 81V79L30.25 78.75L32 77.75L33 76.25L33.5 74.5V72.25L32.5 70.5L31.5 69.25L30 68.25L28.5 67.25Z" fill="#FF7700" />
              <path d="M51 88.25V61L71.5 53.75V67.5L69.75 68.25L68 70L66.75 71.5L66.5 73.5L66.75 75.5L68 77.5L69.75 78.5L71.5 79V81L51 88.25Z" fill="#FF7700" />
              <circle cx="49.75" cy="26.25" r="14.25" fill="#FF7700" />
            </svg>
            <svg className='svgtlh sgrieth' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="#FF7700" />
              <path d="M55 41.75H44.75L37.75 42.75L32.75 44L29.25 46L26.5 48.75L23.5 54.5L21.5 59.75L20 64.75L19.25 68.75L19 71V72L19.25 72.75L20 73.75L22 75.5L23.25 76.25L25 76.75L27 77.25H28.25L29.5 76.75L30.5 76.25L31.25 75.5L31.75 74.5V73.75V72.75L31.25 71.75L30.5 71L29.5 70L28.25 69.25L27 68.75V51.5L50 59.75L73.25 51.5V68.75L71.25 69.5L69.25 71L68.25 72.75V74.5L69.25 76.25L71.25 77.25L73.25 77.5L76.5 76L79.25 74.5L80.5 72.75V71V68.75L80 66.75L79 62.75L77.5 58L75.5 53.25L73.75 49.5L71.5 46.75L69 45L66 43.75L62 42.75L55 41.75Z" fill="white" />
              <path d="M28.5 67.25V53.75L49 61.25V88.25L28.5 81V79L30.25 78.75L32 77.75L33 76.25L33.5 74.5V72.25L32.5 70.5L31.5 69.25L30 68.25L28.5 67.25Z" fill="white" />
              <path d="M51 88.25V61L71.5 53.75V67.5L69.75 68.25L68 70L66.75 71.5L66.5 73.5L66.75 75.5L68 77.5L69.75 78.5L71.5 79V81L51 88.25Z" fill="#FEFEFE" />
              <circle cx="49.75" cy="26.25" r="14.25" fill="white" />
            </svg>
          </button>
        </div>
        <svg className='sline' xmlns="http://www.w3.org/2000/svg" width="1032" height="6" viewBox="0 0 1032 6" fill="none">
          <line x1="-0.000976562" y1="1.5" x2="1032" y2="1.5" stroke="#FF7700" strokeWidth="3" />
        </svg>
      </div>
    </section>
  )
}






export default About


