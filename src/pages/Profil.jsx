export default function Profil() {
  return (
    <div style={styles.page}>
      <h1>Profil</h1>
      <p>Auteur : Ekar</p>
      <p>Œuvres publiées : 3</p>
      <p>Bio : Passionné par les histoires qui font réfléchir et sourire.</p>
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
};
