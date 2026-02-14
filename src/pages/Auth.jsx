import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"; // chemin vers ton logo

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // redirection vers dashboard après login/signup
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a, #3b2a6a, #2a2a2a)",
        color: "#fff",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <img src={Logo} alt="Logo" style={{ width: "120px", filter: "drop-shadow(0 0 10px #b084ff)" }} />

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#2a2a2a",
          width: "300px",
        }}
      >
        {!showLogin && (
          <>
            <label>Nom d'utilisateur</label>
            <input type="text" placeholder="Votre pseudo" required />
          </>
        )}

        <label>Email</label>
        <input type="email" placeholder="Votre email" required />

        <label>Mot de passe</label>
        <input type="password" placeholder="Votre mot de passe" required />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#6c5ce7",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {showLogin ? "Se connecter" : "S'inscrire"}
        </button>

        {/* Bascule Login/Signup */}
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#ccc" }}>
          {showLogin ? (
            <>Pas de compte ? <button type="button" onClick={() => setShowLogin(false)}>Inscrivez-vous</button></>
          ) : (
            <>Déjà un compte ? <button type="button" onClick={() => setShowLogin(true)}>Se connecter</button></>
          )}
        </p>
      </form>
    </div>
  );
}
