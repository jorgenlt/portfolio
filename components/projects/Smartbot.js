import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  smartbotCode1,
  smartbotCode2,
  smartbotCode3,
  smartbotCode4,
  smartbotCode5,
} from "@/components/code-snippets/smartbotCode";
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
        title="SmartBot"
        description="A native Android app powered by ChatGPT."
        backgroundImage="/images/smartbot.png"
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
          <Modal.Title>SmartBot</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>A native Android app powered by ChatGPT.</p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/smartbot"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <div>
                <img
                  className="smartbot-mobile"
                  src="/images/smartbot-mobile-frame4.png"
                  alt="Smartbot screenshot"
                />
                <img
                  className="smartbot-mobile"
                  src="/images/smartbot-mobile-frame2.png"
                  alt="Smartbot screenshot"
                />
                <img
                  className="smartbot-mobile"
                  src="/images/smartbot-mobile-frame1.png"
                  alt="Smartbot screenshot"
                />
                <img
                  className="smartbot-mobile"
                  src="/images/smartbot-mobile-frame3.png"
                  alt="Smartbot screenshot"
                />
              </div>
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Acess to a
                  powerful conversational AI with the{" "}
                  <a
                    href="https://platform.openai.com/docs/introduction"
                    target="_blank"
                  >
                    OpenAI API
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Create,
                  browse and delete conversations
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Continue an
                  earlier conversation
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Copy a
                  message to clipboard
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Share a
                  message
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
                Smartbot is a native mobile app for Android that was built using{" "}
                <a href="https://reactnative.dev/" target="_blank">
                  React Native
                </a>{" "}
                and the{" "}
                <a href="https://expo.dev/" target="_blank">
                  Expo framework
                </a>
                . The app connects to the{" "}
                <a
                  href="https://platform.openai.com/docs/introduction"
                  target="_blank"
                >
                  OpenAI API
                </a>{" "}
                to utilize its artificial intelligence capabilities. To manage
                state and actions across the app, it uses{" "}
                <a href="https://redux-toolkit.js.org/" target="_blank">
                  Redux Toolkit
                </a>
                . When the app needs to get data asynchronously from the API, it
                uses the{" "}
                <a
                  href="https://redux.js.org/usage/writing-logic-thunks"
                  target="_blank"
                >
                  Redux Thunk
                </a>{" "}
                middleware. The app also utilizes the{" "}
                <a href="https://axios-http.com/" target="_blank">
                  Axios
                </a>{" "}
                library for API requests, the{" "}
                <a href="https://date-fns.org/" target="_blank">
                  Date-fns
                </a>{" "}
                library for working with dates and times, and{" "}
                <a
                  href="https://github.com/rt2zz/redux-persist#readme"
                  target="_blank"
                >
                  Redux Persist
                </a>{" "}
                to persist some Redux state.
              </p>

              <h2>Project structure</h2>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {smartbotCode5}
              </SyntaxHighlighter>

              <h2>Technical challenges</h2>

              <h3>The Redux slice</h3>
              <p>Redux state management and actions.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {smartbotCode1}
              </SyntaxHighlighter>

              <h3>API call</h3>
              <p>Chat completions API call.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {smartbotCode2}
              </SyntaxHighlighter>

              <h3>App.js</h3>
              <p></p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {smartbotCode3}
              </SyntaxHighlighter>

              <h3>Displaying messages</h3>
              <p>Displaying messages in a conversation.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {smartbotCode4}
              </SyntaxHighlighter>

              <h2>Upcoming features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Dark mode
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Personal
                  account with authentication.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Database
                  storage of conversations (Firebase)
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Option to
                  add OpenAI API key manually and change model.
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
