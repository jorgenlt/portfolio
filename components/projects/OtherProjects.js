import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {} from "@/components/code-snippets/messagemateCode";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function OtherProjects() {
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
        title="Other Projects"
        description=""
        backgroundImage="/images/coding-bg.jpg"
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
          <Modal.Title>Other Projects</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="other-projects--wrapper">
              <h2 className="mt-0">Notes App</h2>
              <div className="other-projects--description">
                <div>
                  <p>A notes app for markdown files made with React.</p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://notes-app.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Notes App
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/jorgenlt/notes-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>
                          Write notes in markdown and see the result in the
                          previewer.
                        </li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Notes are saved to the browser's local storage.</li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Create, read, update and delete notes.</li>
                      </div>
                    </ul>
                  </div>
                  <div className="">
                    <a
                      href="https://notes-app.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/notes-app-desktop.png"
                        alt="Notes app"
                        className="projects-modal--full-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2 className="mt-0">Tenzies Game</h2>
              <div className="other-projects--description">
                <div>
                  <p>An online tenzies game made with React.</p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://tenzies.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React Tenzies Game
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/jorgenlt/react-tenzies-game"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Roll dices.</li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Click to hold dices between rolls.</li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Animation on winning.</li>
                      </div>
                    </ul>
                  </div>
                  <div className="">
                    <a
                      href="https://tenzies.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/tenzies-desktop.png"
                        alt="Tenzies Game"
                        className="projects-modal--full-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2 className="mt-0">Meme Generator</h2>
              <div className="other-projects--description">
                <div>
                  <p>A meme generator made with React.</p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://meme.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meme Generator
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/jorgenlt/meme-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>
                          Load a random meme from the current top 100 most
                          popular memes.
                        </li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Add top and bottom text.</li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Dowload image file with custom text.</li>
                      </div>
                    </ul>
                  </div>
                  <div className="meme-screenshots">
                    <a
                      href="https://meme.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/meme-mobile.png"
                        alt="Meme Generator Screentshot"
                      />
                    </a>
                    <a
                      href="https://meme.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/meme-desktop.png"
                        alt="Meme Generator Screentshot"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>Pomodoro timer</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    A pomodoro timer the from Web Development Libraries course
                    on freeCodeCamp. A time management tool that breaks work
                    into 25-minute intervals called "Pomodoros" separated by
                    5-minute breaks.
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://codepen.io/dogonscooter/full/JjaxOwp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pomodoro timer
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/jorgenlt/freecodecamp/tree/master/front-end-development-libraries/25%2B5-clock"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>
                          A time management tool with 25 + 5 work/break
                          sessions.
                        </li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Adjustable break and session time.</li>
                      </div>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>End of session is alerted by an alarm.</li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://codepen.io/dogonscooter/full/JjaxOwp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/pomodoro_timer.png"
                      alt="Pomodoro Timer"
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>Javascript Calculator</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    A javascript calculator from the Web Development Libraries
                    course on freeCodeCamp.
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://codepen.io/dogonscooter/full/vYzVdbQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Javascript Calculator
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/jorgenlt/freecodecamp/tree/master/front-end-development-libraries/javascript-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Javascript Calculator</li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://codepen.io/dogonscooter/full/vYzVdbQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/javascript_calculator.png"
                      alt=""
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>Choropleth Map</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    Choropleth map from Data Visualization course on
                    freeCodeCamp.
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://codepen.io/dogonscooter/full/XWPEmpX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Choropleth Map
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Choropleth map with data from JSON-file.</li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://codepen.io/dogonscooter/full/XWPEmpX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/choropleth_map.png"
                      alt="Choropleth Map"
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>Heat Map</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    Heat map from Data Visualization course on freeCodeCamp.
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://codepen.io/dogonscooter/full/OJovJpB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Heat Map
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Heat map with data from JSON-file.</li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://codepen.io/dogonscooter/full/OJovJpB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/heat_map.png"
                      alt="Heat Map"
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>URL Shortener</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    A lightweight URL shortener using API from{" "}
                    <a
                      href="https://app.short.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      app.short.io
                    </a>
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://url.jorgenlt.no"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      URL Shortener
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>
                          URL Shortener with the domain
                          url.jorgenlt.me/SHORTENED-URL
                        </li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://url.jorgenlt.no"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/url_shortener.png"
                      alt="URL Shortener"
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="other-projects--wrapper">
              <h2>Currency Converter</h2>
              <div className="other-projects--description">
                <div>
                  <p>
                    A lightweight currency converter using API from{" "}
                    <a
                      href="https://www.exchangerate-api.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      exchangerate-api.com
                    </a>
                    .
                  </p>
                  <p>
                    Visit site:{" "}
                    <a
                      href="https://currency-converter.jorgenlt.no/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Currency Converter
                    </a>
                  </p>
                  <div className="other-projects--features">
                    <p>Features:</p>
                    <ul>
                      <div>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                        <li>Currency converter</li>
                      </div>
                    </ul>
                  </div>
                  <a
                    href="https://currency-converter.jorgenlt.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/currency_converter.png"
                      alt="Currency Converter web application"
                      className="projects-modal--full-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="photo-credit">
              "Other Projects" card illustration by{" "}
              <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Luca Bravo
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/XJXWbfSo2f0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
