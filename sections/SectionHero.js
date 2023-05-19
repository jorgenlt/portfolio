export default function SectionHero() {
    return (
        <div className="section" id="hero">
            <div id="hero--content">
                <h4>Hello, my name is</h4>
                <h1 id="hero--title">Jørgen Larsen Tjønnteig</h1>
                <h1 id="hero--subtitle">Full Stack Web Developer</h1>
                <p>Full Stack Web Development, Javascript, React, Ruby, Rails, SQL, HTML, CSS, UX/UI, Bootstrap, Sass</p>
                <div id="hero--actions">
                    <div 
                        id="hero--cta" 
                        className="disable-select"
                        onClick={() => window.location.href = '#2'}
                    >
                        See my projects
                    </div>
                    <a 
                        id="hero--contact" 
                        className="disable-select"
                        href="mailto:contact@jorgenlt.me"
                        target="_blank"
                    >
                        Contact
                    </a>

                </div>
            </div>
            <div id="learn-more-container" onClick={() => window.location.href = '#1'}>
                <div id="learn-more">
                    <p>Learn more about what I do</p>
                    <span><i className="fa-solid fa-chevron-down bounce2"></i></span>
                </div>
            </div>
            <img src="/images/hero-graphics.png" id="hero--graphics" />
        </div>
    )
}