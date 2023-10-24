import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";

function DonationTable() {
  const [donations, setDonations] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState({});
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");
  const [updatedEwasteType, setUpdatedEwasteType] = useState("");
  const [updatedDonationAmount, setUpdatedDonationAmount] = useState("");
  const userAccessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    // Fetch donations data from the server
    async function fetchDonations() {
      try {
        const response = await axios.get(
          "http://localhost:5000/donations/list",
          {
            headers: {
              Authorization: `Bearer ${userAccessToken}`,
            },
          }
        );
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    }
    fetchDonations();
  }, [userAccessToken]);

  const handleUpdate = (donation) => {
    setSelectedDonation(donation);
    setUpdatedPhoneNumber(donation.phoneNumber);
    setUpdatedEwasteType(donation.ewasteType);
    setUpdatedDonationAmount(donation.donationAmount);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/donations/update/${selectedDonation._id}`,
        {
          phoneNumber: updatedPhoneNumber,
          ewasteType: updatedEwasteType,
          donationAmount: updatedDonationAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Donation updated successfully");
        setShowUpdateModal(false);

        setDonations((prevDonations) =>
          prevDonations.map((donation) =>
            donation._id === selectedDonation._id
              ? {
                  ...donation,
                  phoneNumber: updatedPhoneNumber,
                  ewasteType: updatedEwasteType,
                  donationAmount: updatedDonationAmount,
                }
              : donation
          )
        );
      } else {
        console.error(
          "Donation update failed. Server returned an error status."
        );
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelete = (donation) => {
    setSelectedDonation(donation);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/donations/delete/${selectedDonation._id}`,
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Donation deleted successfully"); // Display an alert
        setShowDeleteModal(false);

        // Remove the deleted donation from the list
        setDonations((prevDonations) =>
          prevDonations.filter(
            (donation) => donation._id !== selectedDonation._id
          )
        );
      } else {
        console.error(
          "Donation delete failed. Server returned an error status."
        );
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 p-5 box bg">
        <div className="table-responsive">
          <table className="table table-striped tableD">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Ewaste Type</th>
                <th>Donation Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation.fullName}</td>
                  <td>{donation.phoneNumber}</td>
                  <td>{donation.ewasteType}</td>
                  <td>{donation.donationAmount}</td>
                  <td>{donation.status}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-grn btn-sm m-1"
                      onClick={() => handleUpdate(donation)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-red btn-sm ml-2"
                      onClick={() => handleDelete(donation)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link to="/Donate">
              <button className="btn btn-primary btn-grn m-2">Back</button>
            </Link>
          </table>

          <Modal
            show={showUpdateModal}
            onHide={() => setShowUpdateModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Donation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={updatedPhoneNumber}
                    onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ewaste Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={updatedEwasteType}
                    onChange={(e) => setUpdatedEwasteType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Check
                    type="radio"
                    label="1pc"
                    name="donationAmount"
                    id="donationAmount1pc"
                    checked={updatedDonationAmount === "1pc"}
                    onChange={() => setUpdatedDonationAmount("1pc")}
                  />
                  <Form.Check
                    type="radio"
                    label="2pc"
                    name="donationAmount"
                    id="donationAmount2pc"
                    checked={updatedDonationAmount === "2pc"}
                    onChange={() => setUpdatedDonationAmount("2pc")}
                  />
                  <Form.Check
                    type="radio"
                    label="3pc+"
                    name="donationAmount"
                    id="donationAmount3pc"
                    checked={updatedDonationAmount === "3pc+"}
                    onChange={() => setUpdatedDonationAmount("3pc+")}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowUpdateModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="btn-grn"
                variant="primary"
                onClick={handleUpdateSubmit}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Delete Modal */}
          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Donation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this donation?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button
                className="btn-red"
                variant="danger"
                onClick={() => handleDeleteConfirm()}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DonationTable;
