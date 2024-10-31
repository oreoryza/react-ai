import React from "react";

function Navbar({ logout }) {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot"></i> Lumoshive AI
        </h1>
      <button onClick={logout} className="btn fw-bold text-white btn-cstm">
        Logout
        <i class="bi bi-box-arrow-right ms-2"></i>
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
