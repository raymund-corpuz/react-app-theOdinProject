import { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function nameInput(e) {
    setName(e.target.value);
  }
  function emailInput(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      fname: name,
      mail: email,
    };

    setData([...data, newData]);
    setName("");
    setEmail("");
  }

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <h1>Form with Multiple Inputs</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={nameInput}
          value={name}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={emailInput}
          value={email}
        />
        <input type="submit" value={"Submit"} />
      </form>

      <p>Name: {name}</p>
      <p>Email:{email}</p>

      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {item.fname} - {item.mail}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
