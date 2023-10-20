export const portfolioWebsiteCode1 = `
├── components
│   ├── code-snippets
│   │   ├── finditCode.js
│   │   ├── homifyCode.js
│   │   ├── messagemateCode.js
│   │   ├── nodejsChatgptCode.js
│   │   ├── portfolioWebsiteCode.js
│   │   ├── smartbotCode.js
│   │   ├── tenziesCode.js
│   │   └── tidderCode.js
│   ├── Loader.js
│   ├── Nav.js
│   ├── PortfolioCard.js
│   ├── projects
│   │   ├── Findit.js
│   │   ├── Homify.js
│   │   ├── Messagemate.js
│   │   ├── NodejsChatgpt.js
│   │   ├── OtherProjects.js
│   │   ├── PortfolioWebsite.js
│   │   ├── ProjectTemplate.js
│   │   ├── Smartbot.js
│   │   ├── Spotify.js
│   │   ├── Tenzies.js
│   │   └── Tidder.js
│   └── SomeBar.js
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── pages
│   ├── api
│   │   └── hello.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   ├── favicon.ico
│   ├── files
│   │   ├── jorgenlt_cv_v4.pdf
│   │   └── messagemate.apk
│   ├── images
│   │   ├── ben-kolde-unsplash.jpg
│   │   ├── choropleth_map.png
│   │   ├── coding-bg.jpg
│   │   ├── currency_converter.png
│   │   ├── edho-pratama-unsplash.jpg
│   │   ├── findit_desktop1.png
│   │   ├── heat_map.png
│   │   ├── homify-pixel-2-1-rot.png
│   │   ├── homify-pixel-2-1-rot-rm-bg.png
│   │   ├── javascript_calculator.png
│   │   ├── meme-desktop.png
│   │   ├── meme-mobile.png
│   │   ├── messagemate_desktop1.png
│   │   ├── messagemate_phone1.png
│   │   ├── messagemate_phone2.png
│   │   ├── nodejs-chatgpt-gif.gif
│   │   ├── nodejs-chatgpt.png
│   │   ├── notes-app-desktop.png
│   │   ├── pomodoro_timer.png
│   │   ├── portfolio-website-desktop2.png
│   │   ├── portfolio-website-desktop.png
│   │   ├── smartbot-mobile-frame.png
│   │   ├── smartbot-mobile.jpg
│   │   ├── spotify-desktop2.png
│   │   ├── spotify-desktop3.png
│   │   ├── spotify-desktop.png
│   │   ├── tenzies-desktop2.png
│   │   ├── tenzies-desktop.png
│   │   ├── tidder_desktop_1.png
│   │   ├── tidder_phone_1.png
│   │   └── url_shortener.png
│   ├── next.svg
│   └── vercel.svg
├── readme.md
├── sections
│   ├── SectionAbout.js
│   ├── SectionContact.js
│   ├── SectionHero.js
│   ├── SectionPortfolio.js
│   └── SectionResume.js
├── smartbot-description.md
└── styles
    ├── app.scss
    ├── components
    │   ├── _findit.scss
    │   ├── _form_legend_clear.scss
    │   ├── _homify.scss
    │   ├── _index.scss
    │   ├── _loading_animation.scss
    │   ├── _messagemate.scss
    │   ├── _navbar.scss
    │   ├── _other_projects.scss
    │   ├── _portfolio_cards.scss
    │   ├── _projects_modal.scss
    │   ├── _pushbar.scss
    │   ├── _scrollbar.scss
    │   ├── _smartbot.scss
    │   ├── _spotify.scss
    │   ├── _sticky_some_bar.scss
    │   └── _tidder.scss
    ├── config
    │   ├── _bootstrap_variables.scss
    │   ├── _fullpage.scss
    │   ├── _index.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── _globals.scss
    ├── pages
    │   ├── _home.scss
    │   └── _index.scss
    └── prism.css

`;

