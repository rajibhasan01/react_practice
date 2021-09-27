import React from 'react';

const Engineers = (props) => {
    const { first_name, last_name, image, salary, email, country, phone } = props.actor;
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{first_name} {last_name}</h5>
                    <p className="card-text"> <span className="text-danger fw-bold">Origin:</span> {country}</p>
                    <p className="card-text text-success">{email}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text text-muted fw-bold"><span className="text-danger fw-bold">Salary:</span> {salary}</p>
                    <button className="btn bg-info px-5 text-light fw-bold" onClick={() => props.handleHire(props.actor)}><i className="fas fa-check"></i> Hire</button>
                </div>
            </div>
        </div>
    );
};

export default Engineers;