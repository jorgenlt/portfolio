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

            <button type="button" className="btn btn-primary btn-sm" onClick={handleShow}>Explore</button>

            
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