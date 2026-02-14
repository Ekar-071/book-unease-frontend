export default function Accueil() {
  return (
    <div style={styles.page}>

      {/* BARRE DU HAUT */}
      <header style={styles.header}>
        <div style={styles.logo}>BOOK UNEASE</div>
        <div style={styles.nav}>
          <button style={styles.login}>Connexion</button>
          <button style={styles.signup}>S’inscrire</button>
        </div>
      </header>

      {/* CONTENU CENTRAL */}
      <div style={styles.center}>
        <h1 style={styles.title}>Ici, votre liberté s’écrit.</h1>
        <p style={styles.subtitle}>
          Un espace pour lire, penser et créer sans limites.
        </p>
      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e6ecf5, #fdf6e3)",
    fontFamily: "'Georgia', serif",
    color: "#1e1e1e",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    letterSpacing: "2px",
  },

  nav: {
    display: "flex",
    gap: "12px",
  },

  login: {
    background: "transparent",
    border: "1px solid #1e3c72",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#1e3c72",
  },

  signup: {
    background: "#1e3c72",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  center: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },

  title: {
    fontSize: "2.6rem",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.8,
  },
};
