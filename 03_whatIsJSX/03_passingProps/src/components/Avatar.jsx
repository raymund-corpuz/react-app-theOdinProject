export default function Avatar({ imageURL, name }) {
  return (
    <div>
      <h1>Avatar</h1>
      <img src={imageURL} alt={name} />
      <p>Name: {name}</p>
    </div>
  );
}
