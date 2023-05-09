import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tidderCode1, tidderCode2 } from '@/components/code-snippets/tidderCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Tidder() {
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
                title="Tidder"
                description="A reddit clone."
                backgroundImage='/images/tidder_desktop_1.png'
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
                    <Modal.Title>Tidder</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>A responsive reddit clone web application.</p>
                                <p>Visit site: <a href="https://tidderapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">tidder.eu</a></p>
                                <p><a href="https://github.com/jorgenlt/tidder" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                            </div>
                        </div>
                        
                        <div className="projects-modal--media">
                            <div className="tidder-phone">
                                <div className="tidder-video">
                                    <iframe src="https://player.vimeo.com/video/798677053?h=ea04464374&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                    width="290"
                                    height="644"
                                    frameborder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowfullscreen title="tidder_demo">
                                </iframe>
                            </div>
                            <div className="tidder-photos">
                                <img src="/images/tidder_phone_1.png" alt="Tidder on phone." />
                            </div>
                        </div>
                        
                        <div className="media--desktop">
                            <img src="/images/tidder_desktop_1.png" alt="Tidder on desktop." />
                        </div>
                    </div>
                    
                    <div>
                        <h2>Features</h2>
                        <ul>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>A user can sign up and sign in. Email and password can be edited by the user at a later time.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>A user can create a new post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>A user can upvote or downvote a post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>A user can create a new comment on a post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>A user can upvote or downvote a comment on a post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Secure authentication.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Mobile responsiveness to ensure optimal user experience.</li>
                        </ul>
                        
                        <h2>Technologies</h2>
                        <p>
                            Tidder is built with <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">Ruby on Rails</a> on both backend and frontend.
                            Data is stored in a PostgreSQL database and Cloudinary is used for cloud storage of the profile image files. Authentication is being
                            handled with the <a href="https://github.com/heartcombo/devise" target="_blank" rel="noopener noreferrer">Devise gem</a>. This ensures the user to
                            securely sign in and sign up to the application.
                            
                            The application is additionally supported by Webpack, simple_form, act_as_votable, stimulus and bootstrap.
                        </p>
                        
                        <h2>Technical challenges</h2>
                        <h3>Upvote and downvote</h3>
                        <p>
                            The inclusion of the renowned upvote and downvote system, which was first introduced by <a href="https://everything2.com/title/An+Introduction+to+Everything2" target="_blank" rel="noopener noreferrer">Everything2</a>
                            and later adopted by Reddit and other platforms, has become an essential feature in the development of a Reddit-like platform, as it has gained widespread popularity across various
                            websites and applications. The first approach to achieve this feature was done by making everything from scratch with the appropriate database tables and making the logic in the
                            controllers. After some research it was decided to go with the Ruby on Rails gem <a href="https://github.com/ryanto/acts_as_votable" target="_blank" rel="noopener noreferrer">acts_as_votable</a> which was developed by
                            <a href="https://github.com/ryanto" target="_blank" rel="noopener noreferrer">Ryan Toronto</a>.
                        </p>
                        <p>
                            At first glance, the acts_as_votable gem provides a straightforward solution to the upvote and downvote feature.
                            However, it doesn't offer an immediate solution for displaying the votes in real-time to the user. To achieve this functionality, additional technologies such as AJAX needs to be implemented.
                        </p>
                        <p>
                            First the databases are created according to the act_as_votable documentation. Then simply the terms "acts_as_voter" or "acts_as_votable" are added to the
                            appropriate models. The voting logic is implemented in the controllers. For instance, in the posts controller, the upvote and downvote functions are defined.
                            Whenever a user clicks the upvote or downvote button, the respective function is called, updating the post with the user's vote. The code for the upvote and
                            downvote functions is similar for other controllers that utilize the voting feature. The code below is from the posts controller.
                        </p>
                        <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
                            {tidderCode1}
                        </SyntaxHighlighter>
                        <p className="mt-4 mb-2">
                            Upvote and downvote in the views. Below shown by an example of upvote a post.
                        </p>
                        <SyntaxHighlighter language="django" style={tomorrowNightBright}>
                            {tidderCode2}
                        </SyntaxHighlighter>
                        
                        <h2>Upcoming features and fixes</h2>
                        <ul>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Sort out authorization issues and dependencies.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>AJAX on upvote and downvote.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Create a profile and add a profile picture.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Search for a post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Save a post.</li>
                            <li><i className="fa-solid fa-circle-arrow-right"></i>Share a post.</li>
                        </ul>
                        
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}