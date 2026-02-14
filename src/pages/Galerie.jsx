export default function Galerie() {
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Galerie</h1>
        <p style={styles.subtitle}>
          Dessins, mangas et fragments visuels de l’imaginaire.
        </p>
  
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.imagePlaceholder}>🖋️</div>
            <h3>Le retour de Zepé</h3>
            <p>Manga</p>
          </div>
  
          <div style={styles.card}>
            <div style={styles.imagePlaceholder}>🔥</div>
            <h3>Le fils du diable</h3>
            <p>Manga</p>
          </div>
  
          <div style={styles.card}>
            <div style={styles.imagePlaceholder}>✍🏾</div>
            <h3>Esquisse libre</h3>
            <p>Illustration</p>
          </div>
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
      cursor: "pointer",
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
  