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
    { id: 4, name: 'PortfolioWebsite', tech: ['react', 'javascript', 'next.js'] },
    { id: 5, name: 'Spotify', tech: ['javascript'] },
    { id: 6, name: 'Findit', tech: ['rails', 'ruby', 'javascript'] },
    { id: 7, name: 'Tidder', tech: ['rails', 'javascript', 'ruby'] },
    { id: 8, name: 'NodejsChatgpt', tech: ['node.js', 'javascript'] },
    { id: 9, name: 'Tenzies', tech: ['react', 'javascript'] },
    { id: 10, name: 'OtherProjects', tech: ['react', 'javascript'] }
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
                        <button onClick={handleTechButtonClick} value="android" className={selectedTech.includes('android') ? 'selected' : ''}>Android</button>
                        <button onClick={handleTechButtonClick} value="javascript" className={selectedTech.includes('javascript') ? 'selected' : ''}>JavaScript</button>
                        <button onClick={handleTechButtonClick} value="next.js" className={selectedTech.includes('next.js') ? 'selected' : ''}>Next.js</button>
                        <button onClick={handleTechButtonClick} value="node.js" className={selectedTech.includes('node.js') ? 'selected' : ''}>Node.js</button>
                        <button onClick={handleTechButtonClick} value="rails" className={selectedTech.includes('rails') ? 'selected' : ''}>Rails</button>
                        <button onClick={handleTechButtonClick} value="react" className={selectedTech.includes('react') ? 'selected' : ''}>React</button>
                        <button onClick={handleTechButtonClick} value="react native" className={selectedTech.includes('react native') ? 'selected' : ''}>React Native</button>
                        <button onClick={handleTechButtonClick} value="ruby" className={selectedTech.includes('ruby') ? 'selected' : ''}>Ruby</button>
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