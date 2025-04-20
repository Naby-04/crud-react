import React, { useState } from "react";
import "../App.css";

const Formulaire = ({ ajouterUtilisateur }) => {
  // ==============================
  const [utilisateur, setUtilisateur] = useState({
    Prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });

  // Fonction pour gerer les mis à jour d'un champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur({
      ...utilisateur,
      [name]: value,
    });
  };
  // Fonction pour gerer l'envoie du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterUtilisateur(utilisateur); // pour envoyer l'objet
    setUtilisateur({
      Prenom: "",
      nom: "",
      email: "",
      telephone: "",
    });
  };

  // ==============================
  return (
    <div>
      <form
        className="row p-0"
        onSubmit={handleSubmit}
        // onAjout={ajouterUtilisateur}
      >
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            name="Prenom"
            placeholder="Prenom"
            value={utilisateur.Prenom}
            onChange={handleChange}
            required
          />
          <label className="ms-3 w-50">Prénoms</label>
        </div>
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            name="nom"
            placeholder="Nom"
            value={utilisateur.nom}
            onChange={handleChange}
            required
          />
          <label className="ms-3 w-50">Nom</label>
        </div>
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            value={utilisateur.email}
            onChange={handleChange}
            required
          />
          <label className="ms-3 w-50">Email</label>
        </div>
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="telephone"
            className="form-control"
            name="telephone"
            placeholder="#"
            value={utilisateur.telephone}
            onChange={handleChange}
            required
          />
          <label className="ms-3 w-50">Téléphone</label>
        </div>
        <div>
          <button type="submit" id="addbtn" className="w-100">
            {/* {boutton} */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
