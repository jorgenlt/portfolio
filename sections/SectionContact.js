export default function SectionContact() {
    return (
        <div className="section" id="contact">
            <div id="contact-wrapper">
                <h1>Contact</h1>
                <div id="contact--links">
                    <p>Send me an <a href="mailto:contact@jorgenlt.me" className="emailat" target="_blank">email.</a></p>
                </div>
                <div className="contact--some d-none">
                    <a href="mailto:contact@jorgenlt.me" className="emailat" target="_blank">
                        <i className="fa-solid fa-at"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jorgenlt/" target="_blank" className="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/jorgenlt" target="_blank" className="github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://codepen.io/dogonscooter" target="_blank" className="codepen">
                        <i className="fa-brands fa-codepen"></i>
                    </a>
                    <a href="https://www.freecodecamp.org/jorgenlt" target="_blank" className="freecodecamp">
                        <i className="fa-brands fa-free-code-camp"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}