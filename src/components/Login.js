import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);

        if (response.data.role === "admin") {
          // Redirect to the 'Admin' component if the user has the 'admin' role
          window.location.href = "/Admin";
        } else {
          // Redirect to the 'Home' component for regular users
          window.location.href = "/Home";
        }
      } else {
        console.log("Login failed. Handle the error here.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors here
    }
  };

  return (
    <>
      <div className="container container-Login mt-5 pt-5 pb-5">
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
                Hello Neighbor
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group ebox">
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
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="agreeCheckbox">
                      I agree to the terms and services
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-Login mt-3 btn-secondary"
                  >
                    Log in
                  </button>

                  <p className="dont">
                    Don't have an account?
                    <Link to="/Register">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
