import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Lecture() {
  const { id } = useParams();
  const [livre, setLivre] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/livres")
      .then(res => res.json())
      .then(data => {
        const trouve = data.find(l => String(l.id) === String(id));
        setLivre(trouve);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!livre) {
    return <p style={{ padding: 40 }}>Chargement du livre...</p>;
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>{livre.titre}</h1>
      <p style={styles.type}>{livre.type || "Livre"}</p>

      <div style={styles.content}>
        {livre.contenu || "Contenu du livre à venir..."}
      </div>
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
    fontSize: "2.4rem",
    marginBottom: "10px",
  },

  type: {
    opacity: 0.6,
    marginBottom: "30px",
  },

  content: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    lineHeight: "1.7",
  },
};
