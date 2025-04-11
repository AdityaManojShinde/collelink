import { link } from "fs";
import React from "react";

function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Search", link: "/" },
    { name: "Clubs", link: "/" },
    { name: "Events", link: "/" },
    { name: "More", link: "/" },
  ];
  return <div>Navbar</div>;
}

export default Navbar;
