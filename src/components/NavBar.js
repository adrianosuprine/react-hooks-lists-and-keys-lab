import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const linkItems = links.map((link) => 
  // <li>{link}</li>)

  return <nav>
   
    <a href="#home">{links[0]}</a>
    <a href="#about">{links[1]}</a>
    <a href="#projects">{links[2]}</a>  </nav>;
}

export default NavBar;
