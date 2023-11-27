import Modal from "react-bootstrap/Modal";
import PortfolioCard from "@/components/PortfolioCard";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  withingsCode1,
  withingsCode2,
  withingsCode3,
  withingsCode4,
} from "@/components/code-snippets/withingsCode";
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
                <p>
                  A web application to view detailed health data from ScanWatch,
                  a smart watch from{" "}
                  <a href="https://www.withings.com" target="_blank">
                    Withings
                  </a>
                  .
                </p>
                <p>
                  Visit site:{" "}
                  <a href="https://scanwatch.jorgenlt.no" target="_blank">
                    scanwatch.jorgenlt.no
                  </a>{" "}
                  (demo files are provided for testing)
                </p>
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
                  <i className="fa-solid fa-circle-arrow-right"></i>Upload
                  health data from a Withings account.
                </li>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i>View
                  detailed charts on sleep, blood oxygen, heart rate and weight.
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
              <h2>Project structure</h2>
              <SyntaxHighlighter language="bash" style={tomorrowNightBright}>
                {withingsCode1}
              </SyntaxHighlighter>

              <h2>Technical challenges</h2>
              <h3>Parsing uploaded files</h3>
              <p>
                The function uploadFilesThunk loops through each file and checks
                if it is an allowed file type.
              </p>
              <p>
                For each allowed file, PapaParse is used to parse the CSV data.
                In the complete-callback, the parsed data is pushed to the
                parsedFiles array. The parsedFiles arrray containing all the
                parsed files is returned.
              </p>
              <p>
                On the Redux side the files are stored by filename when the
                thunk is fulfilled.
              </p>
              <SyntaxHighlighter
                language="javascript"
                style={tomorrowNightBright}
              >
                {withingsCode2}
              </SyntaxHighlighter>

              <h3>Prepare the raw upload data for usage in the app</h3>
              <p>
                The raw CSV data, that are uploaded and parsed, are further
                processed to be used in the app. The processed data is then
                dispatched to update the appropriate state slice, such as spo2
                data dispatching updateSpo2.
              </p>
              <SyntaxHighlighter language="jsx" style={tomorrowNightBright}>
                {withingsCode3}
              </SyntaxHighlighter>

              <h3>Charts</h3>
              <p>
                The charts are created using different components from Recharts.
                For example, in the SpO2 chart a LineChart component maps data
                to Y and X axis. When the date is updated the chart rerenders to
                show the updated data.
              </p>
              <SyntaxHighlighter language="jsx" style={tomorrowNightBright}>
                {withingsCode4}
              </SyntaxHighlighter>

              <h2>Upcoming features</h2>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-arrow-right"></i> Download
                  chart as image.
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
