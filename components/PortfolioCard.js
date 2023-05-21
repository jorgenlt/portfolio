export default function portfolioCards(props) {
    return (
        <div 
            className="portfolio-cards--card"
            style={{backgroundImage: `url(${props.backgroundImage})`}}
        >
            <div className='portfolio-cards--card-overlay'></div>
            <div className='portfolio-cards--card-overlay2'></div>
            <div className="portfolio-cards--card-content">
                <h2 className="portfolio-cards--card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div type="button" className="btn btn-primary" onClick={props.handleShow}>Explore</div>
            </div>
        </div>
    )
}