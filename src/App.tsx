import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Beijing", "New York", "London"];

  return (
    <>
      <ListGroup heading="ListGroup" items={items} />
    </>
  );
}

export default App;
