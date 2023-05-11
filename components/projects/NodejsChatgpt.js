import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nodejsChatgptCode1 } from '@/components/code-snippets/nodejsChatgptCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function NodejsChatgpt() {
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
                title="Node.js ChatGPT CLI"
                description="A Node.js chatbot with ChatGPT for the CLI"
                backgroundImage='/images/nodejs-chatgpt.png'
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
                    <Modal.Title>Node.js ChatGPT CLI</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>A ChatGPT chat bot for the CLI.</p>
                                <p><a href="https://github.com/jorgenlt/nodejs-chatgpt" target="_blank">View on GitHub</a></p>
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div className="media--desktop">
                                <img src="/images/nodejs-chatgpt-gif.gif" alt="Demo of Node.js ChatGPT CLI" />
                            </div>
                        </div>
                        <div>
                            <h2>Features</h2>
                                <ul>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i>Communicate with ChatGPT directly from the terminal.</li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i>Fast and secure.</li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i>With BASH script to make an alias for quick execution.</li>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i>Chat history for current session is transferred with every prompt.</li>
                                </ul>

                            <h2>Source code</h2>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {nodejsChatgptCode1}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}