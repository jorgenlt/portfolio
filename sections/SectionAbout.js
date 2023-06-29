export default function SectionAbout() {
  return (
    <div className="section">
      <div id="about">
        <div id="about--content">
          <h1>About</h1>
          <p>
            I started my professional career as an engineer in the construction industry. 
            Working on various projects gave me valuable experience in problem-solving, attention to detail, and the ability to manage complex tasks. 
            However, my passion for technology and coding eventually led me to transition into a new career as a full stack web developer.
          </p>
          
          <p>
            I am proficient in both JavaScript and Ruby, and I am experienced in using libraries such as React and frameworks such as Ruby on Rails and Next.js.
            I take great pride in creating visually appealing and responsive websites and web applications that not only look great but also function seamlessly.
            I'm curious person at heart and I'm always looking to learn new things and improve my coding skills. 
          </p>
          <p>                   
            Last year, I completed a <a href="https://www.lewagon.com/" target="_blank" rel="noreferrer">Le Wagon</a> coding bootcamp, which was a major accomplishment for me. 
            I have also completed 4 certifications from <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp</a>, which represent approximately 1200 hours of coursework in total.
          </p>
          <p>
            Feel free to explore my portfolio on the next page and get in touch if you have any questions or opportunities for collaboration.
          </p>
        </div>
        <div id="about--graphics" style={{alignSelf: "center"}}>
          <img src="images/about-graphics.png" alt="figure" />
        </div>
      </div>
    </div>
    )
  }