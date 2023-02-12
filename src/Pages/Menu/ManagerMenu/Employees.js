import React from 'react';

 const employeeData = [
    {
        id:"e1",
        name:"Rirani",
        empid: "10",
        position : "Cashier",
        salary: 10000,
        mobile : 4081234567,
        
    },

    {
        id:"e2",
        name:"Devid Rome",
        empid: "12",
        position : "Cook",
        salary: 15000,
        mobile : 4081111111,
    },

    {
        id:"e3",
        name:"Tin jonsi",
        empid: "14",
        position : "Chef",
        salary: 20000,
        mobile : 4082222222,
    },

    {
        id:"e4",
        name:"Krish Lee",
        empid: "16",
        position : "Waiter",
        salary: 12000,
        mobile : 408123456,
    },
]

const Employees = () => {
  return (
    <li>
        {/* {employeeData.map((emp) => (
            key={emp.id}
            id={emp.id}
            name={emp.name}
            position={emp.position}
            salary={emp.salary}
            mobile={emp.mobile}

            )
        )} */}
    </li>
  )
}

export default Employees;