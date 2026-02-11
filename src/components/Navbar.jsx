
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location= useLocation ()
    useEffect(() => {
        const nav = document.querySelector('.navbar-section')
        if (location.pathname === '/') {
            const handleScroll = () => {
                if (window.scrollY >= 150) {
                    nav.classList.add('scrolled')
                } else {
                    nav.classList.remove('scrolled')
                }
            }
            window.addEventListener('scroll', handleScroll)
            return ()=>window.removeEventListener('scroll',handleScroll)
        }
        nav.classList.add('scrolled')
    },[location.pathname])

    return (
        <>
            <nav className='navbar-section'>
                <div className="container">
                    <div className="logo">
                        <p><span className="logo-letter">M</span>ovieScope</p>
                    </div>
                    <div className="nav-links">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link to="/Movies" className={location.pathname === '/Movies' ? 'active' : ''}>Movies & Shows</Link>
                        <Link to="/Support" className={location.pathname === '/Support' ? 'active' : ''}>Support</Link>
                        <Link to="/Subscriptions" className={location.pathname === '/Subscriptions' ? 'active' : ''}>Subscriptions</Link>
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

