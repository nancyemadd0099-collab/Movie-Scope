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
                                    <label htmlFor="name">First Name</label>
                                    <input type="text" name='name' placeholder='Enter First Name' required />
                                </div>
                                <div className="container-form">
                                    <label htmlFor="name">Last Name</label>
                                    <input type="text" name='name' placeholder='Enter Last Name' required />
                                </div>
                            </div>
                            <div className="item-form">
                                <div className="container-form">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name='email' placeholder='Enter Your Email' required />
                                </div>
                                <div className="container-form">
                                    <label htmlFor="number">Phone Number</label>
                                    <input
                                        type="tel"
                                        name='number'
                                        placeholder='Enter Phone Number'
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
                                        }}
                                        required />
                                </div>
                            </div>
                            <div className="item-form">
                                <div className="textarea-form">
                                    <label htmlFor="text">Message</label>
                                    <textarea placeholder="Enter Your Message"></textarea>
                                </div>
                            </div>
                            <div className="item-form">
                                <div className="check-form">
                                    <label htmlFor="text" className='checkbox-container'>
                                        <input className='checkbox' type="checkbox" name='checkbox' required />
                                        <span className='custom-check'></span>
                                        I agree with Terms of Use and Privacy Policy
                                    </label>
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