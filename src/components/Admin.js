import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import Footer from "./Footer";

function AdminComponent() {
  const [donations, setDonations] = useState([]);
  const [newStatus, setNewStatus] = useState("");

  const getAllDonations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/donations/all");
      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  const updateStatus = async (donationId, status) => {
    try {
      console.log("Updating status:", status);
      await axios.put(
        `http://localhost:5000/donations/updateStatus/${donationId}`,
        {
          status: status, // Use the "status" parameter received
        }
      );
      getAllDonations();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    getAllDonations();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="container-fluid mt-5 mb-5 p-5 text-center">
        <h1>Welcome Back, Admin!</h1>
        <p>Time to check some Donations!</p>
      </div>
      <div className="container mt-1 mb-5 p-3 box">
        <div className="table-responsive" style={{ maxHeight: "500px" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Phone Number</th>
                <th>eWaste Type</th>
                <th>Donation Amount</th>
                <th>Full Name</th>
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation.phoneNumber}</td>
                  <td>{donation.ewasteType}</td>
                  <td>{donation.donationAmount}</td>
                  <td>{donation.fullName}</td>
                  <td>{donation.status}</td>
                  <td>
                    <button
                      className="btn btn-grn m-1 btn-success"
                      onClick={() => updateStatus(donation._id, "Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-red btn-danger"
                      onClick={() => updateStatus(donation._id, "Declined")}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminComponent;
