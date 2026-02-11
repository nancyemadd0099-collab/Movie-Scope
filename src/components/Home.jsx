import './Home.css'
import GenreCard from './GenreCard'
import DeviceSupport from './homeContent/DeviceSupport';
import Questions from './homeContent/Questions';
import Promo from './homeContent/Promo';

function Home() {

    return (
        <>
            <section id='home-section'>
                <div className="categories-section">
                    <div className="categories-header">
                        <p>Explore our wide variety of categories</p>
                        <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                    <div className="categories-grid">
                        <GenreCard title="Action" genreId={28} />
                        <GenreCard title="Adventure" genreId={12} />
                        <GenreCard title="Comedy" genreId={35} />
                        <GenreCard title="Drama" genreId={18} />
                        <GenreCard title="Horror" genreId={27} />
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
    )
}

export default Home;
