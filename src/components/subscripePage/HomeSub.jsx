
import { useState } from 'react';
import CardSub from './CardSub';
import './HomeSub.css'
import PricingTable from './PricingTable';
import Promo from '../homeContent/Promo';

function HomeSub() {

    const [plan, setPlan] = useState("month")
    const [animate, setAnimate] = useState(false)
    const changePlan = (type) => {
        setAnimate(true)

        setTimeout(() => {
            setPlan(type)
            setAnimate(false)
        }, 500)
    }

    return (
        <>
            <section className='home-sub'>
                <div className="hero-sub">
                    <div className="header-sub">
                        <div>
                            <h1>Choose the plan that's right for you</h1>
                        </div>
                        <div>
                            <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                            <div className='btns-header'>
                                <button
                                    className={plan === "month" ? "active" : ""}
                                    onClick={() => changePlan("month")}>Monthly</button>
                                <button
                                    className={plan === "year" ? "active" : ""}
                                    onClick={() => changePlan("year")}>Yearly</button>
                            </div>
                        </div>
                    </div>
                    <div className={`cards-sub ${animate ? "animate" : ""}`}>
                        <CardSub
                            title="Basic Plan"
                            desc="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
                            price={plan === "month" ? "9.99" : "99.99"} />
                        <CardSub
                            title="Standard Plan"
                            desc="Access to a wider selection of movies and shows, including most new releases and exclusive content"
                            price={plan === "month" ? "12.99" : "129.99"} />
                        <CardSub
                            title="Premium Plan"
                            desc="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
                            price={plan === "month" ? "14.99" : "149.99"} />
                    </div>
                </div>

                <div className="sub-container">
                    <div className="header-container">
                        <h1>Compare our plans and find the right one for you</h1>
                        <p>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                    </div>
                    <PricingTable />
                </div>

                <Promo />
            </section>
        </>
    )
}

export default HomeSub;
