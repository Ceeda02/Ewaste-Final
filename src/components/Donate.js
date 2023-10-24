import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Donation() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ewasteType, setEwasteType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const userAccessToken = localStorage.getItem("accessToken"); // Retrieve the user access token

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !ewasteType || !donationAmount) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/donations/create",
        {
          phoneNumber,
          ewasteType,
          donationAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`, // Include the token in the request headers
          },
        }
      );

      if (response.status === 201) {
        setShowSuccessModal(true);
        // Optionally, you can reset the form here.
      } else {
        setShowErrorModal(true); // Show the error modal on donation failure
      }
    } catch (error) {
      console.error("Donation error:", error);
      setShowErrorModal(true); // Show the error modal on donation error
    }
  };

  return (
    <>
      <Navigation />
      <div className="container marginTB"></div>
      <div className="container box mt-5 mb-5 p-5 marginTB bg">
        <h1 className="text-center headers">Donation Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              <h3 className="headers">Phone Number</h3>
            </label>
            <input
              type="text"
              className="form-control txtfield"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ewasteType">
              <h3 className="headers">What type of Ewaste?</h3>
            </label>
            <input
              type="text"
              className="form-control txtfield"
              id="ewasteType"
              value={ewasteType}
              onChange={(e) => setEwasteType(e.target.value)}
              placeholder="(e.g., phone, cd, etc)"
            />
          </div>
          <div className="form-group">
            <label>
              <h3 className="headers">Donation Amount</h3>
            </label>
            <div className="d-flex flex-column">
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="1pc"
                  checked={donationAmount === "1pc"}
                  onChange={() => setDonationAmount("1pc")}
                />
                1pc
              </label>
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="2pc"
                  checked={donationAmount === "2pc"}
                  onChange={() => setDonationAmount("2pc")}
                />
                2pc
              </label>
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="3pc+"
                  checked={donationAmount === "3pc+"}
                  onChange={() => setDonationAmount("3pc+")}
                />
                3pc+
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-grn m-3">
            Donate Now
          </button>
          <Link to="/Table">
            <button className="btn btn-primary btn-grn">History</button>
          </Link>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="modal show" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Success!</h5>
                </div>
                <div className="modal-body">
                  <p>Your donation has been submitted successfully.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Donation Error Modal */}
        {showErrorModal && (
          <div className="modal show" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Donation Error</h5>
                </div>
                <div className="modal-body">
                  <p>Donation failed. Please try again.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowErrorModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Donation;
