
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const ref = useRef()

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
            return () => window.removeEventListener('scroll', handleScroll)
        }
        nav.classList.add('scrolled')
    }, [location.pathname])

    useEffect(() => {
        const handelclick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handelclick)
        return () => {
            document.removeEventListener("click", handelclick)
        }
    }, [])

    return (
        <>
            <nav className='navbar-section'>
                <div className='navbar-group' ref={ref}>
                    <div className="logo">
                        <p><span className="logo-letter">M</span>ovieScope</p>
                    </div>
                    <div
                        className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link
                            to="/Movies"
                            className={location.pathname.startsWith('/movie') ||
                                location.pathname.startsWith("/genre") ||
                                location.pathname === "/Movies"
                                ? 'active'
                                : ''}
                            onClick={() => setMenuOpen(false)}>Movies & Shows</Link>
                        <Link to="/Support" className={location.pathname === '/Support' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Support</Link>
                        <Link to="/subscription" className={location.pathname === '/subscription' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Subscriptions</Link>
                        <hr />
                        <NavLink className={"mobile-login"} to="/register" onClick={() => setMenuOpen(false)}>
                            {({ isActive }) => (
                                <button className={`mobile-login-btn ${isActive ? "active" : ""}`}>
                                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                    Login
                                </button>
                            )}
                        </NavLink>
                    </div>

                    <div className="nav-actions">
                        <NavLink to="/register">
                            {({ isActive }) => (
                                <button className={isActive ? "active" : ""}>
                                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                    Login
                                </button>
                            )}
                        </NavLink>
                    </div>

                    {/* humburger Button */}
                    <div
                        className={`menu-btn ${menuOpen ? 'active' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(prev => !prev)
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

