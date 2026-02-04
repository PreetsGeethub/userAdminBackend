import { useState } from "react";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {token ? (
        <Dashboard token={token} setToken={setToken} />
      ) : (
        <AuthForm setToken={setToken} />
      )}
    </>
  );
}

export default App;
