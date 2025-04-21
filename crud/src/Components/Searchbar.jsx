import React from "react";

const Searchbar = ({ recherche, setRecherche }) => {
  const handleChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div className="p-1 col-6">
      <input
        type="text"
        className="form-control p-2"
        placeholder="Rechercher un utilisateur..."
        value={recherche}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
