import React from "react";
import DarkMode from "./DarkMode";

function Navbar({ logout, mode, whichMode }) {
  return (
    <nav className="navbar gradientNav p-0">
      <div className="container slideIn py-2">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot"></i> Lumoshive AI
        </h1>
        <div className="d-flex align-items-center">
          <DarkMode mode={mode} whichMode={whichMode} />
        <button onClick={logout} className="btn text-white btn-cstm">
          <i className="bi bi-box-arrow-right ms-2"></i>
        </button>
        </div>
      </div>
      <div className="logo">
        <i className="bi bi-robot fs-1"></i>
        <h1>Lumoshive AI</h1>
      </div>
    </nav>
  );
}

export default Navbar;
