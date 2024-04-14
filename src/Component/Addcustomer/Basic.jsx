import React, { useState } from 'react';
import "./customer.css"

function Basic() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  

  return (
    <div className="basic">
      <h2 className="">Basic Details</h2>
      <form >
      <div className="container">
          <div className="row">
            <div className="col-4 mb-5">
              <label For="customerName" className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter"
              />
            </div>
            <div className="col-4 ">
            <label htmlFor="customerEmail" className="form-label">Customer Email</label>
            <input
              type="email"
              className="form-control"
              id="customerEmail"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Enter"
            />
            </div>
            <div className="col-4">
            <label htmlFor="customerPhone" className="form-label">Customer Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="customerPhone"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="Enter"
            />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Basic;
