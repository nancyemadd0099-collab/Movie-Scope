import Promo from '../homeContent/Promo';
import Categories from './Categories';
import './Container.css'

function Container() {

    return (
        <>
            <section className='container-section'>
                <div className="container-content">
                    <Categories title="Our Genres" />
                    <Categories title="Popular Top 10 In Genres" />
                    <Categories title="Trending Now" />
                </div>

                <Promo/>

            </section>
        </>
    )
}

export default Container;
