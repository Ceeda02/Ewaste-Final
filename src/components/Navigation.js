import React from "react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  // Function to handle the logout
  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem("accessToken");

    // Redirect to the login or home page after logout
    // You can replace "/login" with the appropriate route
    window.location.href = "/login"; // Change this route to your login page
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand ex" to="/">
            <b>EcoCycle</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Home"
                  style={{ textDecoration: "none" }}
                  exact
                >
                  <b>Home</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Donate"
                  style={{ textDecoration: "none" }}
                >
                  <b>Donate</b>
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Use the handleLogout function when Logout is clicked */}
                <NavLink
                  className="nav-link"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  <b>Logout</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
