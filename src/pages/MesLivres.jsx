import { useEffect, useState } from "react";

export default function MesLivres() {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    fetch("https://book-unease-backend-urps.onrender.com/api/livres")
      .then((res) => res.json())
      .then((data) => setLivres(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Mes livres</h1>

      {livres.length === 0 ? (
        <p style={styles.subtitle}>Aucun livre trouvé.</p>
      ) : (
        <div style={styles.grid}>
          {livres.map((livre) => (
            <div key={livre.id} style={styles.card}>
              <h3>{livre.titre}</h3>
              <p>{livre.type}</p>
              <p style={{ opacity: 0.7 }}>{livre.contenu}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    fontFamily: "Georgia, serif"
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "30px"
  },
  subtitle: {
    opacity: 0.7
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px"
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "14px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.1)"
  }
};
