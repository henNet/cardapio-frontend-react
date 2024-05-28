import "./card.css";

interface CardProps {
    price: number,
    title: string,
    image: string
}

function Card({price, title, image}: CardProps) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>Valor: <b>{price}</b></p>
        </div>
    )
}

export default Card;