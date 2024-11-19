import { useState } from "react";
import PrimaryButton from "../../atoms/PrimaryButton";

function CountExample() {
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

  return (
    <div>
      <h1>Count: {count}</h1>
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
      <PrimaryButton buttonText="Increase by 1" onClick={handleIncreaseCount} />
    </div>
  );
}

export default CountExample;
