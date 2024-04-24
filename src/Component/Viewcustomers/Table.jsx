import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts, deletePost } from "../../../Redux/Action/auth";
import View from "../../assets/photo/View.svg";
import Edit from "../../assets/photo/Edit.svg";
import Trash from "../../assets/photo/Trash.svg";
import Add from "../../assets/photo/add.svg";
import Close from "../../assets/photo/close.svg";
import "../Addcustomer/customer.css";
import Search from "../../assets/photo/search.svg";
import Pagination from "../Pagination/Pagination";

function Table() {
  const dispatch = useDispatch();
  const { posts = [] } = useSelector((state) => state.customer || {});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Default currentPage to 1
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
    setSelectedCustomerId(id);
    setShowPopup(true);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setSelectedCustomerId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deletePost(selectedCustomerId));
    setShowPopup(false);
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 1000);
    setSelectedCustomerId(null);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="">
        <div className="mt-5 container  ">
          <form>
            <div className="input d-flex justify-content-end">
              <img src={Search} alt="Search" />
              <input type="text" placeholder="Search" />
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#FE7720",
                  border: "1px solid #FE7720",
                  borderRadius: "10px",
                  marginLeft: "10px",
                  width: "100px",
                }}
              >
                Export CSV
              </button>
            </div>
          </form>
        </div>
        <div className="container basic mt-3">
          <table className="table">
            <thead>
              <tr className="table-secondary">
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>State</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentRecords) && currentRecords.length > 0 ? (
                currentRecords.map((customer) => (
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
                        className="action-icon"
                        onClick={() => handleReadPost(customer.id)}
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                      <img
                        src={Edit}
                        alt="Edit"
                        className="action-icon"
                        onClick={() => handleEditPost(customer.id)}
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                      <img
                        src={Trash}
                        alt="Delete"
                        className="action-icon"
                        onClick={() => handleDelete(customer.id)}
                        style={{ cursor: "pointer", marginRight: "10px" }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No records found</td>
                </tr>
              )}
              {/*  */}
              <tr>
                <td colSpan="6">
                  <Pagination
                    posts={posts}
                    currentPage={currentPage}
                    recordsPerPage={recordsPerPage}
                    handlePageClick={handlePageClick}
                    setCurrentPage={setCurrentPage}
                  />
                </td>
              </tr>
              {/*  */}
            </tbody>
          </table>
        </div>
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
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="text-center mt-3">
                  <h5 className="text-danger">Delete Record?</h5>
                </div>
                <div className="text-center mt-3">
                  <img src={Close} alt="cancel" />
                </div>
                <div
                  className=" d-flex text-center mt-3 mb-3 "
                  style={{ marginLeft: "140px" }}
                >
                  <button
                    type="button"
                    className="primary-btn"
                    style={{
                      backgroundColor: "#FE7720",
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: "10px",
                      marginRight: "10px",
                      width: "100px ",
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
                      width: "100px",
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

        <div className="fixed" >
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
