import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // 백엔드 API 호출
  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/message");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React + Express API 연동</h1>
        <button onClick={fetchMessage}>API 호출</button>
        <p>{message}</p>
      </div>
  );
}

export default App;
