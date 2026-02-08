import './Home.css'
import GenreCard from './GenreCard'

function Home() {

    return (
        <>
            <section className='Home-section'>

                <div className="categories">
                    <div className="categories-header">
                        <p>Explore our wide variety of categories</p>
                        <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>

                    <div className="categories-section">
                        <div className="categories-grid">
                            <GenreCard title="Action" genreId={28} />
                            <GenreCard title="Adventure" genreId={12} />
                            <GenreCard title="Comedy" genreId={35} />
                            <GenreCard title="Drama" genreId={18} />
                            <GenreCard title="Horror" genreId={27} />
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Home;
