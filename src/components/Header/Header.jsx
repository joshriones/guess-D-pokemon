import "./Header.css";
import pokemonHeader from "../../assets/images/headerIMg.png";

import React from "react";

function Header() {
  return (
    <header>
      <img src={pokemonHeader} alt="Pokemon game title" />
    </header>
  );
}

export default Header;
