import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { } from '@/components/code-snippets/messagemateCode';
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
            title="My Pokémon"
            description="Search for Pokémon cards and save them to your list."
            backgroundImage='/images/my-pokemon-desktop.png'
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
              <Modal.Title>My Pokémon</Modal.Title>
              <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
          </Modal.Header>
          <Modal.Body>
            <div className="projects-modal--body">
              <div className="projects-modal--lede">
                <div>
                  <p>Pokémon app using the PokeAPI.</p>
                  <p>Visit site: <a href="https://pokemon.jorgenlt.me" target="_blank">pokemon.jorgenlt.me</a></p>
                  <p><a href="https://github.com/jorgenlt/mine-pokemon" target="_blank">View on GitHub</a></p>
                </div>
                <div className="lede--video">

                </div>
              </div>
              <div className="projects-modal--media">
                <div className='media--desktop'>
                  <img src="/images/my-pokemon-desktop.png" alt="My Pokémon on desktop." />
                </div>
              </div>
              <div>
                <h2>Features</h2>
                <ul>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                  <li><i className="fa-solid fa-circle-arrow-right"></i></li>
                </ul>
                <h2>Technologies</h2>
                <p>
                  Description of technologies used.
                </p>
                <h2>Technical challenges</h2>
                <h3>Making the messages appear in real time for sender and receiver</h3>
                <p>
                  Description of challenges.
                </p>
                <p>Challenge 1</p>
                <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                  {}
                </SyntaxHighlighter>
                <p className="mt-4 mb-2">Challenge 2</p>
                <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
                  {}
                </SyntaxHighlighter>
                <p className="mt-4 mb-2">Challenge 3</p>
                <SyntaxHighlighter language="django" style={tomorrowNightBright}>
                  {}
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