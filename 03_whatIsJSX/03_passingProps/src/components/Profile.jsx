import Avatar from "./Avatar";

export default function Profile() {
  const person = {
    name: "Gregorio Y. Zara",
    imageUrl: "https://i.pravatar.cc/100",
  };
  return (
    <div>
      <h1>Profile</h1>
      <Avatar imageURL={person.imageUrl} name={person.name} />
      <Avatar imageURL={person.imageUrl} name={person.name} />
    </div>
  );
}
