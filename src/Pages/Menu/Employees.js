import React from 'react';
import './Employees.css';

const Employees = () => {
  return (
    <div>
        <h2>Employees Data</h2>
        <table>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            <tr>
                <th>1</th>
                <th>Damu</th>
                <th>Chef</th>
                <th>25000</th>
            </tr>
            <tr>
                <th>2</th>
                <th>Bhat</th>
                <th>Chef</th>
                <th>25000</th>
            </tr>
        </table>
    </div>
  )
}

export default Employees;