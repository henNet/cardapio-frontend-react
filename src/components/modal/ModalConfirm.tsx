import { useEffect } from "react";
import useFoodDataMutate from "../../hooks/UseFoodMutate";
import FoodData from "../../interface/FoodData";
import "./Modal.css";

interface ModalProps {
  _id: number | undefined;
  _price: number;
  _title: string;
  _image: string;
  closeModal(): void;
}

function ModalConfirm({ _id, _title, _image, _price, closeModal }: ModalProps) {
  const id = _id;
  const title = _title;
  const image = _image;
  const price = _price;
    const { mutate, isSuccess } = useFoodDataMutate("DELETE");

  const deleteClick = () => {
    const foodData: FoodData = {
      id,
      title,
      image,
      price,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Deseja deletar esta comida?</h2>

        <div className="card-delete">
          <div>
            <img src={_image} alt="" />
          </div>
          <div className="card-description-price">
            <label>
              <b>Descrição:</b> {_title}
            </label>
            <label>
              <b>Preço:</b> {_price}
            </label>
          </div>
        </div>

        <div className="modal-body-actions">
          <button onClick={deleteClick} className="btn-secondary">
            Deletar
          </button>
          <button onClick={closeModal} className="btn-secondary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;
