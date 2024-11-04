import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        ></Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