export const portfolioWebsiteCode2 = `
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import SectionHero from '@/sections/SectionHero';
import SectionAbout from '@/sections/SectionAbout';
import SectionPortfolio from '@/sections/SectionPortfolio';
import SectionResume from '@/sections/SectionResume';
import SectionContact from '@/sections/SectionContact';
import Loader from '@/components/Loader';
import SomeBar from '@/components/SomeBar'
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jørgen Larsen Tjønnteig, Portfolio (jorgenlt)</title>
        <meta name="description" content="Portfolio page of Jørgen Larsen Tjønnteig, fullstack web developer. Skills: Full Stack Web Development, Javascript, SQL, Ruby, Ruby on Rails, HTML, CSS, UX/UI, Product Design, Bootstrap. Visit portfolio for projects and resume / CV." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className='fullpage-container'>
        <Loader />
        <SomeBar />
        <ReactFullpage 
          scrollingSpeed={1000}
          navigation={true}
          autoScrolling={true}
          normalScrollElements='.modal'
          scrollBar={false}
          licenseKey={'gplv3-license'}
          continuousVertical={true}
          anchors={['0', '1', '2', '3', '4']}
          credits={{enabled: false}}
          scrollOverflow={true}
          keyboardScrolling={true}
          scrollHorizontally={true}
          slidesNavigation={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <SectionHero />
                <SectionAbout />
                <SectionPortfolio />
                <SectionResume />
                <SectionContact />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    </>
  )
}

`;

export const portfolioWebsiteCode3 = `
import { useState } from 'react';
import Homify from '@/components/projects/Homify';
import Messagemate from '@/components/projects/Messagemate';
import Smartbot from '@/components/projects/Smartbot';
import PortfolioWebsite from '@/components/projects/PortfolioWebsite';
import Spotify from '@/components/projects/Spotify';
import Findit from '@/components/projects/Findit';
import Tidder from '@/components/projects/Tidder';
import NodejsChatgpt from '@/components/projects/NodejsChatgpt';
import Tenzies from '@/components/projects/Tenzies';
import OtherProjects from '@/components/projects/OtherProjects';

const portfolioCards = [
    { id: 1, name: 'Homify', tech: ['rails', 'javascript', 'ruby'] },
    { id: 2, name: 'Messagemate', tech: ['rails', 'javascript', 'ruby', 'android'] },
    { id: 3, name: 'Smartbot', tech: ['react native', 'javascript', 'android'] },
    { id: 4, name: 'PortfolioWebsite', tech: ['react', 'javascript'] },
    { id: 5, name: 'Spotify', tech: ['javascript'] },
    { id: 6, name: 'Findit', tech: ['rails', 'ruby', 'javascript'] },
    { id: 7, name: 'Tidder', tech: ['rails', 'javascript', 'ruby'] },
    { id: 8, name: 'Tenzies', tech: ['react', 'javascript'] },
    { id: 9, name: 'OtherProjects', tech: ['react', 'javascript'] },
    { id: 10, name: 'NodejsChatgpt', tech: ['node.js', 'javascript'] },
];

export default function SectionPortfolio() {
    const [selectedTech, setSelectedTech] = useState([]);

    const handleTechButtonClick = (event) => {
        const tech = event.target.value;
        if (tech === 'All') {
            setSelectedTech([]);
        } else {
            setSelectedTech([tech]);
        }
    };

    const filteredPortfolioCards = portfolioCards.filter((card) => {
        if (selectedTech.length === 0) {
          return true;
        }
        return selectedTech.every((tech) => card.tech.includes(tech));
    });

    return (
        <div className="section">
            <div id="portfolio--content">
                <div id="portfolio--header">
                    <h1>Portfolio</h1>
                    <p></p>
                    <div id='portfolio--filters'>
                        <button onClick={handleTechButtonClick} value="All" className={selectedTech.length === 0 ? 'selected' : ''}>All</button>
                        <button onClick={handleTechButtonClick} value="react" className={selectedTech.includes('react') ? 'selected' : ''}>React</button>
                        <button onClick={handleTechButtonClick} value="react native" className={selectedTech.includes('react native') ? 'selected' : ''}>React Native</button>
                        <button onClick={handleTechButtonClick} value="javascript" className={selectedTech.includes('javascript') ? 'selected' : ''}>JavaScript</button>
                        <button onClick={handleTechButtonClick} value="ruby" className={selectedTech.includes('ruby') ? 'selected' : ''}>Ruby</button>
                        <button onClick={handleTechButtonClick} value="rails" className={selectedTech.includes('rails') ? 'selected' : ''}>Rails</button>
                        <button onClick={handleTechButtonClick} value="android" className={selectedTech.includes('android') ? 'selected' : ''}>Android</button>
                        <button onClick={handleTechButtonClick} value="node.js" className={selectedTech.includes('node.js') ? 'selected' : ''}>Node.js</button>
                    </div>
                </div>
                <div className="portfolio-cards--container">
                    {filteredPortfolioCards.map((card) => {
                        switch (card.name) {
                        case 'Homify':
                            return <Homify key={card.id} tech={card.tech} />;
                        case 'Messagemate':
                            return <Messagemate key={card.id} tech={card.tech} />;
                        case 'Smartbot':
                            return <Smartbot key={card.id} tech={card.tech} />;
                        case 'Spotify':
                            return <Spotify key={card.id} tech={card.tech} />;
                        case 'Findit':
                            return <Findit key={card.id} tech={card.tech} />;
                        case 'Tidder':
                            return <Tidder key={card.id} tech={card.tech} />;
                        case 'Tenzies':
                            return <Tenzies key={card.id} tech={card.tech} />;
                        case 'OtherProjects':
                            return <OtherProjects key={card.id} tech={card.tech} />;
                        case 'NodejsChatgpt':
                            return <NodejsChatgpt key={card.id} tech={card.tech} />;
                        case 'PortfolioWebsite':
                            return <PortfolioWebsite key={card.id} tech={card.tech} />;
                        default:
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
`;

