import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { } from './code-snippets/messagemateCode';
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
            <div className="portfolio-cards--card">
                <div className='portfolio-cards--card-overlay'></div>
                <div className="portfolio-cards--card-content">
                    <h2 className="portfolio-cards--card-title">Title</h2>
                    <p>Description</p>
                    <div type="button" className="btn btn-primary" onClick={handleShow}>Explore</div>
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
                    <Modal.Title>Title</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                        'Code snippet'
                    </SyntaxHighlighter>
                </Modal.Body>
            </Modal>
        </>
    )
}