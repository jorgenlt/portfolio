import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { aocCode1 } from "@/components/code-snippets/aocCode";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function AdventOfCode() {
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
        title="Advent of Code"
        description="A site that fetches my solutions to the yearly advent code puzzles from Advent of Code"
        backgroundImage="/images/aoc-illustration.jpg"
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
          <Modal.Title>Advent of Code - Solutions</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>
                  A website build with React that fetches all my solutions to
                  the famous coding puzzle game,{" "}
                  <a href="https://www.adventofcode.com" target="_blank">
                    Advent of Code
                  </a>
                  , from my{" "}
                  <a
                    href="https://github.com/jorgenlt/advent-of-code"
                    target="_blank"
                  >
                    GitHub repo
                  </a>
                  .
                </p>
                <p>
                  Visit site:{" "}
                  <a href="https://aoc.jorgenlt.no" target="_blank">
                    aoc.jorgenlt.no
                  </a>{" "}
                </p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/aoc-solutions"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <img
                src="/images/aoc-desktop1.png"
                alt="Advent of Code"
                style={{ maxWidth: "80%" }}
              />
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  Check the solutions to all of the puzzles that I have
                  completed.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  Fetches the code snippets directly from my GitHub repo.
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
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
                <a
                  href="https://www.npmjs.com/package/react-axios"
                  target="_blank"
                >
                  {" "}
                  Axios
                </a>{" "}
                is used when when fetching the code and{" "}
                <a
                  href="https://www.npmjs.com/package/react-syntax-highlighter"
                  target="_blank"
                >
                  React Syntax Highlighter
                </a>{" "}
                makes the code easily readable.
              </p>
              <h2>Project structure - if relevant</h2>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {"project structure"}
              </SyntaxHighlighter>

              <h2>Technical challenges</h2>
              <h3>The Redux slice with API call</h3>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {aocCode1}
              </SyntaxHighlighter>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
