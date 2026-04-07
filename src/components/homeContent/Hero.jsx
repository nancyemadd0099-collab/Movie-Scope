
import { useEffect } from 'react';
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {

    useEffect(() => {
        const spotlight = document.querySelector(".spotlight")

        const move = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            spotlight.style.makeImage =
                `radial-gradient(circle 620px at ${x}px ${y}px, transparent 0%, black 60%)`;

            spotlight.style.webkitMaskImage =
                `radial-gradient(circle 620px at ${x}px ${y}px, transparent 0%, black 60%)`;

        };
        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move)
    }, [])

    return (
        <>
            <section id='hero-section'>
                <div className="spotlight"></div>
                <div className="content-hero">
                    <h1>The Best <br /> Streaming Experience</h1>
                    <p>MovieScope is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With MovieScope. <br />You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                    <Link to="/Movies"><button> <i class="fa-solid fa-play"></i> Start Watching Now</button></Link>
                </div>
            </section>
        </>
    )
}

export default Hero;
