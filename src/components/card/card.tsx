import { useState } from "react";
import "./card.css";
import Modal from "../modal/Modal";
import ModalConfirm from "../modal/ModalConfirm";

interface CardProps {
  id: number | undefined;
  price: number;
  title: string;
  image: string;
  closeModal(): void;
}

function Card({ id, price, title, image }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModaConfirmOpen, setModaConfirmOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalConfirm = () => {
    setModaConfirmOpen(!isModaConfirmOpen);
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
        <button onClick={handleModalConfirm}>Excluir</button>
        {isModaConfirmOpen && (
          <ModalConfirm
            _id={id}
            _title={title}
            _price={price}
            _image={image}
            closeModal={handleModalConfirm}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
