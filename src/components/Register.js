import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); // Add lastName state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your API for user registration
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        email,
        firstName,
        lastName, // Include lastName in the request
        password,
      });

      // Check for a successful registration response
      if (response.status === 201) {
        // Redirect to the login page after successful registration
        window.location.href = "/Login";
      } else {
        // Handle other response statuses (e.g., show an error message)
        console.log("Registration failed. Handle the error here.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration errors here
    }
  };

  return (
    <div className="container cntner-register mt-5 pt-5 pb-5">
      <div className="row justify-content-end">
        <div className="col-md-6">
          <img
            src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/383620671_1484857089020685_8682181710115947700_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHuOi0_dLfGn6wbtIDd6xwo45OibCYdQCLjk6JsJh1AItaeGl_ynMAK3kgQg_PGO-RWxs7zoAR5ws5iUJmZO8m5&_nc_ohc=BGC2CF1eq8gAX94lKCm&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdT0Y13tA_y_t0nUfKWKX6FyrnOv_RzjmgOBDvCpk4dyWA&oe=65373ED1" // Replace with the URL of your image
            alt="A design for login"
            className="img-fluid logo"
          />
        </div>

        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title text-start mt-5 mb-3 ">
              Join Us in <div className="eco-h2">Ecocycle</div>
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text" // Change type to "text" for the lastName input
                  className="form-control"
                  value={lastName}
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)} // Include setLastName
                  required
                  placeholder="Last Name" // Set a placeholder for the last name
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm Password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-register mt-3 btn-secondary"
                >
                  Sign Up
                </button>

                <p className="dont">
                  Already have an account?
                  <Link to="/Login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
