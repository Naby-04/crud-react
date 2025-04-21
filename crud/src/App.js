import React, { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import AddPerson from "./Components/AddPerson";
import TableauPersons from "./Components/TableauPersons";
import ModalDetails from "./Components/ModalDetails";

function App() {
  const [utilisateurs, setUtilisateurs] = useState(() => {
    const donneesStockees = localStorage.getItem("utilisateurs");
    return donneesStockees ? JSON.parse(donneesStockees) : [];
  });

  const [utilisateurRecherche, setUtilisateurRecherche] = useState("");
  const [utilisateurSelectionne, setUtilisateurSelectionne] = useState(null);
  const [utilisateurEditIndex, setUtilisateurEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  }, [utilisateurs]);

  const ajouterUtilisateur = (utilisateur) => {
    if (utilisateurEditIndex !== null) {
      const copie = [...utilisateurs];
      copie[utilisateurEditIndex] = utilisateur;
      setUtilisateurs(copie);
      setUtilisateurEditIndex(null);
    } else {
      setUtilisateurs([...utilisateurs, utilisateur]);
    }
  };

  const supprimerUtilisateur = (index) => {
    const copie = [...utilisateurs];
    copie.splice(index, 1);
    setUtilisateurs(copie);
  };

  const modifierUtilisateur = (index) => {
    setUtilisateurEditIndex(index);
  };

  const utilisateursFiltres = utilisateurs.filter((u) =>
    `${u.Prenom} ${u.nom}`
      .toLowerCase()
      .includes(utilisateurRecherche.toLowerCase())
  );

  return (
    <div className="container-fluid p-3">
      <h1 className="text-light text-center my-3">CRUD REACT</h1>

      <div className={utilisateurSelectionne ? "blur-background" : ""}>
        <div className="row">
          <Searchbar setRecherche={setUtilisateurRecherche} />
          <AddPerson
            ajouterUtilisateur={ajouterUtilisateur}
            utilisateurEdit={
              utilisateurEditIndex !== null
                ? utilisateurs[utilisateurEditIndex]
                : null
            }
          />
        </div>

        <TableauPersons
          utilisateurs={utilisateursFiltres}
          supprimerUtilisateur={supprimerUtilisateur}
          voirUtilisateur={setUtilisateurSelectionne}
          modifierUtilisateur={modifierUtilisateur}
        />
      </div>

      {utilisateurSelectionne && (
        <ModalDetails
          utilisateur={utilisateurSelectionne}
          onClose={() => setUtilisateurSelectionne(null)}
        />
      )}
    </div>
  );
}

export default App;
