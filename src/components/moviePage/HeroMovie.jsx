import { useEffect, useRef, useState } from 'react'
import './HeroMovie.css'

const heroData = [
    {
        title: "Avengers: Endgame",
        desc: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
        image: "/poster(1).jpg"
    },
    {
        title: "Interstellar",
        desc: "As Earth becomes increasingly uninhabitable, a group of explorers travel through a mysterious wormhole in space in search of a new home for humanity, facing the boundaries of time, space, love, and sacrifice in a mission that will decide the future of mankind.",
        image: "/poster(2).jpg"
    },
    {
        title: "Inception",
        desc: "A highly skilled thief who specializes in stealing secrets from deep within the subconscious is offered a chance at redemption by performing the impossible task of planting an idea into a target’s mind, blurring the line between reality and dreams.",
        image: "/poster(3).jpg"
    }
]
function HeroMovie() {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)
    const startX = useRef(0)

    const next = () => {
        setIndex((prev) => (prev + 1) % heroData.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + heroData.length) % heroData.length)
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            next()
        }, 2000)

        return () => clearTimeout(timeoutRef.current)
    }, [index])

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX
        if (startX.current - endX > 50) next()
        if (endX - startX.current > 50) prev()
    }

    return (
        <section
            className="hero"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {heroData.map((item, i) => (
                <div
                    key={i}
                    className={`hero-slide ${i === index ? 'active' : ''}`}
                >
                    <img src={item.image} alt={item.title} />

                    <div className="overlay"></div>

                    <div className="hero-content">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <button className="play-btn"><i class="fa-solid fa-play"></i>Play Now</button>
                    </div>
                </div>
            ))}

            <div className="group">
                <button className="arrow left" onClick={prev}><i class="fa-solid fa-arrow-left"></i></button>
                <div className="indicators">
                {heroData.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
                    </div>
                <button className="arrow right" onClick={next}><i class="fa-solid fa-arrow-right"></i></button>

            </div>
        </section>
    )
}

export default HeroMovie
