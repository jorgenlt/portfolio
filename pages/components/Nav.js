import { useEffect } from 'react';

export default function Nav() {    
    useEffect(() => {
        const pushbar = new Pushbar({
            blur:true,
            overlay:true
        }
        ); 
        
        // mobile navigation, pushbar js
        const mobileNavAbout = document.querySelector('#mobile-nav-about');
        const mobileNavPortfolio = document.querySelector('#mobile-nav-portfolio');
        const mobileNavResume = document.querySelector('#mobile-nav-resume');
        const mobileNavContact = document.querySelector('#mobile-nav-contact');

        mobileNavAbout.addEventListener('click', () => {
        window.location.href = '#1'; // anchors created by fullpage.js
        pushbar.close(); // closes the mobile nav-menu
        });

        mobileNavPortfolio.addEventListener('click', () => {
        window.location.href = '#2'
        pushbar.close();
        });

        mobileNavResume.addEventListener('click', () => {
        window.location.href = '#3'
        pushbar.close();
        });

        mobileNavContact.addEventListener('click', () => {
        window.location.href = '#4'
        pushbar.close();
        });
    },[])

    return (
        <div>
            {/* desktop navbar */}
            <div className="container" id="nav-home">
            <ul className="nav-links">
                <li id="nav-about" onClick={() => window.location.href = '#1'}><span className="link-num">01.</span> about</li>
                <li id="nav-portfolio" onClick={() => window.location.href = '#2'}><span className="link-num">02.</span> portfolio</li>
                <li id="nav-resume" onClick={() => window.location.href = '#3'}><span className="link-num">03.</span> resume</li>
                <li id="nav-contact" onClick={() => window.location.href = '#4'}><span className="link-num">04.</span> contact</li>
            </ul>
            </div>

            {/* mobile navbar */}
            <div className="" id="mobile-nav-home">
            {/* open menu */}
            <div id="burger" data-pushbar-target="mypushbar1">
                <span><i className="fa-solid fa-bars"></i></span>
            </div>

            {/* pushbar slide menu */}
            <div id="mobile-menu" data-pushbar-id="mypushbar1" data-pushbar-direction="right">
                {/* close menu */}
                <div id="burger-close" data-pushbar-close>
                <span><i className="fa-solid fa-xmark"></i></span>
                </div>
                {/* menu content */}
                <ul className="mobile-nav-links">
                <li id="mobile-nav-about" ><span className="mobile-link-num">01.</span> about</li>
                <li id="mobile-nav-portfolio"><span className="mobile-link-num">02.</span> portfolio</li>
                <li id="mobile-nav-resume"><span className="mobile-link-num">03.</span> resume</li>
                <li id="mobile-nav-contact"><span className="mobile-link-num">04.</span> contact</li>
                </ul>
            </div>
            </div>
        </div>
    )
}