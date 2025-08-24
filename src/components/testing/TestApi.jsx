import { useEffect, useState } from "react";

function TestApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello") // backend ka route
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#f3f3f3", margin: "20px" }}>
      <h2>Backend Test</h2>
      <p>{message}</p>
    </div>
  );
}

export default TestApi;
