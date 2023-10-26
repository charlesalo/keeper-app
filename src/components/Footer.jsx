import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Keeper ⓒ ChavBuilds {year}</p>
    </footer>
  );
}

export default Footer;