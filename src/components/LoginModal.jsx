import React from "react";

function LoginModal({
  isLogin,
  toggleLogin,
  handleChange,
  handleSubmit,
  loading,
  error,
  form,
}) {
  return (
    <div className="modal show d-block fadeIn" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-blur">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title fw-bold">{isLogin ? "Login" : "Register"}</h5>
            <h5 className="modal-title fw-bold">{isLogin ? <i className="bi bi-door-open"></i> : <i className="bi bi-door-open-fill"></i>}</h5>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  type="text"
                  className="form-control bg-transparent"
                  id="username"
                  required
                  minLength="6"
                  maxLength="30"
                  disabled={loading}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  className="form-control bg-transparent"
                  id="password"
                  required
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                disabled={loading}
              >
                <i className="bi bi-shield-lock"></i>{" "}
                {isLogin ? "Login" : "Register"}
              </button>
              <button
                className="btn btn-link w-100 mt-3 text-decoration-none"
                onClick={toggleLogin}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
