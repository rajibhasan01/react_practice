import React from 'react';
import Employee from '../Employee/Employee';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    total = cart.reduce((previous, current) => previous + current.salary, 0);

    return (
        <div className="card border-success mt-5 sticky-top">
            <div className="card-header bg-transparent border-success">
                <h4 className="text-center">Total Hired: {cart.length}</h4>
            </div>
            <div className="card-body text-success">
                <h5 className="card-title">Employee Added</h5>
                {
                    cart.map((em, i) => <Employee key={i} employee={em} />)
                }
            </div>
            <div className="card-footer bg-transparent border-success">
                <h4 className="text-center">Total Cost: $ <span className="text-danger fw-bold">{total}</span></h4>
            </div>
        </div>
    );
};

export default Cart;