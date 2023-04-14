import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setAuthenticated: (authenticated: boolean) => void;
}

function Login(props: Props): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuthenticated } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const validUsername = import.meta.env.VITE_PRIVATE_USERNAME;
    const validPassword = import.meta.env.VITE_PRIVATE_PASSWORD;

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
      navigate("/private");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
