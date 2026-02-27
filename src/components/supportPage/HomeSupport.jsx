import Promo from '../homeContent/Promo';
import Questions from '../homeContent/Questions';
import './HomeSupport.css'

function HomeSupport() {

    return (
        <>
            <section className='home-support'>
                <div className="hero-support">
                    <div className="sub-container">
                        <h1>Welcome to our support page!</h1>
                        <p>We're here to help you with any problems you may be having with our product.</p>
                        <img src="/Sub Container.png" alt="subContainer" />
                    </div>
                    <div className="form-support">
                        <form action="#" method='POST'>
                            <div className="item-form">
                                <div className="container-form">
                                    <label for="name">First Name</label>
                                    <input type="text" name='name' placeholder='Enter First Name' required />
                                </div>
                                <div className="container-form">
                                    <label for="name">Last Name</label>
                                    <input type="text" name='name' placeholder='Enter Last Name' required />
                                </div>

                            </div>
                            <div className="item-form">
                                <div className="container-form">
                                    <label for="email">email</label>
                                    <input type="email" name='email' placeholder='Enter Your Email' required />
                                </div>
                                <div className="container-form">
                                    <label for="number">Phone Number</label>
                                    <input type="number" name='number' placeholder='Enter Phone Number' required/>
                                </div>
                            </div>

                            <div className="item-form">
                                <div className="container-form">
                                    <label for="text">Message</label>
                                    <input type="text" name='text' placeholder='Enter Your Message' required />
                                </div>
                            </div>

                            <div className="item-form">
                                <div className="check-form">
                                    <input type="checkbox" name='checkbox' required />
                                    <label for="text">I agree with Terms of Use and Privacy Policy</label>
                                </div>
                                <div className="button-form">
                                    <button>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <Questions />
                <Promo />
                
            </section>
        </>
    )
}

export default HomeSupport;