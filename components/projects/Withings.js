import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// import {} from "@/components/code-snippets/messagemateCode";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Smartbot() {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFullscreen("lg-down");
    setShow(true);
  };

  return (
    <>
      <PortfolioCard
        title="Withings"
        description="Withings ScanWatch data reader."
        backgroundImage="/images/withings-desktop3.png"
        handleShow={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        fullscreen={fullscreen}
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title>Withings Data Reader</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>Description.</p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/withings-data-reader"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <img
                src="/images/withings-desktop1.png"
                alt="Withings screenshot on desktop."
              />
              <img
                src="/images/withings-desktop2.png"
                alt="Withings screenshot on desktop."
              />
              <img
                src="/images/withings-desktop4.png"
                alt="Withings screenshot on desktop."
              />
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>1
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>2
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>3
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>4
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
                Description.
              </p>

              <h2>Project structure</h2>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {}
              </SyntaxHighlighter>

              <h2>Technical challenges</h2>

              <h3>Header</h3>
              <p>Description.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {}
              </SyntaxHighlighter>

              <h2>Upcoming features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>1
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>2
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>3
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>4
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
