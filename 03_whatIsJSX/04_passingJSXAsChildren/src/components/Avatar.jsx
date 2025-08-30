export default function Avatar({ name, imageURL }) {
  return (
    <div>
      <img src={imageURL} alt={name} style={{ borderRadius: "50%" }} />
      <p>Name: {name}</p>
    </div>
  );
}
