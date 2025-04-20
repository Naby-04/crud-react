import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import AddPerson from "./Components/AddPerson.jsx";
import TableauPersons from "./Components/TableauPersons.jsx";

function App() {
  // Charger les utilisateurs depuis le localStorage au début
  const [utilisateurs, setUtilisateurs] = useState(() => {
    const data = localStorage.getItem("utilisateurs");
    return data ? JSON.parse(data) : [];
  });

  // Sauvegarder automatiquement dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  }, [utilisateurs]);

  const ajouterUtilisateur = (nouvelUtilisateur) => {
    setUtilisateurs([...utilisateurs, nouvelUtilisateur]);
  };

  return (
    <div className="container-fluid p-3">
      <h1 className="text-light text-center my-3">CRUD REACT</h1>
      <div className="row">
        <Searchbar />
        <AddPerson ajouterUtilisateur={ajouterUtilisateur} />
      </div>
      <TableauPersons utilisateurs={utilisateurs} />
    </div>
  );
}

export default App;
