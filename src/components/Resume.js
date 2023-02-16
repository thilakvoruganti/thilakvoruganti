import React from 'react'


const Resume = () => {

    const download = () => {
        fetch('ThilakVoruganti.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ThilakVoruganti.pdf';
                alink.click();
            })
        })
    }
    return (
        <section className='rsme'>
            <div className='rsme-c'>
                <div className='rsme-d'>
                    <div className='dwld-c'>
                        <svg className='d-logo' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M1.12409 20.8758V15.0948L0.963504 14.7736L0.80292 14.613H0.481752L0.160584 14.7736L0 15.0948V21.5181L0.160584 21.8393L0.481752 21.9999H20.5547L20.8759 21.6787L21.0365 21.3576V15.0948L20.8759 14.7736L20.3942 14.613L20.073 14.7736L19.9124 15.0948V20.8758H1.12409Z" fill="black" />
                            <path d="M9.95625 14.292V0.481752V0.321168L10.1168 0.160584L10.2774 0H10.7592L10.9198 0.160584L11.0803 0.481752V14.292L14.9344 10.2774H15.4161H15.7373L15.8979 10.438L16.0584 10.9197L15.8979 11.2409L10.5986 16.5401L5.13873 11.2409L4.97815 10.7591L5.13873 10.438L5.4599 10.2774L5.94165 10.438L9.95625 14.292Z" fill="black" />
                        </svg>
                        <div onClick={download}>Download</div>
                    </div>
                </div>
                <div className='rsme-h'>
                    <h1>Thilak Voruganti</h1>
                    <div className='cd-c'>
                        <a href="https://thilakvoruganti.github.io/thilakvoruganti/" target="_blank" rel="noopener noreferrer" className='cd-i'>
                            <svg className='hm' xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                <path d="M14.2467 1L2 12H4.42V22.0467L4.56667 22.34L4.71333 22.56L5.00667 22.78L5.4048 23H11.7925V14.4517H16.6995V23H23.12L23.56 22.78L23.78 22.56L23.9267 22.34L24 22.0467V12H26.4933L14.2467 1Z" stroke="black" />
                            </svg>
                            <div>thilakvoruganti.github.io/thilakvoruganti</div>
                        </a>
                        <a href='tel:+918328678478' className='cd-i'>
                            <svg className='ph' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.84588 1L5.45991 1.05514L5.07395 1.16541L4.68799 1.49624L2.26192 3.81203L1.98623 4.30827L1.71054 4.91479L1.48999 5.90727L1.60027 7.50627L2.15164 9.38095L2.86844 10.9248L4.19174 13.2957L6.67295 16.4937L9.54012 19.1404L11.911 20.7945L14.282 22.0627L15.5501 22.5038L16.6529 22.7794L17.3697 22.9449L18.2519 23L18.9687 22.9449L19.5752 22.7794L20.2369 22.5038L20.8434 22.0627L22.8835 20.0226L23.2143 19.4712L23.4349 18.8095L23.49 18.2581L23.3246 17.5965L22.9937 17.0451L19.6855 13.8471L19.1341 13.5163L18.6379 13.406H18.1968L17.7005 13.5163L17.094 13.8471L16.3221 14.5088L15.109 15.7769L13.2895 14.619L11.9662 13.5714L10.698 12.193L9.65039 10.9248L8.87846 9.49123V9.38095L10.8083 7.50627L11.0288 6.95489L11.1391 6.45865V5.90727L11.0288 5.35589L10.8083 4.91479L7.3346 1.49624L6.83836 1.16541L6.50753 1.05514L6.17671 1H5.84588Z" stroke="black" />
                            </svg>
                            <div>+91-8328678478</div>
                        </a>
                        <a href="mailto:thilak.voruganti@gmail.com" className='cd-i'>
                            <svg className='mail' xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                                <path d="M7.02381 20.0317V10.7778L13.4841 16.3651L19.9444 10.7778V20.119L20.0317 20.9048L20.2937 21.4286L20.5556 21.8651L20.9921 22.3016L21.5159 22.6508L22.127 22.9127L23 23L23.6984 22.9127L24.3968 22.6508L24.9206 22.3016L25.3571 21.8651L25.619 21.4286L25.881 20.9048L26.0556 20.119V4.31746V3.96825L25.9683 3.35714L25.7937 2.92063L25.5317 2.39683L25.1825 1.96032L24.8333 1.61111L24.3968 1.34921L23.7857 1.0873L23.1746 1H22.6508L21.9524 1.1746L21.254 1.52381L13.4841 8.24603L5.97619 1.69841L5.53968 1.43651L5.01587 1.1746L4.31746 1H3.53175L3.00794 1.1746L2.39683 1.43651L1.87302 1.87302L1.43651 2.39683L1.1746 2.92063L1 3.61905V4.49206V20.0317L1.0873 20.8175L1.43651 21.5159L1.87302 22.127L2.39683 22.4762L3.00794 22.8254L3.61905 22.9127H4.23016L4.84127 22.8254L5.62698 22.4762L6.06349 22.127L6.5873 21.5159L6.84921 20.8175L7.02381 20.0317Z" stroke="black" />
                            </svg>
                            <div>thilak.voruganti@gmail.com</div>
                        </a>
                        <a href='https://github.com/thilakvoruganti' target="_blank" rel="noopener noreferrer" className='cd-i'>
                            <svg className='git' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.6241 1.97279L16.7143 2.4966L14.3158 2.04762H11.7519L10.1805 2.19728L8.77444 2.57143L7.36842 1.7483L6.29323 1.22449L5.30075 1H4.39098L4.14286 1.59864L3.89474 2.57143V3.84354L4.22556 4.89116L3.56391 5.63946L2.98496 6.53742L2.57143 8.03401V9.90476L2.90226 11.4762L3.4812 12.898L4.39098 13.9456L5.8797 14.9932L7.1203 15.4422L8.11278 15.6667L8.85714 15.8163L9.84962 15.966L9.27068 16.5646L9.02256 17.1633L8.85714 17.9116L8.11278 18.1361L7.69925 18.2857H6.45865L5.8797 18.1361L4.55639 17.1633L4.06015 16.415L3.23308 15.7415L2.65414 15.3673L2.07519 15.2177H1.33083L1 15.3673V15.517L1.16541 15.7415L2.07519 16.415L2.81955 17.1633L3.31579 18.1361L3.89474 18.9592L4.7218 19.6327L5.63158 20.0068L6.45865 20.0816H8.11278L8.77444 19.932V23H16.7143V18.2109L16.6316 17.3878L16.1353 16.415L15.6391 15.966L17.2105 15.7415L18.782 15.3673L20.0226 14.7687L21.0977 13.9456L21.9248 13.0476L22.4211 12.0748L22.7519 11.102L22.9173 9.90476L23 8.85714L22.9173 7.88435L22.7519 7.06122L22.3383 6.16327L21.8421 5.41497L21.3459 4.89116L21.5113 4.14286L21.594 3.61905V3.02041L21.5113 2.27211L21.3459 1.52381L21.0977 1H20.3534L19.609 1.14966L18.6165 1.52381L17.6241 1.97279Z" stroke="black" />
                            </svg>
                            <div>github.com/thilakvoruganti</div>
                        </a>
                    </div>
                </div>
                <div className='rsme-b'>
                    <div className='sk-c bd-c'>
                        <h2>Skills</h2>
                        <ul>
                            <li>HTML | Css | Sass | Bootstrap | Javascript | jQuery | TypeScript | React | Redux | Node | Express.</li>
                            <li>Frontend | Backend | FullStack | Unit Testing | Manual Testing | svn | Git | Sql | C | C++ | Java | Python.</li>
                        </ul>
                    </div>
                    <div className='exp-c bd-c'>
                        <h2>Experience</h2>
                        <h3>Tata Consultancy Services, Gujarat, India</h3>
                        <div className='d-flex justify-content-between'>
                            <h3>Frontend Developer</h3>
                            <h4>Feb 2022-  June 2021</h4>
                        </div>
                        <ul>
                            <li>Coordinated the design and development of web applications of Digigov framework using the latest technologies of Html, Sass, Bootstrap, Json, Javascript, jQuery.</li>
                            <li>Led the development of more than 60 screens, from identifying system requirements and partner dependencies to workload balancing, software implementation, testing, and configuring metrics.</li>
                            <li>Handled dynamic data using json for more than 30 screens and collaborated with backend developers to fetch user data and requests.</li>
                            <li>Continuous integration, deployment, code reviews, unit/integration testing.</li>
                        </ul>
                        <div className='d-flex justify-content-between'>
                            <h3>Quality Assurance Tester</h3>
                            <h4>May 2021- Feb 2021</h4>
                        </div>
                        <ul>
                            <li>Performed portal testing effectively, on time, with the expected level of quality.</li>
                            <li>Created test cases and performance test scripts based on portal requirements and functionality specifications.</li>
                        </ul>
                    </div>
                    <div className='edu-c bd-c'>
                        <h2>Education</h2>
                        <h3>Gokaraju Rangaraju Institute of Engineering and Technology</h3>
                        <div className='d-flex justify-content-between'>
                            <h3>Bachelors in Computer Science and Engineering</h3>
                            <h4>Oct 2020 - Aug 2016</h4>
                        </div>
                        <ul>
                            <li>Cummilative GPA : 8.27 / 10</li>
                            <li>CourseWork: Advanced Data Structures, Big Data Analytics, Artifical Intelligence, Design and Analysis of Algorithms.</li>
                        </ul>
                    </div>
                    <div className='acdp-c bd-c'>
                        <h2>Academic project</h2>
                        <div className='d-flex justify-content-between'>
                            <h3>Vision Sentiment Analysis - Python OpenCV</h3>
                            <h4>June 2020 - Jan 2020</h4>
                        </div>
                        <ul>
                            <li>Coordinated in the development of the algorithm that uses visual stimuli as input, preprocesses the input data, and then automatically looks for faces, identifies them, and describes the emotion detected.</li>
                            <li>As the project's specialist, I entirely focused on the technical aspects and coded the algorithm.</li>
                        </ul>
                    </div>
                    <div className='cb-c bd-c'>
                        <h2>Certifications and Badges</h2>
                        <ul>
                            <li>Advanced React by Coursera, 2022.</li>
                            <li>Programming with JavaScript by Coursera, 2022.</li>
                            <li>React (Basic) by HackerRank, 2022.</li>
                            <li>Microsoft Technology Associate: Networking Fundamentals - Certified 2017</li>
                        </ul>
                    </div>
                </div>
                <svg className='pdf-l' xmlns="http://www.w3.org/2000/svg" width="66" height="30" viewBox="0 0 66 30" fill="none">
                    <rect x="7.5" width="15" height="30" fill="#839292" />
                    <rect width="30" height="7.49999" fill="#839292" />
                    <path d="M65.2499 0H32.9999L49.1249 30L65.2499 0Z" fill="#839292" />
                </svg>
            </div>
        </section>
    )
}

export default Resume