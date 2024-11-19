import { useState } from "react";
import "./App.css";
import PrimaryButton from "./components/atoms/PrimaryButton";
import CardForm from "./components/molecules/CardForm";
import CardList from "./components/CardList/CardList";

function App() {
  const [count, setCount] = useState<number | null>(null);

  function handleIncreaseCount() {
    console.log("Hello from handleIncreaseCount");

    //Staticly updating a state value
    // setCount(3);

    // This will work
    // setCount(count + 1);

    // This is the best practice,
    // when working with values that rely on the previous/current value
    setCount((previousValue) => {
      if (previousValue == null) {
        return 1;
      } else {
        return previousValue + 1;
      }
    });
  }

  const handleLoginClick = () => {
    alert("Hello from Login button");
  };

  const handleCreateNew = () => {
    alert("Hello from Create new");
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
      <PrimaryButton buttonText="Create new" onClick={handleCreateNew} />
      <CardForm />
      <CardList />
    </>
  );
}

export default App;
