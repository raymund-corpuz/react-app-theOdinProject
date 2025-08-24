export default function Card() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
    avatar: "https://i.pravatar.cc/100",
  };
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img src={person.avatar} alt={person.name} />

      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
