import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '../components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { smartbotCode1 } from './code-snippets/smartbotCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Smartbot() {
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
                title="SmartBot"
                description="A native Android app powered by ChatGPT."
                backgroundImage='/images/smartbot-mobile.jpg'
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
                    <Modal.Title>SmartBot</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>A native Android app powered by ChatGPT.</p>
                                <p><a href="https://github.com/jorgenlt/smartbot" target="_blank">View on GitHub</a></p>
                            </div>
                            <div className="lede--video d-none">
                                
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div>
                                <img className="smartbot-mobile" src="/images/smartbot-mobile-frame.png" alt="Smartbot screenshot" />
                            </div>
                            
                        </div>
                        
                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>To get started, insert your personal ChatGPT API key, create your app, and install it on your device.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Acess to a powerful conversational AI through the power of the GPT 3.5 Turbo model.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>ChatGPT has the ability to read message history with the inclusion of chat logs with each prompt.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Conversation will saved in the android local storage.</li>
                            </ul>
                            
                            <h2>Technologies</h2>
                            <p>
                                SmartBot is built with React Native on the Expo framework. The app is connected to the OpenAI API.
                            </p>
                            
                            <h2>Technical challenges</h2>
                            <h3>API call</h3>
                            <p>
                                Description.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {smartbotCode1}
                            </SyntaxHighlighter>
                            
                            <h2>Upcoming features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                            </ul>
                            
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}