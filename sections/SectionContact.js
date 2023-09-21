export default function SectionContact() {
    return (
        <div className="section" id="contact">
            <div id="contact-wrapper">
                <h1>Contact</h1>
                <div id="contact--links">
                    <p>Send me an <a href="mailto:contact@jorgenlt.no" className="emailat" target="_blank">email.</a></p>
                </div>
            </div>
            <img src="/images/contact-graphics.png" id="contact--graphics" />
            <div id="credits">
                <p>Site credits:</p>
                <ul>
                    <li>Full page feature: <a target="_blank" rel="noreferrer" href="https://github.com/alvarotrigo/fullPage.js/">Fullpage.js</a></li>
                    <li>Illustration, hero: <a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/insert-block-concept-illustration_10733825.htm#query=web%20design&position=14&from_view=search&track=ais">Storyset on Freepik</a></li>
                    <li>Illustration, about: <a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=coding&position=7&from_view=search&track=sph#position=7&query=coding">Storyset on Freepik</a></li>
                    <li>Illustration, resume: <a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/boss-man-concept-illustration_40467501.htm#page=14&position=7&from_view=author">Storyset on Freepik</a></li>
                    <li>Illustration, contact: <a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/email-campaign-concept-illustration_7472011.htm#page=13&position=49&from_view=author">Storyset on Freepik</a></li>
                </ul>
            </div>
        </div>
    )
}