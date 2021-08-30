import React from 'react';
import ReactDOM from 'react-dom';
import me from './images/me.jpeg';
import firstWebsite from '../components/images/First-website-project.png';



class Main extends React.Component {
    render() {
        return (
            <>
                <div className="bg">
            <div className="homepage">
  <div className="group">
    <div className="item">
      <img src={me} alt="Devan Chaney" class="image-enhanced" />
    <div className="item">
      <h2 style={{display: 'flex', justifyContent: 'center'}}>Hey! I'm Devan Chaney!!</h2>
      <hr />
      <p>I decided I wanted to build this site as a way for me to not only practice my skills with HTML, CSS, Javascript and React; but also as a way for me to introduce myself to the world! Everyone has a website these days, right?? So on this website, I will be showcasing various projects I'm working on, as well as completed projects.</p>
      <p>As a side note, I currently reside in the good ole' state of Kentucky. I work as a production worker and have loved technology/computing my entire life! This is just a small introduction, head on down to my 'About Me' section to learn more about myself! Have a great day =)!</p>
        </div>
        </div>
</div>
</div>


  <div className="aboutMe">
  <div className="group">
    <div className="item">
  <h2 style={{display: 'flex', justifyContent: 'center'}}>About Me</h2>
  <hr />
  <p>Coding has always been an interesting thing to me. My love of computers started when I was around 3-4 years old. Back then, in the mid-nineties, computers were on the rise, my father was interested in computers within the early years of the nineties. Here and there I had been able to gain a glimpse into what computers could do for people and the world in general. This made me beg my parents to get me a computer when I was super young, and to my surprise, they did! I wasn't allowed to be on the internet too much since I was so young, so I mostly stuck to playing computer games like Sonic the Hedgehog and other games such as that. But from then on, computers became this wonderous thing in my life!</p>

  <p>In recent years, (1-2), I have become interested in coding and the deeper infrastructures on computers. I wanted to know what made them tick, and how I could learn what those things were and use them to further my understanding of computers. I love discovering new things and picking apart puzzles to figure out how things work and how to better them! I know I'm still in the beginning stages of my progression, but I can't wait to see how technology advances and how I can further learn and help in the development of the future. Things such as front-end development, as well as the trickiness of back-end development are some of the things that I want to help with going forward. Working by myself or with a team of talented individuals to come up with various Javascript scripts to help output things on a front-end to better the customer experience. This is the future for me!</p>

  <p>When I'm not coding and I have free time away from my job, I enjoy playing video games, such as Rocket League, Hearthstone, Valorant, etc. I also enjoy journaling and writing poetry from time to time to take my mind away from the world! I try my best to live as relaxed and at ease as possible, adopting some of the Buddhist teachings to try and consistently keep a level and a clear head in my daily life. Meditation I have found does wonder for the brain and can help keep your soul connected to yourself and to the Earth that we're living on.</p>
  </div>
</div>
</div>


  <div className="portfolio">
  <div className="group">
    <div className="item">
      <h2>Portfolio</h2>
      <hr />
      <img src={firstWebsite} alt="First website project I created" className="image-enhanced-2" />
      
      <a href="https://dchane06.github.io/Project-Website-Portfolio/" target="_blank">First Website Project!</a>
      <a href="https://github.com/Dchane06/Website-Portfolio-Project" target="_blank">GitHub Repo</a>

      
      <p>This was my first website project attempt that I did as an assignment for the coding Bootcamp Thinkful. This project taught me a ton about the beginner stages of learning HTML and CSS. How to correctly do things like setting a background, setting margins, etc. Click on the 'First Website Project' text to visit it. You can compare that project to this website and see the progression I've made!</p>

      <h4>More Projects Coming Soon!</h4>
</div>
</div>
</div>


  <div className="contact" style={{display: 'flex', justifyContent: 'center'}}></div>
  <div className="group">
    <div className="item">
      <h2 style={{display: 'flex', justifyContent: 'center'}}>Contact</h2>
      <hr />
    <form style={{display: 'flex', justifyContent: 'center'}} action="https://formspree.io/f/xpzogvgj" method="POST">
      <label for='user-message' style={{fontSize: '20px', marginTop: '5px', marginRight: '10px'}}>Message Me:</label>
      <textarea id='user-message' name='message'></textarea>
      <button type='submit' style={{display: 'flex', justifyContent: 'center'}}>Submit</button>
    </form>
        <div className='item item-double'>
          <p style={{display: 'flex', justifyContent: 'center'}}>Telephone #: Contact Directly For Info.</p>
          <p style={{display: 'flex', justifyContent: 'center'}}>Email: <a href="mailto:dchane06@hotmail.com">dchane06@hotmail.com</a></p>
          <a href="https://github.com/Dchane06" target="_blank" style={{display: 'flex', justifyContent: 'center'}}> GitHub </a>
          <a href="https://www.linkedin.com/in/james-chaney-coding" target="_blank" style={{display: 'flex', justifyContent: 'center'}}> LinkedIn </a>
        </div>
  </div>
  </div>

                <p style={{display: 'flex', justifyContent: 'left', marginBottom: '0px', fontSize: '10px'}}>Last Updated: August 30th, 2021 | Status: Work In Progress</p>
  </div>
  </>

        )
    }
}


export default Main;