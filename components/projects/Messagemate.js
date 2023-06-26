import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { messagemateCode1, messagemateCode2, messagemateCode3 } from '@/components/code-snippets/messagemateCode';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Messagemate() {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFullscreen('lg-down');
    setShow(true);
  };
  
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
          <Modal.Title>Messagemate</Modal.Title>
          <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
        </Modal.Header>
        <Modal.Body>
          <div className="projects-modal--body">
            <div className="projects-modal--lede">
              <div>
                <p>A responsive instant messenger application for desktop and mobile.</p>
                <p>Visit site: <a href="https://messagemate.herokuapp.com" target="_blank">messagemate.me</a></p>
                <p>Download for android: <a href="/files/messagemate.apk" target="_blank">messagemate.apk</a></p>
                <p><a href="https://github.com/jorgenlt/messagemate" target="_blank">View on GitHub</a></p>
              </div>
              <div className="lede--video">
                <iframe src="https://player.vimeo.com/video/793256271?h=70456f8a85&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="290"
                height="644"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen title="Screenrecorder-2023-01-27-14-23-07-727">
                </iframe>
              </div>
            </div>
            <div className="projects-modal--media">
              <div className="messagemate-phone">
                <div className="messagemate-photos">
                  <img src="/images/messagemate_phone1.png" alt="messagemate on phone." />
                  <img src="/images/messagemate_phone2.png" alt="messagemate on phone." />
                </div>
              </div>
              <div className="media--desktop">
                <img src="/images/messagemate_desktop1.png" alt="messagemate on desktop." />
              </div>
            </div>
          
            <div>
              <h2>Features</h2>
              <ul>
                <li><i className="fa-solid fa-circle-arrow-right"></i>A user can sign up and sign in, and add a picture to their profile. Account information and profile picture can be edited by the user at a later time.</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i>A user can add another user to start a new conversation ("chatroom").</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i>A user can send and receive messages in real-time.</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i>Secure authentication and authorization.</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i>Mobile responsiveness to ensure optimal user experience. The app can be downloaded as an apk-file for android or used in the browser on desktop or mobile.</li>
                <li><i className="fa-solid fa-circle-arrow-right"></i>Lightweight, fast and simple messaging web application.</li>
              </ul>
              
              <h2>Technologies</h2>
              <p>
              MessageMate is built with <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a> on both backend and frontend.
              Data is stored in a PostgreSQL database and Cloudinary is used for cloud storage of the profile image files. Authentication and authorization
              is being handled with the <a href="https://github.com/heartcombo/devise" target="_blank">Devise gem</a>. This ensures the user to
              securely sign in and sign up to the application, authorization is given to the user so that they can only view their own content. The
              application is using Websocket with Action Cable for real-time, two-way communication between the server and client. This allows the exchange of
              messages in both directions without the need for a new request to be made for each message.
              
              The application is additionally supported by Webpack, simple_form, stimulus and bootstrap.
              </p>
              
              <h2>Technical challenges</h2>
              
              <h3>Making the messages appear in real time for sender and receiver</h3>
              
              <p>
              <a href="https://guides.rubyonrails.org/action_cable_overview.html" target="_blank">Action Cable</a> is a feature of
              Ruby on Rails that provides a framework for using WebSockets in a Rails application. It allows us to create "channels" in our
              application, which can receive and broadcast messages in real-time. This makes it possible to build real-time applications,
              such as chat apps, posts, comments, and other features that requires real-time updates and notifications.
              </p>
              <p>
              On connection to the chatrooom page the user is subscribed to the channel Chatroom. Using javascript the messages are inserted
              into the DOM.
              </p>
              <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
              {messagemateCode1}
              </SyntaxHighlighter>
              
              <p className="mt-4 mb-2">On the server-side each new message is broadcasted if the message is created and saved successfully.</p>
              <SyntaxHighlighter language="ruby" style={tomorrowNightBright}>
              {messagemateCode2}
              </SyntaxHighlighter>
              
              <p className="mt-4 mb-2">The messages are displayed in the chatroom show view.</p>
              <SyntaxHighlighter language="django" style={tomorrowNightBright}>
              {messagemateCode3}
              </SyntaxHighlighter>
              <h2>Upcoming features</h2>
              <ul>
              <li><i className="fa-solid fa-circle-arrow-right"></i>A user can see other users profile.</li>
              <li><i className="fa-solid fa-circle-arrow-right"></i>A user can add personal information to their profile.</li>
              <li><i className="fa-solid fa-circle-arrow-right"></i>Notifications in android app.</li>
              <li><i className="fa-solid fa-circle-arrow-right"></i>A user can start a group chat.</li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}