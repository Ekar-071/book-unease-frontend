import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MesLivres() {
  const [livres, setLivres] = useState([]);
  const [chargement, setChargement] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/livres")
      .then(res => res.json())
      .then(data => {
        setLivres(data);
        setChargement(false);
      })
      .catch(err => {
        console.error(err);
        setChargement(false);
      });
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Mes Livres</h1>
      <p style={styles.subtitle}>Vos œuvres issues du backend.</p>

      {chargement ? (
        <p>Chargement...</p>
      ) : (
        <div style={styles.grid}>
          {livres.length === 0 ? (
            <p>Aucun livre trouvé.</p>
          ) : (
            livres.map((livre) => (
              <div
                key={livre.id}
                style={styles.card}
                onClick={() => navigate("/lecture/" + livre.id)}
              >
                <div style={styles.image}>📖</div>
                <h3>{livre.titre}</h3>
                <p>{livre.type || "Livre"}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #fdf6e3, #eef3ff)",
    fontFamily: "Georgia, serif",
    color: "#1e1e1e",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "30px",
    opacity: 0.7,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    textAlign: "center",
  },

  image: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
};
