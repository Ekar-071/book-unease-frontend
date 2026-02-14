import { useEffect, useState } from "react";

export default function LivresEnCours() {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/livres")
      .then(res => res.json())
      .then(data => setLivres(data))
      .catch(() => setLivres([]));
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Livres en cours</h1>
      <p style={styles.subtitle}>
        Vos œuvres actives issues du backend.
      </p>

      <div style={styles.grid}>
        {livres.length === 0 ? (
          <p>Aucun livre trouvé dans le backend.</p>
        ) : (
          livres.map((livre) => (
            <div key={livre.id} style={styles.card}>
              <div style={styles.imagePlaceholder}>📖</div>
              <h3>{livre.titre}</h3>
              <p>{livre.type || "Livre"}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #fdf6e3, #eef3ff)",
    fontFamily: "'Georgia', serif",
    color: "#1e1e1e",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "40px",
    opacity: 0.75,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },

  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  imagePlaceholder: {
    height: "140px",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    marginBottom: "12px",
  },
};
