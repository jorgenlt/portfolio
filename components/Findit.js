import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { finditCode1, finditCode2, finditCode3, finditCode4 } from './code-snippets/finditCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Findit() {
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setFullscreen('lg-down');
        setShow(true);
    }

    return (
        <>
            <div className="portfolio-cards--card">
                <div className='portfolio-cards--card-overlay'></div>
                <div className="portfolio-cards--card-content">
                    <h2 className="portfolio-cards--card-title">Findit</h2>
                    <p>Buying and selling used things online.</p>
                    <div type="button" className="btn btn-primary" onClick={handleShow}>Explore</div>
                </div>
            </div>

            
            <Modal 
                show={show} 
                onHide={handleClose}
                // dialogClassName="projects-modal"
                size='xl'
                fullscreen={fullscreen}
                scrollable={true}
            >
                <Modal.Header>
                    <Modal.Title>Findit</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>An online classified web application. Made with inspiration from <a href="https://www.finn.no" target="_blank">Finn.no</a>.</p>
                                <p>Visit site: <a href="https://findit.herokuapp.com" target="_blank">findit</a></p>
                                <p><a href="https://github.com/jorgenlt/findit" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div className="media--desktop">
                                <img src="/images/findit_desktop1.png" alt="findit on desktop." />
                            </div>
                        </div>
                        
                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Sign up and sign in.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Search for ads.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Browse ads by categories and subcategories.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>View ads with pictures and information.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Contact seller.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Add a new ad.</li>
                            </ul>
                            
                            <h2>Technologies</h2>
                            <p>
                                Findit is built with <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a> on both backend and frontend. Data is stored in a PostgreSQL database and all pictures are uploaded to <a href="https://cloudinary.com/" target="_blank" rel="noopener noreferrer">Cloudinary</a> and handled using <a href="https://cloudinary.com/documentation/rails_activestorage" target="_blank" rel="noopener noreferrer">Active Storage integration</a>.
                                The <a href="https://github.com/Casecommons/pg_search" target="_blank" rel="noopener noreferrer">PgSearch</a> gem are used for searching for posts.
                                The application is additionally supported by Webpack, simple_form, stimulus and bootstrap.
                            </p>
                            
                            <h2>Technical challenges</h2>
                            <h3>The search feature</h3>
                            <p>
                                The search feature on the dashboard page is made simple using the <a href="https://github.com/Casecommons/pg_search" target="_blank" rel="noopener noreferrer">PgSearch</a> gem. The Post model includes the pg_search and specifies what to search against (title, body, category and subcategory).
                            </p>
                            <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
                                {finditCode1}
                            </SyntaxHighlighter>
                            <p className="mt-4 mb-2">
                                The Pages controller action 'dashboard' handles the search if a query is present.
                            </p>
                            <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
                                {finditCode2}
                            </SyntaxHighlighter>
                            <p className="mt-4 mb-2">
                                If '@search_results' in the Pages controller is not nil the search results are displayed in the dashboard view.
                            </p>
                            <SyntaxHighlighter language="django" style={tomorrowNightBright}>
                                {finditCode3}
                            </SyntaxHighlighter>                            
                            <h3 className="mt-5">Populating categories and subcategories</h3>
                            <p>
                                When making a new post available subcategories to choose from should change with the category chosen. This was solved using javascript. The categories are populated when the site is loaded and the subcategories are populated when choosing a category. A stimulus controller handles the javascript code.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {finditCode4}
                            </SyntaxHighlighter>

                            <h2>Upcoming features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Edit and delete your own posts.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Creating a user profile with a profile picture.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Interactive map function on the post page.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Live chat between users.</li>
                            </ul>
                            
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}