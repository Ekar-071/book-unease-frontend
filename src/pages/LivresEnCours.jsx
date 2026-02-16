import { useEffect, useState } from "react";

export default function LivresEnCours() {
  const [livres, setLivres] = useState([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    fetch("https://book-unease-backend-urps.onrender.com/api/livres")
      .then((res) => res.json())
      .then((data) => {
        setLivres(data);
      })
      .catch(() => {
        setErreur("Impossible de charger les livres");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Livres en cours</h1>
      <p>Vos œuvres actives issues du backend.</p>

      {erreur && <p>{erreur}</p>}

      {livres.length === 0 ? (
        <p>Aucun livre trouvé dans le backend.</p>
      ) : (
        <div>
          {livres.map((livre) => (
            <div
              key={livre.id}
              style={{
                background: "#ffffff",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{livre.titre}</h3>
              <p>Type : {livre.type}</p>
              <p>{livre.contenu}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
