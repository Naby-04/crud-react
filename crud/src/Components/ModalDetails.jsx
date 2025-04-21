import React from "react";

const ModalDetails = ({ utilisateur, onClose }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-light w-50 mx-auto">
          <div className="modal-header">
            <h5 className="modal-title">Détails de l'utilisateur</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Prénom :</strong> {utilisateur.Prenom}
            </p>
            <p>
              <strong>Nom :</strong> {utilisateur.nom}
            </p>
            <p>
              <strong>Email :</strong> {utilisateur.email}
            </p>
            <p>
              <strong>Téléphone :</strong> {utilisateur.telephone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
