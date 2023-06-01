import React from 'react'
import imageCoding from '../../Assets/images/imageCoding.png';
import './about.css';

const About = () => {
  return (
    <section className='vitelo__about section__padding'>
      <div className='vitelo__about-container'>
        <div className='vitelo__about-container_title'>
          <h1>/ about me</h1>
        </div>
        <div className='vitelo__about-container_content'>
          <div className='vitelo__about-container_content-text'>
            <p>
              I'm a web developer and a teacher, passionate about learning new skills and creating software to create tools and make the life easier. I am a curious person and a fast self learner, hard work doesn't scare me. My goal is to create things that make a difference.
            </p>
            <p>
              After 6 wonderful years teaching at an elementary school now I'm a Jr Software Engineer looking for a career. Lately I've been creating projects using React and I really love how flexible and powerful is. I'm always looking for new possibilities to improve and I must acknowledge that it's likely I'm addicted to learning new things.
            </p>
            <p>
              I'm also a music enthusiast, I play electric bass love listening to indie-rock music. Sometimes I watch movies, series, and play videogames! Going out and know new places with my gf is one of my favorite activities too.
            </p>
            <p>
              So, long story short, I'm a very enthusiastic person who seeks to achieve one more goal in my life.
            </p>
          </div>
          <div className='vitelo__about-container_content-img'>
            <img src={imageCoding} alt='ImageCoding' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About