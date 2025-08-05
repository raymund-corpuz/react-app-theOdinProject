import React, { useState } from "react";

const IncreaseAge = () => {
  const [person, setPerson] = useState({ name: "Jane", age: 25 });

  function handleIncreaseAge() {
    setPerson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  }
  return (
    <div>
      <h1>IncreaseAge Component</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>
  );
};

export default IncreaseAge;
