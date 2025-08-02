import Avatar from "./Avatar";

export default function Gallery() {
  const persons = [
    {
      name: "Maria Sklodowska",
      profession: "Physicist and Chemist",
      awards: "Nobel Chemist",
      image: "https://i.pravatar.cc/100",
    },
    {
      name: "Katsuo Saruhashi",
      profession: "Physicist and Chemist",
      awards: "Nobel Chemist",
      image: "https://i.pravatar.cc/100",
    },
  ];
  return (
    <div>
      <h1>Notable Scientists</h1>
      {persons.map((person) => (
        <Avatar
          name={person.name}
          image={person.image}
          awards={person.awards}
          profession={person.profession}
        />
      ))}
    </div>
  );
}
