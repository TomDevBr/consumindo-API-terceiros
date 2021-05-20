import React from "react";
import "../style/components/SearchField.scss"

export const SearchField = () => {
  return (
    <div className="submit-line">
      <input type="text" placeholder="Buscar empresa"/>
      <button className="submit-lente" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};
