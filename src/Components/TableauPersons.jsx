import React from "react";

const TableauPersons = ({
  utilisateurs,
  supprimerUtilisateur,
  voirUtilisateur,
  modifierUtilisateur,
  bannirUtilisateur,
  pageActuelle,
  setPageActuelle,
  totalPages,
}) => {
  return (
    <div className="mt-4">
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
              <tr
                key={index}
                className={user.banni ? "table-danger opacity-50" : ""}
              >
                <td>{user.Prenom}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <button
                    disabled={user.banni}
                    className="btn btn-primary me-2"
                    onClick={() => voirUtilisateur(user)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    disabled={user.banni}
                    className="btn btn-warning me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#Formulaire"
                    onClick={() =>
                      modifierUtilisateur(index + (pageActuelle - 1) * 5)
                    }
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    disabled={user.banni}
                    className="btn btn-danger me-2"
                    onClick={() =>
                      supprimerUtilisateur(index + (pageActuelle - 1) * 5)
                    }
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="btn bg-dark text-light me-2"
                    onClick={() =>
                      bannirUtilisateur(index + (pageActuelle - 1) * 5)
                    }
                  >
                    {user.banni ? (
                      <i className="fa-solid fa-unlock"></i>
                    ) : (
                      <i className="fa-solid fa-ban"></i>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-primary me-2"
            disabled={pageActuelle === 1}
            onClick={() => setPageActuelle(pageActuelle - 1)}
          >
            Précédent
          </button>

          <span className="align-self-center mx-2 text-light">
            Page {pageActuelle} sur {totalPages}
          </span>

          <button
            className="btn btn-outline-primary ms-2"
            disabled={pageActuelle === totalPages}
            onClick={() => setPageActuelle(pageActuelle + 1)}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableauPersons;
