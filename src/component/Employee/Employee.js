import React from 'react';

const Employee = (props) => {
    const { first_name, last_name, salary } = props.employee;
    return (
        <div className="d-flex justify-content-between">
            <p><span className="text-muted fw-bold">{first_name} {last_name}</span></p>
            <p> <span className="text-danger fw-bold">{salary}</span></p>
        </div>
    );
};

export default Employee;