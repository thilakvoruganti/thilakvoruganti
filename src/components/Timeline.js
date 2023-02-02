// import React from 'react'

// const Timeline = () => {
//   return (
//     <section className='timeline'>
//       <div className='tldsply tab-content' id="tl-tabContent">
//         <div className="tl-tab tlt-gp tab-pane fade show active" id="tl-home" role="tabpanel" aria-labelledby="tl-home-tab" tabIndex="0">

//         </div>
//         <div className="tl-tab tlt-tcs tab-pane fade" id="tl-profile" role="tabpanel" aria-labelledby="tl-profile-tab" tabIndex="0">
//           <div className='tf'>Feb 2022 - Feb 2021</div>
//           <h1 className='tld-h1'>Tata Consultancy Servives</h1>
//           <h1 className='tld-h2'>Frontend Developer</h1>
//           <ul>
//             <li>Collaborated with a team to design and develop a website, that makes it much easier and more convenient for investors to obtain business-related clearances from the government sector. </li>
//             <li>Developed interactive, responsive and optimised webpages using jQuery and Javascript.</li>
//             <li>Worked and guided Back-end team in developing portal.</li>
//             <li> Technologies: HTML, Sass, Bootstrap, Javascript, jQuery.</li>
//           </ul>
//         </div>
//         <div className="tl-tab tlt-griet tab-pane fade" id="tl-contact" role="tabpanel" aria-labelledby="tl-contact-tab" tabIndex="0">

//         </div>
//       </div>
//       <div className='tl nav nav-pills mb-3' id="tl-tab" role="tablist">
//         <div className="nav-item" role="presentation">
//           <button className="tl-btn tl-gp nav-link active " id="tl-home-tab" data-bs-toggle="pill" data-bs-target="#tl-home" type="button" role="tab" aria-controls="tl-home" aria-selected="true">
//               <p>Present - March 2022</p>
//               <h1>Personal goal pursuit</h1>
//           </button>
//         </div>
//         <div className="nav-item" role="presentation">
//           <button className="tl-btn tl-tcs nav-link" id="tl-profile-tab" data-bs-toggle="pill" data-bs-target="#tl-profile" type="button" role="tab" aria-controls="tl-profile" aria-selected="false">
//               <h1>Tata consultancy Services</h1>
//               <h2>Frontend Developer</h2>
//               <p>Feb 2022 - Feb 2021</p>
//           </button>
//         </div>
//         <div className="nav-item" role="presentation">
//           <button className="tl-btn tl-griet nav-link" id="tl-contact-tab" data-bs-toggle="pill" data-bs-target="#tl-contact" type="button" role="tab" aria-controls="tl-contact" aria-selected="false">
//               <p>Oct 2020 - Aug 2016</p>
//               <h1>Gokaraju Rangaraju Institute of Engineering and Technology</h1>
//               <h2>B.Tech - Computer Science</h2>
//           </button>
//         </div>
//         <div className='circle c-gp'></div>
//         <div className='circle c-tcs'></div>
//         <div className='circle c-griet'></div>
//         <svg  className='tl-svg' xmlns="http://www.w3.org/2000/svg" width="1032" height="6" viewBox="0 0 1032 6" fill="none">
//           <line x1="-0.000976562" y1="1.5" x2="1032" y2="1.5" stroke="#FF7700" strokeWidth="3"/>
//         </svg>
//         {/* <svg xmlns="http://www.w3.org/2000/svg" width="1032" height="3" viewBox="0 0 1032 3" fill="none">
//           <line x1="-0.000976562" y1="1.5" x2="1032" y2="1.5" stroke="#FF7700" stroke-width="3"/>
//         </svg> */}
//       </div>
//       {/* <div className='tldsply'>

