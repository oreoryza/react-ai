import React from "react";

function Navbar({ logout }) {
  return (
    <nav className="navbar gradientNav p-0">
      <div className="container slideIn py-2">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot"></i> Lumoshive AI
        </h1>
        <button onClick={logout} className="btn fw-bold text-white btn-cstm">
          Logout
          <i className="bi bi-box-arrow-right ms-2"></i>
        </button>
      </div>
      <div className="logo">
        <i className="bi bi-robot fs-1"></i>
        <h1>Lumoshive AI</h1>
      </div>
    </nav>
  );
}

export default Navbar;
