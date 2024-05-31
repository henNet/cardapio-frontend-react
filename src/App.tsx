import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Modal from "./components/modal/Modal";
import useFoodData from "./hooks/UseFoodData";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Cardápio de Comidas</h1>
        {isModalOpen && (
          <Modal
            typeModal="POST"
            _id={0}
            _title=""
            _price={0}
            _image=""
            closeModal={handleModal}
          />
        )}
        <div>
          <button className="btn-novo" onClick={handleModal}>
            Nova Comida
          </button>
        </div>
      </div>
      {/* <hr /> */}
      <div className="card-grid">
        {data?.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            image={data.image}
            closeModal={handleModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
