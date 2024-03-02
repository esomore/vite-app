import { useState } from "react";
import "./App.css";
import Register from "./FComponents/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="register">
        <Register />
      </div>
    </>
  );
}

export default App;
