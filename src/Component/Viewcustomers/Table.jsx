import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts, deletePost } from "../../Action/auth";
import View from "../../assets/photo/View.svg";
import Edit from "../../assets/photo/Edit.svg";
import Trash from "../../assets/photo/Trash.svg";
import Add from "../../assets/photo/add.svg";
import Close from "../../assets/photo/close.svg"; // Import the cancel image
import "../Addcustomer/customer.css";
import Search from "../../assets/photo/search.svg";

function Table() {
  const dispatch = useDispatch();
  const { posts = [] } = useSelector((state) => state.customer || {});
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const [selectedCustomerId, setSelectedCustomerId] = useState(null); // State to store the selected customer ID
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = () => {
    navigate("/details");
  };
  const handleEditPost = (id) => {
    navigate(`/details/${id}`, { state: { isUpdateMode: true } });
  };

  const handleReadPost = (id) => {
    navigate(`/details/${id}`, { state: { isViewMode: true } });
  };
  const handleDelete = (id) => {
    setSelectedCustomerId(id); // Set the selected customer ID
    setShowPopup(true); // Show the popup
  };

  const handleCancelDelete = () => {
    setShowPopup(false); // Hide the popup
    setSelectedCustomerId(null); // Clear the selected customer ID
  };

  const handleConfirmDelete = () => {
    dispatch(deletePost(selectedCustomerId)); // Dispatch delete action with the selected customer ID
    setShowPopup(false); // Hide the popup
    setSelectedCustomerId(null); // Clear the selected customer ID
  };

  return (
    <>
      <div className="">
        <div className="mt-5 container  d-flex justify-content-end">
          <form>
            <div className="input">
              <img src={Search} />
              <input type="text" placeholder="Search" />
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#FE7720",
                  border: "1px solid #FE7720",
                  borderRadius: "10px",
                  marginLeft: "10px",
                }}
              >
                Export CSV
              </button>
            </div>
          </form>
        </div>
        <div className="container basic  mt-3">
          <table className="table ">
            <thead>
              <tr
                className="table-secondary"
              >
                <th style={{ borderTopLeftRadius: "9px" ,borderBottomLeftRadius:"9px"}}>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th style={{ borderTopRightRadius: "9px",borderBottomRightRadius:"9px" }}>Actions</th>
              </tr>
            </thead>
            {/* Add your table body and rows here */}

            <tbody>
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.country}</td>
                    <td>{customer.state}</td>
                    <td>
                      <img
                        src={View}
                        alt="View"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        className="action-icon"
                        onClick={() => handleReadPost(customer.id)}
                      />
                      <img
                        src={Edit}
                        alt="Edit"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        className="action-icon"
                        onClick={() => handleEditPost(customer.id)}
                      />
                      <img
                        src={Trash}
                        alt="Delete"
                        style={{ cursor: "pointer" }}
                        className="action-icon"
                        onClick={() => handleDelete(customer.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No records found</td>
                </tr>
              )}
            </tbody>
            {showPopup && (
              <div
                className="modal show"
                tabIndex="-1"
                role="dialog"
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="text-center mt-3">
                      <h5 className="text-danger">Delete Record?</h5>
                    </div>
                    <div className="text-center mt-3">
                      <img src={Close} alt="cancel" />
                    </div>
                    <div className=" text-center mt-5 mb-3">
                      <button
                        type="button"
                        className="primary-btn"
                        style={{
                          backgroundColor: "#FE7720",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: "10px",
                          marginRight: "10px",
                        }}
                        onClick={handleConfirmDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="secondary-btn"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#FE7720",
                          border: "1px solid #FE7720",
                          borderRadius: "10px",
                          marginLeft: "10px",
                        }}
                        onClick={handleCancelDelete}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </table>
        </div>
        <div className="fixed-bottom text-end">
          <img
            src={Add}
            alt="Add"
            onClick={handleAddPost}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
