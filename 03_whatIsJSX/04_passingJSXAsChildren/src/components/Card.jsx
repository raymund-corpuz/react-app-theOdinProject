import Avatar from "./Avatar";

export default function Card({ children }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "1.5rem",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
