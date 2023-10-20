import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  photoGalleryCode1,
  photoGalleryCode2,
  photoGalleryCode3,
  photoGalleryCode4,
} from "@/components/code-snippets/photoGalleryCode";
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
        title="Photo Gallery"
        description="Browse by categories and upload images."
        backgroundImage="/images/photo-gallery-desktop.jpg"
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
          <Modal.Title>Photo Gallery</Modal.Title>
          <span className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark hover-brighter-green"></i>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>A photo portfolio site for photographers.</p>
                <p>
                  Visit site:{" "}
                  <a href="https://photography.jorgenlt.me" target="_blank">
                    photography.jorgenlt.me
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/jorgenlt/photo-gallery"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="projects-modal--media">
              <div className="media--desktop">
                <a href="https://photography.jorgenlt.me" target="_blank">
                  <img
                    src="/images/photo-gallery-desktop2.jpg"
                    alt="Photo Gallery on desktop."
                  />
                </a>
              </div>
              <div className="media--mobile">
                <img
                  src="/images/photo-gallery-mobile.png"
                  alt="Photo Gallery on mobile."
                />
                <img
                  src="/images/photo-gallery-mobile2.png"
                  alt="Photo Gallery on mobile."
                />
              </div>
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Browse
                  photos by category.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>View photos
                  in full size.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Upload new
                  images to category of choice.
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
                , and selectors to manage the state and actions. Sign in
                functionality is handled with{" "}
                <a
                  href="https://firebase.google.com/docs/auth/web/start"
                  target="_blank"
                >
                  Firebase Authentication
                </a>{" "}
                and uploaded photos are stored in{" "}
                <a
                  href="https://firebase.google.com/docs/storage/web/start"
                  target="_blank"
                >
                  Firebase Storage
                </a>
                .
              </p>

              <h2>Technical challenges</h2>
              <h3>The Redux slice</h3>
              <p>Setting up the Redux with Redux Toolkit to mangage the app.</p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {photoGalleryCode1}
              </SyntaxHighlighter>

              <h3>
                Fetch all image URL's from photos stored at Firebase Storage.
              </h3>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {photoGalleryCode2}
              </SyntaxHighlighter>

              <h3>Upload an image to Firebase Storage.</h3>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {photoGalleryCode3}
              </SyntaxHighlighter>

              <h3>Folder structure</h3>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {photoGalleryCode4}
              </SyntaxHighlighter>

              <h2>Upcoming features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Enable sign
                  up.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>A user can
                  create their own personal portfolio.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>A user can
                  CRUD categories and sub-categories.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>Visitors can
                  like(vote) a picture.
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
