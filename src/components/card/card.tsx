import { useState } from "react";
import "./card.css";
import Modal from "../modal/Modal";

interface CardProps {
  id: number | undefined;
  price: number;
  title: string;
  image: string;
  closeModal(): void;
}

function Card({id, price, title, image, closeModal }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>
        Valor: <b>{price}</b>
      </p>
      <div className="card-action">
        <button onClick={handleModal}>Editar</button>
        {isModalOpen && (
          <Modal
            typeModal="PUT"
            _id={id}
            _title={title}
            _price={price}
            _image={image}
            closeModal={handleModal}
          />
        )}
        <button>Excluir</button>
      </div>
    </div>
  );
}

export default Card;
