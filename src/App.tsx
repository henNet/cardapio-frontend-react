import "./App.css";
import Card from "./components/card/card";
import useFoodData from "./hooks/UseFoodData";

function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
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
