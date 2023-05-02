import { useEffect, useState } from 'react'

export default function Loader() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // loader on set time
        setTimeout(() => {
            setLoaded(true);

            const body = document.querySelector('#fullpage');
            body.classList.add('focus-in');
            }, 600 
        );
    }, [])
    

    return (
        <div className={loaded ? 'loader-container d-none' : 'loader-container'}>
            <div className="spinner"></div>
        </div>
    )
}