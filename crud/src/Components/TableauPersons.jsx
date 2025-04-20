import React from "react";
import "./AddPerson";

const TableauPersons = ({ utilisateurs }) => {
  return (
    <div className="mt-2">
      <h2>Personnes</h2>
      <div className="user-part">
        <table className="affichage_tableau mt-3">
          <thead>
            <tr>
              <th>Prenom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {utilisateurs.map((user, index) => (
              <tr key={index}>
                <td>{user.Prenom}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <button
                    className="btn btn-primary me-md-2 mb-sm-2 mb-md-0"
                    // onClick={() => handleCallEdit(index)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-warning me-md-2 mb-sm-2 mb-md-0"
                    // on vas mettre cela pour pouvoir cibler directement le modal et l'afficher au click sur le boutton
                    data-bs-toggle="modal"
                    data-bs-target="#Formulaire"
                    // onClick={() => handleCallEdit(index)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger me-md-2 mb-sm-2 mb-md-0"
                    // onClick={() => handleDelete(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    // onClick={() => handleDelete(index)}
                  >
                    <i className="fa-solid fa-ban"></i>
                    <i className="fa-solid fa-lock-open"></i>
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>Seydina Mohamed</td>
              <td>Diop</td>
              <td>smohamed.diop@gmail.com</td>
              <td>781389424</td>
              <td>
                <button
                  className="btn btn-primary me-md-2 mb-sm-2 mb-md-0"
                  // onClick={() => handleCallEdit(index)}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  className="btn btn-warning me-md-2 mb-sm-2 mb-md-0"
                  // on vas mettre cela pour pouvoir cibler directement le modal et l'afficher au click sur le boutton
                  data-bs-toggle="modal"
                  data-bs-target="#Formulaire"
                  // onClick={() => handleCallEdit(index)}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  className="btn btn-danger me-md-2 mb-sm-2 mb-md-0"
                  // onClick={() => handleDelete(index)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className="btn btn-danger"
                  // onClick={() => handleDelete(index)}
                >
                  <i className="fa-solid fa-ban"></i>
                  <i className="fa-solid fa-lock-open"></i>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableauPersons;
