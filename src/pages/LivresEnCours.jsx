import { useEffect, useState } from "react";

export default function LivresEnCours() {
  const [livres, setLivres] = useState([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    fetch("https://book-unease-backend-urps.onrender.com/api/livres")
      .then((res) => res.json())
      .then((data) => setLivres(data))
      .catch(() => setErreur("Impossible de charger les livres"));
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Livres en cours</h1>
      <p style={styles.subtitle}>
        Vos œuvres actives issues du backend.
      </p>

      {erreur && <p>{erreur}</p>}

      {livres.length === 0 ? (
        <p style={styles.subtitle}>Aucun livre trouvé dans le backend.</p>
      ) : (
        <div style={styles.grid}>
          {livres.map((livre) => (
            <div key={livre.id} style={styles.card}>
              <h3 style={styles.bookTitle}>{livre.titre}</h3>
              <p style={styles.type}>{livre.type}</p>
              <p style={styles.contenu}>{livre.contenu}</p>
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
    fontSize: "2.4rem",
    marginBottom: "10px"
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px"
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "24px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s"
  },

  bookTitle: {
    fontSize: "1.4rem",
    marginBottom: "10px"
  },

  type: {
    opacity: 0.8,
    marginBottom: "10px"
  },

  contenu: {
    opacity: 0.7,
    lineHeight: "1.5"
  }
};
