import Homify from '@/components/Homify';
import Messagemate from '@/components/Messagemate';
import Smartbot from '@/components/Smartbot';
import Spotify from '@/components/Spotify';
import Findit from '@/components/Findit';
import Tidder from '@/components/Tidder';
import Tenzies from '@/components/Tenzies';
import OtherProjects from '@/components/OtherProjects';

export default function SectionPortfolio() {
    return (
        <div className="section">
            <div id="portfolio-content">
                <div id="portfolio-headers">
                    <h1>Portfolio</h1>
                    <p></p>
                </div>
                <div className="portfolio-cards--container">
                    <Homify />
                    <Messagemate />
                    <Smartbot />
                    <Spotify />
                    <Findit />
                    <Tidder />
                    <Tenzies />
                    <OtherProjects />
                </div>
            </div>
        </div>
    )
}