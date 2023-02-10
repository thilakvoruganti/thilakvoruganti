import React from 'react'

const About = () => {

  const height = window.innerHeight
  const width = window.innerWidth
  return (
    <section className='abt'>
      <div className='abt-a'>
        <div className='tl-t'>
          <h1>Thilak Voruganti</h1>
          <button>Frontend Developer</button>
        </div>
        <div className='tl-img'>
          <img src={require('../images/tvb.png')} />
        </div>
      </div>
      <div className='abt-b'>
        <h2>Get to know me!</h2>
        <p>Frontend developer with experience in creating responsive and optimised websites. I like to explore new technologies, design and develop websites, and solve problems. I am passionate about my work, and I thrive on the challenge of creating something both aesthetically pleasing and functionally sound.</p>
        <p>I take an agile approach to my work, constantly striving to improve and iterate on what I have created. I always try to be on the cutting edge of technology, staying up to date with the latest trends and advancements.</p>
      </div>
      <div className='abt-c'>
        <h2>My Skills</h2>
        <div>
          <button>React</button>
          <button>React-Redux</button>
          <button>Express</button>
          <button>Node</button>
          <button>Javascript</button>
          <button>JQuery</button>
          <button>JSON</button>
          <button>Typescript</button>
          <button>Html</button>
          <button>CSS</button>
          <button>Sass</button>
          <button>Bootstrap</button>
          <button>Java</button>
          <button>Python</button>
          <button>Sql</button>
          <button>MongoDB</button>
          <button>Matplotlib</button>
          <button>Seaborn</button>
          <button>Pandas</button>
        </div>
      </div>
    </section>
  )
}

export default About