//       </div>
//       <div className='tl'>
//         <div className='tl-gp'>
//           <p>Present - March 2022</p>
//           <h1>Personal goal pursuit</h1>
//         </div>
//         <div className='tl-tcs'>
//           <h1>Tata consultancy Services</h1>
//           <h2>Frontend Developer</h2>
//           <p>Feb 2022 - Feb 2021</p>
//         </div>
//         <div className='tl-griet'>
//           <p>Oct 2020 - Aug 2016</p>
//           <h1>Gokaraju Rangaraju Institute of Engineering and Technology</h1>
//           <h2>B.Tech - Computer Science</h2>
//         </div>
//         <div className='circle c-gp'></div>
//         <div className='circle c-tcs'></div>
//         <div className='circle c-griet'></div>
//         <div className='tl-svg' >
//           <svg className='line' xmlns="http://www.w3.org/2000/svg" width="1032" height="6" viewBox="0 0 1032 6" fill="none">
//             <line x1="0.00329187" y1="1.5" x2="1367" y2="4.5" stroke="#FF7700" strokeWidth="3" />
//           </svg>
//         </div>
//       </div> */}
//               <div className='resarw'>
//           <p className={`res ${resaw ? 'resp' : ''}`}>
//             check out my resume
//           </p>
//           <svg className={`raw ${resaw ? 'resaw' : ''}`} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
//             <circle cx="37.5" cy="37.5" r="36" stroke="#FF7700" strokeWidth="3" />
//             <path d="M58.0312 39.8815C58.6286 39.3075 58.6476 38.358 58.0737 37.7606L48.7205 28.0257C48.1466 27.4283 47.197 27.4093 46.5996 27.9833C46.0022 28.5572 45.9832 29.5068 46.5572 30.1042L54.8711 38.7574L46.2179 47.0713C45.6205 47.6453 45.6015 48.5948 46.1754 49.1922C46.7494 49.7896 47.6989 49.8086 48.2963 49.2346L58.0312 39.8815ZM16.97 39.4997L56.962 40.2995L57.022 37.3001L17.03 36.5003L16.97 39.4997Z" fill="#FF7700" />
//           </svg>
//         </div>
//                 {/* <div>
//           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 100 75" fill="none">
//             <rect x="1.5" y="1.5" width="97" height="72" rx="13.5" stroke="#FF7700" strokeWidth="3" />
//             <path d="M24.8867 38.875L38.3828 44.3438V48.1719L22.4062 40.7695V38.5234L24.8867 38.875ZM38.3828 34.3828L24.9062 39.9297L22.4062 40.2031V37.9375L38.3828 30.5547V34.3828ZM56.6836 23.5625L44.8281 54.4414H41.7227L53.5977 23.5625H56.6836ZM74.3984 39.6562L60.5117 34.2461V30.5156L77.1914 37.8984V40.1836L74.3984 39.6562ZM60.5117 44.4219L74.4375 38.8945L77.1914 38.4844V40.75L60.5117 48.1523V44.4219Z" fill="#FF7700" />
//           </svg>
//         </div> */}
//     </section>
//   )
// }


// const dash = keyframes` {
//   from {
//     stroke-dashoffset: 1000;
//   }
//   to {
//     stroke-dashoffset: 0;
//   }
// }`;


// const Wrapper = styled.div`
// .c1{
//   position: relative;
//   top:-30.208vw;
//   left:23.438vw;
//   width: 21.146vw;
//   height: 8.672vw;
// };
// .path{
//   stroke-dasharray: 1000;
//   animation: ${dash} 3s linear alternate 1;
// };
// `;


// // const Path1 = styled.path`
// // stroke-dasharray: 1000;
// // animation: dash 5s linear alternate 1;
// // `;

// export default Timeline


//         {/* <div>
//           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 100 75" fill="none">
//             <rect x="1.5" y="1.5" width="97" height="72" rx="13.5" stroke="#FF7700" strokeWidth="3" />
//             <circle cx="68" cy="29" r="13" stroke="#FF7700" strokeWidth="2" />
//             <path d="M57.5 36L48 54L56 53L60 59L68 43L77.5 59L81 53H88.5L79 36" stroke="#FF7700" strokeWidth="2" />
//             <line x1="13" y1="23" x2="44" y2="23" stroke="#FF7700" strokeWidth="2" />
//             <line x1="13" y1="44" x2="44" y2="44" stroke="#FF7700" strokeWidth="2" />
//             <line x1="13" y1="37" x2="44" y2="37" stroke="#FF7700" strokeWidth="2" />
//             <line x1="13" y1="30" x2="44" y2="30" stroke="#FF7700" strokeWidth="2" />
//           </svg>
//         </div> */}
//         {/* <div className='d-flex'>
//           <ul>
//             <li>Advanced React</li>
//             <li>React Basic</li>
//             <li>MTA-certified</li>
//           </ul>
//         </div> */}