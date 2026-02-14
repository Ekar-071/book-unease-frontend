import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ton logo ici

export default function TableauDeBord() {
  const livres = [
    { id: 1, titre: "Le grand bêtisier du bac camerounais", type: "Livre", extrait: "Découvrez les anecdotes les plus drôles..." },
    { id: 2, titre: "Quand l’opposition devient suspecte", type: "Essai", extrait: "Le mal profond des démocraties africaines..." },
    { id: 3, titre: "Le retour de Zepé", type: "Manga", extrait: "Le fils du diable revient dans une aventure..." },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "linear-gradient(135deg, #4A90E2 0%, #F5E9DA 100%)", // bleu profond → crème
      color: "#1c1c1c",
      fontFamily: "'Georgia', serif"
    }}>
      {/* Header avec logo et phrase */}
      <header style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#fff",
          textShadow: "1px 1px 4px #333"
        }}>
          Ici votre liberté s'écrit
        </h1>
      </header>

      {/* Navigation vers pages internes */}
      <nav style={{ marginBottom: "30px", display: "flex", gap: "20px" }}>
        <Link to="/mes-livres" style={navLinkStyle}>Mes Livres</Link>
        <Link to="/livres-en-cours" style={navLinkStyle}>Livres en cours</Link>
        <Link to="/galerie" style={navLinkStyle}>Galerie</Link>
        <Link to="/profil" style={navLinkStyle}>Profil</Link>
      </nav>

      {/* Liste des livres */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {livres.map((livre) => (
          <div key={livre.id} style={cardStyle}>
            <h2>{livre.titre}</h2>
            <p style={{ fontStyle: "italic", marginBottom: "10px", color: "#333" }}>{livre.type}</p>
            <p>{livre.extrait}</p>
            <button style={buttonStyle}>Voir plus</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles réutilisables
const navLinkStyle = {
  color: "#1c1c1c",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "6px 12px",
  borderRadius: "6px",
  backgroundColor: "rgba(255,255,255,0.6)",
  transition: "all 0.3s",
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.8)",
  padding: "20px",
  borderRadius: "12px",
  width: "300px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  backdropFilter: "blur(6px)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#4A90E2",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};
