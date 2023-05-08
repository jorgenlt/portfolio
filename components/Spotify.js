import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '../components/PortfolioCard';
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
            <PortfolioCard
                title="Spotify Artist Page"
                description="The frontend of the Spotify artist page."
                backgroundImage='/images/spotify-desktop3.png'
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
                    <Modal.Title>Spotify artist page</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>Frontend clone of the Spotify artist page.</p>
                                <p>Visit site: <a href="https://spotify.jorgenlt.me" target="_blank">Spotify Artist Page</a></p>
                                <p><a href="https://github.com/jorgenlt/spotify-artist-page" target="_blank">View on GitHub</a></p>
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div className="media--spotify-desktop">
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
                            <p className="mt-4 mb-2">
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