import { useEffect, useState } from "react";
import useFoodDataMutate from "../../hooks/UseFoodMutate";
import FoodData from "../../interface/FoodData";
import "./Modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

function Input({label, value, updateValue}: InputProps){
    return (
        <>
            <label>{label}</label>
            <input 
                value={value} 
                onChange={event => updateValue(event.target.value)}/>
        </>
    )
}

interface ModalProps {
    closeModal(): void
}

function Modal({closeModal}: ModalProps){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            image,
            price
        }
        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return;
        closeModal();

    }, [isSuccess]);

    return (
    <div className="modal-overlay">
        <div className="modal-body">
            <h2>Cadastre uma nova comida:</h2>
            <form action="" className="input-container">
                <Input label="title" value={title} updateValue={setTitle}/>
                <Input label="Price" value={price} updateValue={setPrice}/>
                <Input label="Image" value={image} updateValue={setImage}/>
            </form>
            <button onClick={submit} className="btn-secondary">Enviar</button>
        </div>
    </div>
    );
}

export default Modal;