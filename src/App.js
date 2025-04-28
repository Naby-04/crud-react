import React, { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import AddPerson from "./Components/AddPerson";
import TableauPersons from "./Components/TableauPersons";
import ModalDetails from "./Components/ModalDetails";
import { ToastSuccess } from "./Components/Toast.jsx";

function App() {
  const [utilisateurs, setUtilisateurs] = useState(() => {
    const donneesStockees = localStorage.getItem("utilisateurs");
    return donneesStockees ? JSON.parse(donneesStockees) : [];
  });

  const [utilisateurRecherche, setUtilisateurRecherche] = useState("");
  const [utilisateurSelectionne, setUtilisateurSelectionne] = useState(null);
  const [utilisateurEditIndex, setUtilisateurEditIndex] = useState(null);
  const [pageActuelle, setPageActuelle] = useState(1);
  const utilisateursParPage = 5;

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

  const bannirUtilisateur = (index) => {
    const copie = [...utilisateurs];
    copie[index].banni = !copie[index].banni;
    setUtilisateurs(copie);
  };

  const utilisateursFiltres = utilisateurs.filter((u) =>
    `${u.Prenom} ${u.nom}`
      .toLowerCase()
      .includes(utilisateurRecherche.toLowerCase())
  );

  const indexDernierUtilisateur = pageActuelle * utilisateursParPage;
  const indexPremierUtilisateur = indexDernierUtilisateur - utilisateursParPage;
  const utilisateursAffiches = utilisateursFiltres.slice(
    indexPremierUtilisateur,
    indexDernierUtilisateur
  );
  const totalPages = Math.ceil(
    utilisateursFiltres.length / utilisateursParPage
  );

  return (
    <div className="container p-3 m-4 mx-auto">
      <h1 className="text-center my-1">CRUD REACT</h1>

      <div className={utilisateurSelectionne ? "blur-background" : ""}>
        <div className="row mt-4 justify-content-around">
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
          utilisateurs={utilisateursAffiches}
          supprimerUtilisateur={supprimerUtilisateur}
          modifierUtilisateur={modifierUtilisateur}
          voirUtilisateur={setUtilisateurSelectionne}
          bannirUtilisateur={bannirUtilisateur}
          pageActuelle={pageActuelle}
          setPageActuelle={setPageActuelle}
          totalPages={totalPages}
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