export const portfolioWebsiteCode4 = `
import Modal from 'react-bootstrap/Modal';
import PortfolioCard from '@/components/PortfolioCard';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { smartbotCode1 } from '@/components/code-snippets/smartbotCode';
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
                title="SmartBot"
                description="A native Android app powered by ChatGPT."
                backgroundImage='/images/smartbot-mobile.jpg'
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
                    <Modal.Title>SmartBot</Modal.Title>
                    <span className='modal-close' onClick={handleClose}><i className="fa-solid fa-xmark hover-brighter-green"></i></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="projects-modal--body">
                        <div className="projects-modal--lede">
                            <div>
                                <p>A native Android app powered by ChatGPT.</p>
                                <p><a href="https://github.com/jorgenlt/smartbot" target="_blank">View on GitHub</a></p>
                            </div>
                            <div className="lede--video d-none">
                                
                            </div>
                        </div>
                        <div className="projects-modal--media">
                            <div>
                                <img className="smartbot-mobile" src="/images/smartbot-mobile-frame.png" alt="Smartbot screenshot" />
                            </div>
                            
                        </div>
                        
                        <div>
                            <h2>Features</h2>
                            <ul>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>To get started, insert your personal ChatGPT API key, create your app, and install it on your device.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Acess to a powerful conversational AI through the power of the GPT 3.5 Turbo model.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>ChatGPT has the ability to read message history with the inclusion of chat logs with each prompt.</li>
                                <li><i className="fa-solid fa-circle-arrow-right"></i>Conversation will saved in the android local storage.</li>
                            </ul>
                            
                            <h2>Technologies</h2>
                            <p>
                                SmartBot is built with React Native on the Expo framework. The app is connected to the OpenAI API.
                            </p>
                            
                            <h2>Technical challenges</h2>
                            <h3>API call</h3>
                            <p>
                                Description.
                            </p>
                            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
                                {smartbotCode1}
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
`;
