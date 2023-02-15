import React from 'react'

const About = () => {

  return (
    <section className='abt'>
      <div className='abt-a'>
        <div className='tl-t'>
          <h1>Thilak Voruganti</h1>
          <button>Frontend Developer</button>
        </div>
        <div className='tl-img'>
          <img src={require('../images/tvb.png')} alt={'Thilak'} />
        </div>
      </div>
      <div className='abt-b'>
        <h2>Get to know me!</h2>
        <p>Frontend developer with experience in creating responsive and optimised websites. I like to explore new technologies, design and develop websites, and solve problems. I am passionate about my work, and I thrive on the challenge of creating something both aesthetically pleasing and functionally sound.</p>
        <p>I take an agile approach to my work, constantly striving to improve and iterate on what I have created. I always try to be on the cutting edge of technology, staying up to date with the latest trends and advancements.</p>
      </div>
      <div className='abt-c'>
        <h2>My Skills</h2>
        <div className='sk-c'>
          <div className='btns'>React</div>
          <div className='btns'>React-Redux</div>
          <div className='btns'>Express</div>
          <div className='btns'>Node</div>
          <div className='btns'>Javascript</div>
          <div className='btns'>JQuery</div>
          <div className='btns'>JSON</div>
          <div className='btns'>Typescript</div>
          <div className='btns'>Html</div>
          <div className='btns'>CSS</div>
          <div className='btns'>Sass</div>
          <div className='btns'>Bootstrap</div>
          <div className='btns'>Java</div>
          <div className='btns'>Python</div>
          <div className='btns'>Sql</div>
          <div className='btns'>MongoDB</div>
          <div className='btns'>Matplotlib</div>
          <div className='btns'>Seaborn</div>
          <div className='btns'>Pandas</div>
        </div>
      </div>
    </section>
  )
}

export default About