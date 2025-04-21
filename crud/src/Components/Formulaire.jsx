import React, { useState, useEffect } from "react";
import "../App.css";

const Formulaire = ({ ajouterUtilisateur, utilisateurEdit }) => {
  const [utilisateur, setUtilisateur] = useState({
    Prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });

  useEffect(() => {
    if (utilisateurEdit) {
      setUtilisateur(utilisateurEdit);
    }
  }, [utilisateurEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur({
      ...utilisateur,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterUtilisateur(utilisateur);
    setUtilisateur({ Prenom: "", nom: "", email: "", telephone: "" });
    document.querySelector("#Formulaire .btn-close").click();
  };

  return (
    <form className="row p-0" onSubmit={handleSubmit}>
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
          type="text"
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
        <button type="submit" className="btn btn-primary w-100">
          {utilisateurEdit ? "Modifier" : "Ajouter"}
        </button>
      </div>
    </form>
  );
};

export default Formulaire;
