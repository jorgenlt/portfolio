import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tenziesCode1, tenziesCode2 } from './code-snippets/tenziesCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Tenzies() {
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
                    <h2 className="portfolio-cards--card-title">React Tenzies Game</h2>
                    <p>The classic tenzies game made with React.</p>
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
                    <Modal.Title>Tenzies Game</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>An online tenzies game made with React.</p>
                                <p>Visit site: <a href="https://tenzies.jorgenlt.me" target="_blank">React Tenzies Game</a></p>
                                <p><a href="https://github.com/jorgenlt/react-tenzies-game" target="_blank">View on GitHub</a></p>
                            </div>
                        </div>
                            <div>
                                <div>
                                    <a href="https://tenzies.jorgenlt.me" target="_blank">
                                    <img src="/images/tenzies-desktop.png" alt="Tenzies on desktop." className="projects-modal--full-img" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Roll dices.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Click to hold dices between rolls.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Animation on winning.</li>
                            </ul>
                            
                            <h2>Technologies</h2>
                            <p>
                                The app is built with React (Next.js) and was part of the Scrimba Learn React curriculum.
                            </p>
                            
                            <h2>Source code</h2>
                            <h3>Main file, index.js</h3>
                            <p>
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {tenziesCode1}
                            </SyntaxHighlighter>
                            <h3>The die, Die.js</h3>
                            <p className="mt-4 mb-2">
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {tenziesCode2}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}