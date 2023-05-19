import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react'
import { homifyCode1, homifyCode2, homifyCode3 } from '@/components/code-snippets/homifyCode'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Homify() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFullscreen('lg-down');
        setShow(true);
    }

    return (
        <>
            <PortfolioCard
                title="Homify"
                description="A tinder-like home finder app. Find your dream home by swiping. An app to make apartment hunting fun and efficient."
                backgroundImage='/images/homify-pixel-2-1-rot-rm-bg.png'
                handleShow={handleShow}
            />
            <Modal 
                show={show} 
                onHide={handleClose}
                size='xl'
                fullscreen={fullscreen}
                scrollable={true}
            >
                <Modal.Header>
                    <Modal.Title>homify</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>Our final project at the Le Wagon Web Development Coding Bootcamp I attended in the fall of 2022. Homify is an app for finding apartments for rent by swiping and matching. The web application was made in two weeks and resulted in a MVP that was presented to an audience at the bootcamp's demo day. See embeded video from YouTube.</p>
                                <p><a href="https://github.com/jorgenlt/homify" target="_blank">View on GitHub</a></p>
                                <p>Project team:</p>
                                <ul>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i><a href="https://github.com/AlexDrew90" target="_blank" rel="noreferrer">Alex Drew</a></li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i><a href="https://github.com/juliasnd" target="_blank" rel="noreferrer">Julia Sandmann</a></li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i><a href="https://github.com/alexandernk1555" target="_blank" rel="noreferrer">Alexander Neukomm</a> (speaker)</li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i><a href="https://github.com/jorgenlt" target="_blank" rel="noreferrer">Jørgen Larsen Tjønnteig</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <iframe className="homify--demo-day" src="https://www.youtube.com/embed/T3OJIEels1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="homify--phone">
                                <iframe src="https://player.vimeo.com/video/808073105?h=86bec683c0&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                        width="250"
                                        height="556"
                                        frameborder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowfullscreen
                                        title="homify demo">
                                </iframe>

                                <div className="homify--photos ">
                                    <img src="/images/homify-pixel-2-1-rot-rm-bg.png" alt="homify on phone." />
                                </div>
                            </div>
                            <figure>
                                <img src="https://cdn-images-1.medium.com/v2/resize:fit:1094/1*bJi3Qkl1lpwOerOA5YRYHQ.png" className='projects-modal--full-img' />
                                <figcaption>Wireframe and design in Figma.</figcaption>
                            </figure>
                        </div>

                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Sign up and create a profile with a profile picture.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Create a new search.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Filter search results by editing your search.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Swipe on apartments to find a match.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Instantly book an appointments for viewings on your matches.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Live instant chat feature with matches.</li>
                            </ul>
                            
                            <h2>Technologies</h2>
                            <p>
                                Homify is a web application optimized for mobile and built with <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a> on both backend and frontend. Data is stored in a PostgreSQL database and Cloudinary is used for cloud storage of the profile and apartment image files. Authentication and authorization is being handled with the <a href="https://github.com/heartcombo/devise" target="_blank">Devise gem</a>. The apps search feature is made with the <a href="https://github.com/Casecommons/pg_search" target="_blank">PgSearch </a>gem.
                            </p>
                            <p>
                                The application is additionally supported by Webpack, simple_form, maps from Mapbox, stimulus and bootstrap.
                            </p>

                            <h2>Technical challenges</h2>
                            <h3>Swiping on apartment cards</h3>
                            <p>
                                The Tinder-like swipe feature to register a "like" or a "nope" turned out to be quite a challenge. The final code is built upon the Javascript library <a href="https://hammerjs.github.io/" target="_blank">Hammer.js</a>, which enables touch gestures to web applications. With a lot of hits and misses the final result both looked good and was running smoothly in the web browser.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {homifyCode1}
                            </SyntaxHighlighter>

                            <h3 className="mt-5">Show listings (cards to swipe) based on search parameters</h3>
                            <p className="mt-4 mb-2">
                                The listings controller handles the search based on given params, along with rest of the CRUD-actions.
                            </p>
                            <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
                                {homifyCode2}
                            </SyntaxHighlighter>
                            <p className="mt-4 mb-2">
                                All the cards are stacked on top of each other and displayed to the user. The user can then swipe through the stack, choosing a "nope" or a "like".
                                When clicking a card(a listing), a modal shows more information about the listing (photos, address, price, properties, map and more).
                                If there are no more cards left the user will be informed that there are no more listings that matches the chosen criterias.
                            </p>
                            <SyntaxHighlighter language="django" style={tomorrowNightBright}>
                                {homifyCode3}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Modal.Body> 
            </Modal>
        </>
    )
}