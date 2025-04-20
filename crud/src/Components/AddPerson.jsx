import React from "react";
import Formulaire from "./Formulaire";

const AddPerson = ({ ajouterUtilisateur }) => {
  return (
    <div className="p-1 col-6">
      <button
        type="button"
        className="btn btn-success w-100 py-2 rounded-1"
        data-bs-toggle="modal"
        data-bs-target="#Formulaire"
      >
        Ajouter une personne
      </button>

      <div
        className="modal fade"
        id="Formulaire"
        tabIndex="-1"
        aria-labelledby="FormulaireLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="FormulaireLabel">
                Remplir le formulaire
              </h2>
            </div>
            <div className="modal-body">
              <Formulaire ajouterUtilisateur={ajouterUtilisateur} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
