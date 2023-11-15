import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  myPokemonCode1,
  myPokemonCode2,
  myPokemonCode3,
  myPokemonCode4,
} from "@/components/code-snippets/myPokemonCode";
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
        title="My Pokémon"
        description="A web application to browse, search, store and edit Pokémon from the PokéAPI"
        backgroundImage="/images/my-pokemon-desktop.png"
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
          <Modal.Title>My Pokémon</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>
                  A web application to browse, search, store and edit Pokémon
                  from the{" "}
                  <a href="https://pokeapi.co/" target="_blank">
                    PokéAPI
                  </a>
                  .
                </p>
                <p>
                  Visit site:{" "}
                  <a href="https://pokemon.jorgenlt.no" target="_blank">
                    pokemon.jorgenlt.no
                  </a>
                </p>
                <p>
                  <a
                    href="https://pokemon.jorgenlt.no/docs/index.html"
                    target="_blank"
                  >
                    Documentation
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/mine-pokemon"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <div className="media--desktop">
                <img
                  src="/images/my-pokemon-desktop2.png"
                  alt="My Pokémon on desktop."
                />
              </div>
              <div className="media--mobile">
                <img
                  src="/images/my-pokemon-mobile.png"
                  alt="My Pokémon on mobile."
                />
              </div>
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Browse
                  Pokémon from the PokéAPI.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Search and
                  filter Pokémon.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Save a
                  Pokémon to a list.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Edit name of
                  saved Pokémon.
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
                , and selectors to manage the state, handle asynchronous
                actions, and provide efficient access to the Pokemon data. It
                also utilizes an entity adapter to manage the normalized data
                structure. Data is stored in local storage using{" "}
                <a
                  href="https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration"
                  target="_blank"
                >
                  Redux Persist
                </a>
                . The{" "}
                <a
                  href="https://pokemon.jorgenlt.no/docs/index.html"
                  target="_blank"
                >
                  documentation site
                </a>{" "}
                is generated with{" "}
                <a href="https://jsdoc.app/index.html" target="_blank">
                  JSdoc
                </a>
                .
              </p>
              <h2>Technical challenges</h2>
              <h3>The Pokémon slice</h3>
              <p>Setting up the Redux with Redux Toolkit to manage the app.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {myPokemonCode1}
              </SyntaxHighlighter>
              <h3>The store</h3>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {myPokemonCode2}
              </SyntaxHighlighter>
              <h3>Fetching data from PokeAPI</h3>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {myPokemonCode3}
              </SyntaxHighlighter>
              <h3>Folder structure</h3>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {myPokemonCode4}
              </SyntaxHighlighter>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
