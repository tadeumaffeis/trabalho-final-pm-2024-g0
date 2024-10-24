// src/Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch("https://seu-endereco-de-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Erro na autenticação");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
      // Aqui você pode armazenar o token ou redirecionar o usuário
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 align="center">Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={styles.elements}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.elements}>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    marginTop: "100px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  elements: {
    padding: "20px 20px 20px 20px",
  },
  input: {
    width: "100%",
    padding: "10px 10px 10px 10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};

export default Login;
