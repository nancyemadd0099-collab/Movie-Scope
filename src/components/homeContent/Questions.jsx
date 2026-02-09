import { useState } from 'react';
import './Questions.css'

const quesData = [
    { id: 1, q: "What is MovieScope?", a: "MovieScope is a streaming service that allows you to watch movies and shows on demand, anytime and anywhere, across multiple devices." },
    { id: 2, q: "How much does MovieScope cost?", a: "MovieScope offers flexible subscription plans designed to fit different needs. Pricing varies based on selected features, video quality, and supported devices." },
    { id: 3, q: "What content is available on MovieScope?", a: "MovieScope provides a wide range of content including movies, TV shows, series, documentaries, and exclusive originals across multiple genres." },
    { id: 4, q: "How can I watch MovieScope?", a: "You can watch MovieScope on smartphones, tablets, smart TVs, laptops, and desktops through supported browsers and applications." },
    { id: 5, q: "How do I sign up for MovieScope?", a: "Simply create an account, choose a subscription plan, and start streaming instantly from any supported device." },
    { id: 6, q: "What is the MovieScope free trial?", a: "New users can enjoy a limited free trial period to explore features, content, and streaming quality before choosing a subscription plan." },
    { id: 7, q: "How do I contact MovieScope customer support?", a: "You can contact MovieScope support through the help center, live chat, or email for quick assistance and technical support." },
    { id: 8, q: "What are the MovieScope payment methods?", a: "MovieScope supports multiple payment methods including credit cards, debit cards, digital wallets, and online payment services." }
];

function Questions() {
    const [activeId, setActiveId] = useState(1);
    return (
        <div className="questions">
            <div className="questions-header">
                <p>Frequently Asked Questions</p>
                <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about MovieScope.</p>
            </div>
            <div className="questions-grid">

                <div className="questions-col">
                    {quesData.filter((_, i) => i % 2 === 0).map((item, index) => (
                        <div key={item.id} className={`ques-item ${activeId === item.id ? "active" : ""}`}
                            onClick={() => setActiveId(item.id)}>

                            <div className="ques">
                                <span className='ques-num'>{String(index * 2 + 1).padStart(2, "0")}</span>
                                <p>{item.q}</p>
                                <span className='ques-icon'>{activeId === item.id ? "-" : "+"}</span>
                            </div>

                            {activeId === item.id && (
                                <div className="answer">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="questions-col">
                    {quesData.filter((_, i) => i % 2 !== 0).map((item, index) => (
                        <div key={item.id} className={`ques-item ${activeId === item.id ? "active" : ""}`}
                            onClick={() => setActiveId(item.id)}>

                            <div className="ques">
                                <span className='ques-num'>{String(index * 2 + 2).padStart(2, "0")}</span>
                                <p>{item.q}</p>
                                <span className='ques-icon'>{activeId === item.id ? "-" : "+"}</span>
                            </div>

                            {activeId === item.id && (
                                <div className="answer">
                                    <p>{item.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Questions;
