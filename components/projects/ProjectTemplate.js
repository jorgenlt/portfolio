import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {} from "@/components/code-snippets/messagemateCode";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function ProjectTemplate() {
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
        title="Messagemate"
        description="Instant messenger."
        backgroundImage="/images/messagemate_desktop1.png"
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
          <Modal.Title>Title</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>
                  description
                </p>
                <p>
                  Visit site:{" "}
                  <a href="link to site" target="_blank">
                    link-to-site
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/project-link"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <img
                src=""
                alt=""
              />
              <img
                src=""
                alt=""
              />
              <img
                src=""
                alt=""
              />
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  feature 1
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  feature 2
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
                Description of tech used. For example:
                <br/>
                The application is build with React on the{" "}
                <a href="https://vitejs.dev/" target="_blank">
                  Vite.js
                </a>{" "}
                framework. The app combines{" "}
                <a href="https://redux-toolkit.js.org/" target="_blank">
                  Redux Toolkit
                </a>
                ,{" "}
                <a
                  href="https://redux.js.org/usage/writing-logic-thunks"
                  target="_blank"
                >
                  Redux Thunk
                </a>
                , and selectors to manage the state and actions.
                <a href="https://date-fns.org/" target="_blank">
                  {" "}
                  Date-fns
                </a>{" "}
                handles dates and times, and{" "}
                <a
                  href="https://github.com/rt2zz/redux-persist#readme"
                  target="_blank"
                >
                  Redux Persist
                </a>{" "}
                save the Redux state in the browser's local storage. Raw CSV
                data is parsed with{" "}
                <a href="https://react-papaparse.js.org" target="_blank">
                  {" "}
                  React-PapaParse
                </a>
                .{" "}
                <a href="https://reactrouter.com/" target="_blank">
                  React Router
                </a>{" "}
                does the site navigation. Charts are made with{" "}
                <a href="https://recharts.org/" target="_blank">
                  Recharts
                </a>
                . Additionally, the application is supplemented by{" "}
                <a href="https://reactdatepicker.com" target="_blank">
                  react-datepicker
                </a>
                ,{" "}
                <a
                  href="https://www.npmjs.com/package/react-device-detect"
                  target="_blank"
                >
                  react-device-detect
                </a>
                ,{" "}
                <a
                  href="https://www.npmjs.com/package/react-icons"
                  target="_blank"
                >
                  react-icons
                </a>
                ,{" "}
                <a
                  href="https://www.npmjs.com/package/react-transition-group"
                  target="_blank"
                >
                  react-transition-group
                </a>{" "}
                and
                <a href="https://www.npmjs.com/package/uuid" target="_blank">
                  {" "}
                  uuid
                </a>
                .
              </p>
              <h2>Project structure - if relevant</h2>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {"project structure"}
              </SyntaxHighlighter>

              <h2>Technical challenges</h2>
              <h3>tech challenge 1</h3>
              <p>
                description of challenge
              </p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {"code snippet"}
              </SyntaxHighlighter>

              <h3>tech challenge 2</h3>
              <p>
                description of challenge
              </p>
              <SyntaxHighlighter language="jsx" style={tomorrowNightBright}>
                {"code snippet"}
              </SyntaxHighlighter>

              <h2>Upcoming features - if relevant</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  upcoming feature 1
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
