import React, { useState } from "react";
import Wrapper from "./components/wrapper/Wrapper";
import { guidToSeed } from "./util/guidToSeed";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [guid, setGuid] = useState("");
  const appStyles = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as "column",
    fontSize: "18px",
    color: "#666",
  };

  const buttonStyles = {
    background: "none",
    border: "3px solid #666",
    padding: "5px 10px",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <div className="App" style={appStyles}>
      <p>
        <code>{guid || "Trade a guid for a slice..."}</code>
      </p>
      {guid && <Wrapper {...guidToSeed(guid)} />}
      <p>
        <button style={buttonStyles} onClick={() => setGuid(uuidv4())}>
          Guid me a slice
        </button>
      </p>
    </div>
  );
}

export default App;
