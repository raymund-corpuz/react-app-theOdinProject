export default function Avatar({ name, image, profession, awards }) {
  console.log();
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <ul>
        <li>{profession}</li>
        <li>{awards}</li>
      </ul>
    </div>
  );
}
