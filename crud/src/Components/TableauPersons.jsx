import React from "react";

const TableauPersons = ({
  utilisateurs,
  supprimerUtilisateur,
  voirUtilisateur,
  modifierUtilisateur,
}) => {
  return (
    <div className="mt-2">
      <h2>Utilisateurs</h2>
      <div className="user-part">
        <table className="affichage_tableau mt-3">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((user, index) => (
              <tr key={index}>
                <td>{user.Prenom}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => voirUtilisateur(user)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#Formulaire"
                    onClick={() => modifierUtilisateur(index)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => supprimerUtilisateur(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableauPersons;
