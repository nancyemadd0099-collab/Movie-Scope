
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <p><span className="logo-letter">M</span>ovieScope</p>
                    </div>
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Movies & Shows</a>
                        <a href="#">Support</a>
                        <a href="#">Subscriptions</a>
                    </div>
                    <div className="nav-actions">
                        <p className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></p>
                        <button><a href="#">Login</a></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

