export default function CarteLivre({ titre, auteur, description }) {
    return (
      <div style={{
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        background: "#1a1a1a",
        color: "#fff",
        width: "250px"
      }}>
        <h3>{titre}</h3>
        <p><strong>Auteur:</strong> {auteur}</p>
        <p>{description}</p>
      </div>
    );
  }
  