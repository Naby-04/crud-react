import React from "react";
import "../App.css";

const Formulaire = () => {
  return (
    <div>
      <form
        className="row p-0"
        // onSubmit={currentIndex === null ? handleSubmit : handleEdit}
      >
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            name="prenom"
            placeholder="Prenom"
            // value={user.prenom}
            // onChange={handleChange}
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
            // value={user.nom}
            // onChange={handleChange}
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
            // value={user.email}
            // onChange={handleChange}
            required
          />
          <label className="ms-3 w-50">Email</label>
        </div>
        <div className="form-floating mb-3 col-12 col-md-6">
          <input
            type="number"
            className="form-control"
            name="telephone"
            placeholder="#"
            // value={user.telephone}
            // onChange={handleChange}
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
