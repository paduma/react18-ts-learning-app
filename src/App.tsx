import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Beijing", "New York", "London"];
  return (
    <>
      <ListGroup items={items} heading="ListGroup" onSelectItems={() => {}} />
    </>
  );
}

export default App;
