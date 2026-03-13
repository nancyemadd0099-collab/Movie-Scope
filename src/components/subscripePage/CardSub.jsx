import './CardSub.css'

function CardSub(props) {
    return (
        <>
            <div className='card-sub'>
                <div className="content-card">
                    <h1>{props.title }</h1>
                    <p>{props.desc}</p>
                </div>
                <div className="price-card">
                    <p><span>${props.price }</span>/month</p>
                </div>
                <div className="buttons-card">
                    <button>Start Free Trial</button>
                    <button>Choose Plan</button>
                </div>
            </div>
        </>
    )
}

export default CardSub;