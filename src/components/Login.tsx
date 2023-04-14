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
      <p className="text-2xl mb-5">View private posts</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-xl px-2 py-1 bg-white dark:bg-gray-700"
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-xl px-2 py-1 bg-white dark:bg-gray-700"
        />
        <br />
        <br />
        <button
          type="submit"
          className="border border-gray-300 rounded-xl px-2 py-1"
        >
          LOGIN
        </button>
      </form>
      <br />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
