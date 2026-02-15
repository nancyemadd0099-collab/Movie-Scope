import './Home.css'
import GenreCard from './GenreCard'
import DeviceSupport from './homeContent/DeviceSupport';
import Questions from './homeContent/Questions';
import Promo from './homeContent/Promo';
import { useRef, useState } from 'react';

function Home() {
    const genres = [
        { title: "Action", id: 28 },
        { title: "Adventure", id: 12 },
        { title: "Comedy", id: 35 },
        { title: "Drama", id: 18 },
        { title: "Horror", id: 27 },
        { title: "Romance", id: 10749 },
        { title: "Sci-Fi", id: 878 },
        { title: "Thriller", id: 53 },
        { title: "Animation", id: 16 },
        { title: "Fantasy", id: 14 },
        { title: "Crime", id: 80 },
        { title: "History", id: 36 },
        { title: "Documentary", id: 99 },
        { title: "Family", id: 10751 },
        { title: "War", id: 10752 },
    ]
    const cardsPerSlide = 5;
    const maxIndex = Math.ceil(genres.length / cardsPerSlide);

    const [index, setIndex] = useState(0);
    const startX = useRef(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % maxIndex);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX.current - endX > 50) next();
        if (endX - startX.current > 50) prev();
    };

    return (
        <>
            <section
                id='home-section'
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="categories-section">
                    <div className="categories">

                        <div className="categories-header">
                            <p>Explore our wide variety of categories</p>
                            <p>
                                Whether you're looking for a comedy to make you laugh,
                                a drama to make you think, or a documentary to learn something new
                            </p>
                        </div>

                        <div className="categories-arrows">
                            <button onClick={prev}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>

                            <div className="indicator">
                                {Array.from({ length: maxIndex }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${i === index ? 'active' : ''}`}
                                        onClick={() => setIndex(i)}
                                    ></span>
                                ))}
                            </div>

                            <button onClick={next}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>

                    <div className="categories-grid-wrapper">
                        <div
                            className="categories-grid"
                            style={{
                                transform: `translateX(calc(-${index} * (100% + 20px)))`
                            }}
                        >
                            {genres.map((genre) => (
                                <GenreCard
                                    key={genre.id}
                                    title={genre.title}
                                    genreId={genre.id}
                                />
                            ))}
                        </div>
                    </div>

                </div>

                <div className="device-support-section">
                    <DeviceSupport />
                </div>

                <div className="questions-section">
                    <Questions />
                </div>

                <div className="promo-section">
                    <Promo />
                </div>
            </section>
        </>
    );
}

export default Home;