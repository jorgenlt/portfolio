import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { } from '@/components/code-snippets/messagemateCode';
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
          title="Messagemate"
          description="Instant messenger."
          backgroundImage='/images/messagemate_desktop1.png'
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