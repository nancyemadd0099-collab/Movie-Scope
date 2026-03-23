
import { useState } from 'react';
import './PricingTable.css'

const plan = [
    {
        name: "Basic",
        price: "$9.99/Month",
        contant: "Access to a wide selection of movies and shows, including some new releases.",
        devices: "Watch on one device simultaneously",
        trail: "7 Days",
        cancel: "Yes",
        HDR: "No",
        dolby: "No",
        adfree: "No",
        offline: "No",
        family: "No"
    },
    {
        name: "Standard",
        price: "$12.99/Month",
        contant: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        devices: "Watch on Two device simultaneously",
        trail: "7 Days",
        cancel: "Yes",
        HDR: "Yes",
        dolby: "Yes",
        adfree: "Yes",
        offline: "Yes, for select titles.",
        family: "Yes, up to 5 family members."
    },
    {
        name: "Premium",
        price: "$14.99/Month",
        contant: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        devices: "Watch on Four device simultaneously",
        trail: "7 Days",
        cancel: "Yes",
        HDR: "Yes",
        dolby: "Yes",
        adfree: "Yes",
        offline: "Yes, for all titles.",
        family: "Yes, up to 6 family members."
    },
]

function PricingTable() {
    const [activePlan, setActivePlan] = useState(1)
    const planTable = plan[activePlan];
    return (
        <>
            {/* Table Desktop */}
            <div className="table-desktop">
                <table>
                    <thead>
                        <tr>
                            <th>Features</th>
                            {plan.map((plan, i) => (
                                <th key={i}>
                                    {plan.name}
                                    {plan.name === "Standard" && (
                                        <span className='popular'>Popular</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Price</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Content</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.contant}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Devices</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.devices}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Free Trail</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.trail}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Cancel Anytime</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.cancel}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>HDR</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.HDR}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Dolby Atmos</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.dolby}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Ad - Free</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.adfree}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Offline Viewing</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.offline}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Family Sharing</td>
                            {plan.map((plan, i) => (
                                <td key={i}>{plan.family}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table Mobile */}
            <div className="mobile-only">

                <div className="tabs">
                    {plan.map((item, index) => (
                        <button
                            key={index}
                            className={activePlan === index ? "active" : ""}
                            onClick={() => setActivePlan(index)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="mobile-card">
                    <div className="mobile-grid">

                        <div>
                            <span>Price</span>
                            <p>{planTable.price}</p>
                        </div>

                        <div>
                            <span>Free Trail</span>
                            <p>{planTable.trail}</p>
                        </div>

                        <div className="full">
                            <span>Content</span>
                            <p>{planTable.contant}</p>
                        </div>

                        <div className="full">
                            <span>Devices</span>
                            <p>{planTable.devices}</p>
                        </div>
                        <div>
                            <span>Cancel Anytime</span>
                            <p>{planTable.cancel}</p>
                        </div>
                        <div>
                            <span>HDR</span>
                            <p>{planTable.HDR}</p>
                        </div>
                        <div>
                            <span>Dolby Atmos</span>
                            <p>{planTable.dolby}</p>
                        </div>
                        <div>
                            <span>Ad - Free</span>
                            <p>{planTable.adfree}</p>
                        </div>
                        <div>
                            <span>Offline Viewing</span>
                            <p>{planTable.offline}</p>
                        </div>
                        <div>
                            <span>Family Sharing</span>
                            <p>{planTable.family}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PricingTable;
