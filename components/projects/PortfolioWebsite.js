import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { 
    portfolioWebsiteCode1, 
    portfolioWebsiteCode2, 
    portfolioWebsiteCode3, 
    portfolioWebsiteCode4 } 
    from '@/components/code-snippets/portfolioWebsiteCode'
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { } from '@/components/code-snippets/messagemateCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function PortfolioWebsite(props) {
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
                title="Portfolio Website"
                description="React portfolio site"
                backgroundImage='/images/portfolio-website-desktop2.png'
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
                    <Modal.Title>Portfolio Website</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>Portfolio website.</p>
                                <p><a href="https://github.com/jorgenlt/portfolio" target="_blank">View on GitHub</a></p>
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div className="media--desktop">
                                <img src="/images/portfolio-website-desktop2.png" alt="Screeshot, Portfolio website." style={{border: '1px solid #151515'}} />
                            </div>
                        </div>

                        <div>
                            <h2>Features</h2>
                                <ul>
                                    <li><i className="fa-solid fa-circle-arrow-right"></i>Portfolio website with resume and projects.</li>
                                </ul>

                            <h2>Technologies</h2>
                            <p>
                                The portfolio website is built with <a href="https://react.dev/" target="_blank" referrer="noreferrer">React</a> on the <a href="https://nextjs.org/" target="_blank" referrer="noreferrer">Next.js</a> framework.
                                The website is additionally supported by Webpack, bootstrap, SASS, fullpage.js and React Syntax Highlighter.
                            </p>

                            <h2>Details and examples</h2>

                            <h3>Folder structure</h3>
                            <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                                {portfolioWebsiteCode1}
                            </SyntaxHighlighter>
                            
                            <h3>index.js</h3>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {portfolioWebsiteCode2}
                            </SyntaxHighlighter>
                            
                            <h3>SectionPortfolio.js</h3>
                            <p>The portfolio section with the portfolio cards and the feature to filter by technology.</p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {portfolioWebsiteCode3}
                            </SyntaxHighlighter>

                            <h3>Project modals</h3>
                            <p>An example of how the project modals are made. Here show with Smartbot.js</p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {portfolioWebsiteCode4}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}