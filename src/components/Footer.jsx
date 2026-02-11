import './Footer.css'

function Footer() {

    return (
        <>
            <footer id='footer'>
                <div className="footer-container">
                    <div className="footer-col">
                        <h4>Home</h4>
                        <ul>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Devices</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Movies</h4>
                        <ul>
                            <li><a href="#">Gernes</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">New Release</a></li>
                            <li><a href="#">Popular</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Shows</h4>
                        <ul>
                            <li><a href="#">Gernes</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">New Release</a></li>
                            <li><a href="#">Popular</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Subscription</h4>
                        <ul>
                            <li><a href="#">Plans</a></li>
                            <li><a href="#">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer-col social">
                        <h4>Connect With Us</h4>
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-divider"></div>

                <div className="footer-bottom">
                    <p>@2026 MovieScope, All Rights Reserved</p>
                    <p>Terms of Use <span></span> Privacy Policy <span></span> Cookie Policy</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;