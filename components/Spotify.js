import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { } from './code-snippets/messagemateCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Spotify() {
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
                <div className="portfolio-cards--card-content">
                    <h2 className="portfolio-cards--card-title">Spotify Artist Page</h2>
                    <p>The frontend of the Spotify artist page</p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleShow}>Explore</button>
                </div>
            </div>
            <Modal 
                show={show} 
                onHide={handleClose}
                size='xl'
                fullscreen={fullscreen}
                scrollable={true}
            >
                <Modal.Header>
                    <Modal.Title>Spotify artist page</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div class="projects-modal--body">
                        <div class="projects-modal--lede">
                            <div>
                                <p>Frontend clone of the Spotify artist page.</p>
                                <p>Visit site: <a href="https://spotify.jorgenlt.me" target="_blank">Spotify Artist Page</a></p>
                                <p><a href="https://github.com/jorgenlt/spotify-artist-page" target="_blank">View on GitHub</a></p>
                            </div>
                        </div>
                        <div class="projects-modal--media">
                            <div class="media--spotify-desktop">
                                <img src="/images/spotify-desktop.png" alt="Spotify on desktop." />
                                <img src="/images/spotify-desktop2.png" alt="Spotify on desktop." />
                            </div>
                        </div>
                        <div>
                            <h2>Technologies</h2>
                            <p></p>
                            
                            <h2>Technical challenges</h2>
                            <h3>Technical challenge 1</h3>
                            <p>
                                Text with code below.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                'Code snippet'
                            </SyntaxHighlighter>
                            <p class="mt-4 mb-2">
                                Text with code below.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                'Code snippet'
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}