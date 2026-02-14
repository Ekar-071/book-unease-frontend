import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Inscription:\nUsername: ${username}\nEmail: ${email}\nMot de passe: ${password}`);
    // Ici plus tard on fera appel au backend
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Inscription</h1>
      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4a90e2",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
