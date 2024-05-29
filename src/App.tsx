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
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      {isModalOpen && <Modal closeModal={handleModal}/>}
      <button onClick={handleModal}>Novo</button>
      {/* <hr /> */}
      <div className="card-grid">
        {data?.map((data) => (
          <Card 
            key={data.id}
            title={data.title} 
            price={data.price} 
            image={data.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
