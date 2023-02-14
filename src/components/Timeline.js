import React, { useState } from 'react'

const Timeline = () => {

    const[pgp,setPgp]= useState(true)
    const[tcs,setTcs]= useState(true)
    const[griet,setGriet]= useState(true)

    return (
        <section className='tl'>
            <div className='tl-i pgp-i'>
                <div className={`tl-c pgp pgp-g ${pgp?'':'d-none'}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>Present- Mar 2022</button>
                        <div className='ls-c' onClick={()=>{
                            setPgp(false)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="23.59" y1="9.87012" x2="23.59" y2="37.1301" stroke="white" strokeWidth="3" />
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="white" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Personal Goal Pursuit</h3>
                    <div className='tl-h'>
                        <h4>Learning Data Science</h4>
                    </div>
                    <ul>
                        <li>Enrolled in the Python for Machine Learning and Data Science Masterclass on Udemy.</li>
                        <li>Technologies learned: Seaborn , Matplotlib, Pandas, Numpy, and Machine Learning methods.</li>
                        <li>Next stop: databases and SQL for data science with Python.</li>
                    </ul>
                </div>
                <div className={`tl-c pgp pgp-y ${pgp?'d-none':''}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>Present- Mar 2022</button>
                        <div className='ls-c' onClick={()=>{
                            setPgp(true)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="white" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Personal Goal Pursuit</h3>
                    <div className='tl-h'>
                        <h4>Full Stack</h4>
                    </div>
                    <ul>
                        <li>I have developed a strong knowledge of web development and coding principles, having learned and implemented Node, Express, mangoDB, and React-Redux projects on GitHub.</li>
                        <li>Meta certified Frontend Developer.</li>
                        <li>Technologies learned: Node, Express, Mongoose, React-Redux, and Figma.</li>
                    </ul>
                </div>
            </div>
            <div className='tl-i tcs-i'>
                <div className={`tl-c tcs tcs-p ${tcs?'':'d-none'}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>Feb 2022 - June 2021</button>
                        <div className='ls-c' onClick={()=>{
                            setTcs(false)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="23.59" y1="9.87012" x2="23.59" y2="37.1301" stroke="black" strokeWidth="3" />
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="black" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="black" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Tata Consultanancy Services</h3>
                    <div className='tl-h'>
                        <h4>Frontend Developer </h4>
                        <button className='btntl'>TNEODB</button>
                    </div>
                    <ul>
                        <li>Coordinated the design and development of web applications of Digigov framework using the latest technologies of Html, Bootstrap, Sass  Json, Javascript, jQuery.</li>
                        <li>Led the development of more than 60 screens, from identifying system requirements and partner dependencies to workload balancing, software implementation, testing, and configuring metrics.</li>
                        <li>Handled dynamic data using json for more than 30 screens and collaborated with backend developers to fetch user data and requests.</li>
                        <li>Continuous integration, deployment, code reviews, unit/integration testing.</li>
                    </ul>
                </div>
                <div className={`tl-c tcs tcs-g ${tcs?'d-none':''}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>June 2021 - Feb 2021</button>
                        <div className='ls-c' onClick={()=>{
                            setTcs(true)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="white" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Tata Consultanancy Services</h3>
                    <div className='tl-h'>
                        <h4>QA Testor</h4>
                        <button className='btntl'>TNEODB</button>
                    </div>
                    <ul>
                        <li>Performed portal testing effectively, on time, with the expected level of quality.</li>
                        <li>Created test cases and performance test scripts based on portal requirements and functionality specifications.</li>
                    </ul>
                </div>
            </div>
            <div className='tl-i griet-i'>
                <div className={`tl-c griet griet-p ${griet?'':'d-none'}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>Oct 2020 - Aug 2016 </button>
                        <div className='ls-c' onClick={()=>{
                            setGriet(false)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="23.59" y1="9.87012" x2="23.59" y2="37.1301" stroke="white" strokeWidth="3" />
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="white" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Gokaraju Rangaraju Institue of Engineering and Technology</h3>
                    <div className='tl-h'>
                        <h4>Computer Science and Engineering </h4>
                    </div>
                    <ul>
                        <li>CourseWork: Advanced Data Structures, Big Data Analytics, Artifical Intelligence, Design and Analysis of Algorithms.</li>
                    </ul>
                </div>
                <div className={`tl-c pgp griet griet-b ${griet?'d-none':''}`}>
                    <div className='d-flex justify-content-between'>
                        <button className='btntl'>Oct 2020 - Aug 2016 </button>
                        <div className='ls-c' onClick={()=>{
                            setGriet(true)
                        }}>
                            <svg className='ls' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                <line x1="37.13" y1="23.5898" x2="9.87" y2="23.5898" stroke="white" strokeWidth="3" />
                                <circle cx="23.5" cy="23.5" r="22" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <h3>Gokaraju Rangaraju Institue of Engineering and Technology</h3>
                    <div className='tl-h'>
                        <h4>Visual Sentiment Analysis</h4>
                    </div>
                    <p>Coordinated in the development of the algorithm that uses visual stimuli as input, preprocesses the input data, and then automatically looks for faces, identifies them, and describes the emotion detected.</p>
                    <p>Technologies: Python and its modules such as OpenCV, NumPy.</p>
                </div>
            </div>
        </section>
    )
}

export default Timeline