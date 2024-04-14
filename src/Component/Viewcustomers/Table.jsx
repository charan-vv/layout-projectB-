import React, { useState, useEffect } from 'react';
import axios from 'axios';
import View from '../../assets/photo/View.svg';
import Trash from '../../assets/photo/Trash.svg';
import Edit from '../../assets/photo/Edit.svg';
import "../Addcustomer/customer.css";
import Button from '../Button/button';
import Add from '../../assets/photo/add.svg'

function Table() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch data from API using Axios
    axios.get('https://660fa01d356b87a55c51d6dd.mockapi.io/fakeData')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container basic">
      <table className="table">
        <thead className='table-secondary rounded-pill'>
          <tr >
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>{customer.state}</td>
              <td>
                <img src={View} alt="View" className="action-icon" />
                <img src={Edit} alt="Edit" className="action-icon" />
                <img src={Trash} alt="Delete" className="action-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <img src=<Add/> class="rounded-pill" alt="..."></img> */}
    </div>
  );
}

export default Table;
