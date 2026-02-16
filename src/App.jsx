import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import TableauDeBord from "./pages/TableauDeBord";
import MesLivres from "./pages/MesLivres";
import LivresEnCours from "./pages/LivresEnCours";
import Galerie from "./pages/Galerie";
import Profil from "./pages/Profil";
import Login from "./pages/Login";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  // Si c'est l'admin, on force l'ouverture sur le dashboard
  const defaultRoute = user && user.role === "admin" ? "/dashboard" : "/login";

  return (
    <Router>
      <div style={styles.navbar}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/mes-livres" style={styles.link}>Mes Livres</Link>
        <Link to="/livres-en-cours" style={styles.link}>Livres en cours</Link>
        <Link to="/galerie" style={styles.link}>Galerie</Link>
        <Link to="/profil" style={styles.link}>Profil</Link>
      </div>

      <Routes>
        <Route path="/dashboard" element={<TableauDeBord />} />
        <Route path="/mes-livres" element={<MesLivres />} />
        <Route path="/livres-en-cours" element={<LivresEnCours />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<Login />} />
        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to={defaultRoute} />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "15px",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
    fontFamily: "Georgia, serif"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
