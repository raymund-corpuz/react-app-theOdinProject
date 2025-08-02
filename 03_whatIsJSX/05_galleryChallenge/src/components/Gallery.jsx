import Avatar from "./Avatar";
import { persons } from "./data.js";

export default function Gallery() {
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
