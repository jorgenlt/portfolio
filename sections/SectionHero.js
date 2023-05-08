export default function SectionHero() {
    return (
        <div className="section" id="hero">
            <div id="hero--content">
                <h4>Hello, my name is</h4>
                <h1 id="hero--title">Jørgen Larsen Tjønnteig</h1>
                <h1 id="hero--subtitle">Full Stack Developer</h1>
                <p>Full Stack Web Development, Javascript, React, Ruby, Rails, SQL, HTML, CSS, UX/UI, Bootstrap, Sass</p>
                <div 
                    id="hero--cta" 
                    className="disable-select"
                    onClick={() => window.location.href = '#2'}
                >
                    See my projects
                </div>
            </div>
            <div id="learn-more-container" onClick={() => window.location.href = '#1'}>
                <div id="learn-more">
                        <p>Learn more about what I do</p>
                        <span><i className="fa-solid fa-chevron-down bounce2"></i></span>
                </div>
            </div>
        </div>
    )
}