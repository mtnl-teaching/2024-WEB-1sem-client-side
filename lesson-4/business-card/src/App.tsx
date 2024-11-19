import "./App.css";
import PrimaryButton from "./components/atoms/PrimaryButton";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList/CardList";
import CountExample from "./components/CountExample";

function App() {
  const handleCreateNew = () => {
    alert("Hello from Create new");
  };

  return (
    <>
      <header>
        <h1>Business Card (Maybe ?)</h1>
        <PrimaryButton buttonText="onClick example" onClick={handleCreateNew} />
      </header>
      <hr></hr>
      <CountExample />
      <hr></hr>
      <CardForm />
      <hr></hr>
      <CardList />
      <hr></hr>
    </>
  );
}

export default App;
