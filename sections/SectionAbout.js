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
                        My main languages are JavaScript and Ruby, and frameworks like React and Ruby on Rails. 
                        I take great pride in creating visually appealing and responsive websites and web applications that not only look great but also function seamlessly.
                        I'm curious person at heart and I'm always looking to learn new things and improve my coding skills. 
                    </p>
                    <p>                   
                        Last year, I completed a <a href="https://www.lewagon.com/" target="_blank" referrer="noreferrer">Le Wagon</a> coding bootcamp, which was a major accomplishment for me. 
                        I have also completed 4 certifications from <a href="https://www.freecodecamp.org/" target="_blank" referrer="noreferrer">freeCodeCamp</a>, which represent approximately 1200 hours of coursework in total.
                    </p>
                    <p>
                        Feel free to explore my portfolio on the next page and get in touch if you have any questions or opportunities for collaboration.
                    </p>
                </div>
                <div id="about--graphic" style={{alignSelf: "center"}}>
                    <img src="images/about-graphic.png" alt="figure" />
                    <figcaption style={{textAlign: "center", fontSize: "11px"}}><a href="https://www.freepik.com/free-vector/insert-block-concept-illustration_10733825.htm#query=web%20design&position=14&from_view=search&track=ais">Image by storyset</a></figcaption>
                </div>
            </div>
        </div>
    )
}