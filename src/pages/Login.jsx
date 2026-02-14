import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #1a1a1a, #333, #4b3c6a)", // fond sombre mais lumineux
        color: "#f5f5f5",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#222", // boîte sombre
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(255,255,255,0.1)", // légère lueur
          minWidth: "320px",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            textAlign: "center",
            color: "#eaeaea",
            textShadow: "1px 1px 5px rgba(255,255,255,0.3)",
          }}
        >
          Connexion
        </h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #555",
            backgroundColor: "#2a2a2a",
            color: "#f5f5f5",
            boxShadow: "0 0 5px rgba(255,255,255,0.05)",
          }}
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #555",
            backgroundColor: "#2a2a2a",
            color: "#f5f5f5",
            boxShadow: "0 0 5px rgba(255,255,255,0.05)",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#6c5ce7", // violet lumineux
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 0 15px rgba(108,92,231,0.5)", // glow discret
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#814fff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#6c5ce7")
          }
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
