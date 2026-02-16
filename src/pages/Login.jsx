import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://book-unease-backend-urps.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        setMessage("Connexion réussie ✅");

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        setMessage(data.message || "Erreur de connexion");
      }
    } catch (error) {
      setMessage("Impossible de contacter le serveur");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #1a1a1a, #333, #4b3c6a)",
        color: "#f5f5f5",
        fontFamily: "'Merriweather', serif",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#222",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(255,255,255,0.1)",
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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #555",
            backgroundColor: "#2a2a2a",
            color: "#f5f5f5",
          }}
        />

        <label>Mot de passe</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #555",
            backgroundColor: "#2a2a2a",
            color: "#f5f5f5",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#6c5ce7",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 0 15px rgba(108,92,231,0.5)",
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

        {message && (
          <p style={{ marginTop: "15px", textAlign: "center" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
