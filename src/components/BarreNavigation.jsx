import { Link } from "react-router-dom";

export default function BarreNavigation() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1a1a1a",
        color: "#f5f5f5",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Logo + Titre */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png" // tu peux remplacer par ton logo
          alt="Logo Book Unease"
          style={{ height: "50px", marginRight: "15px" }}
        />
        <h1 style={{ fontFamily: "'Merriweather', serif", margin: 0 }}>
          Book Unease
        </h1>
      </div>

      {/* Onglets */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Accueil
        </Link>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#4a90e2",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
}
