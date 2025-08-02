import Avatar from "./components/Avatar";
import Card from "./components/Card";

export default function App() {
  const person = {
    name: "Gregorio Y.Zara",
    imageURL: "https://i.pravatar.cc/100",
  };
  return (
    <div>
      <Card>
        <Avatar {...person} />
      </Card>
    </div>
  );
}
