export default function FormatDate() {
  const today = new Date();
  console.log(today);

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return (
    <div>
      <h1>Todo List for {formatDate(today)}</h1>
    </div>
  );
}
