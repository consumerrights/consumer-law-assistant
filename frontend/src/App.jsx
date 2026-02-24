import { useState, useEffect } from "react";

export default function App() {
  const [status, setStatus] = useState("connecting…");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error — is the backend running?"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>Consumer Law Assistant</h1>
      <p>
        Backend status: <strong>{status}</strong>
      </p>
    </div>
  );
}
