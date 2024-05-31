import { useEffect, useState } from "react";
import useFoodDataMutate from "../../hooks/UseFoodMutate";
import FoodData from "../../interface/FoodData";
import "./Modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

function Input({ label, value, updateValue }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </>
  );
}

interface ModalProps {
  typeModal: string;
  _id: number | undefined;
  _price: number;
  _title: string;
  _image: string;
  closeModal(): void;
}

function Modal({
  typeModal,
  _id,
  _title,
  _price,
  _image,
  closeModal,
}: ModalProps) {
  const id = _id;
  const [title, setTitle] = useState(_title);
  const [price, setPrice] = useState(_price);
  const [image, setImage] = useState(_image);
  let method = "POST";
  typeModal === "POST"? method = "POST": method = "PUT";
  
  const { mutate, isSuccess } = useFoodDataMutate(method);

  const submitClick = () => {
    const foodData: FoodData = {
      title,
      image,
      price,
    };
    mutate(foodData);
  };

  const updateClick = () => {
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
        {typeModal == "POST" ? (
          <h2>Cadastre uma nova comida:</h2>
        ) : (
          <h2>Atualizar uma comida:</h2>
        )}
        <form action="" className="input-container">
          <Input label="Title" value={title} updateValue={setTitle} />
          <Input label="Price" value={price} updateValue={setPrice} />
          <Input label="Image" value={image} updateValue={setImage} />
        </form>
        <div className="modal-body-actions">
          {typeModal == "POST" ? (
            <button onClick={submitClick} className="btn-secondary">
              Enviar
            </button>
          ) : (
            <button onClick={updateClick} className="btn-secondary">
              Atualizar
            </button>
          )}
          <button onClick={closeModal} className="btn-secondary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
