export default function SectionHero() {
    return (
        <div className="section" id="hero">
            <div id="hero-content">
                <div><h4>Hello, my name is</h4></div>
                <div><h1 id="full-name">Jørgen Larsen Tjønnteig</h1></div>
                <div><h1 id="full-name-subtitle">Full Stack Developer</h1></div>
                <div>
                    <p>Full Stack Web Development, Javascript, SQL, Ruby, Ruby on Rails, HTML, CSS, UX/UI, Product Design, Bootstrap.</p>
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