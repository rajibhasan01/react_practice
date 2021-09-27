import React, { useEffect, useState } from 'react';
import Engineers from '../Engineers/Engineers';
import Cart from '../Cart/Cart';

const Container = () => {

    const [engineer, setEngineer] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setEngineer(data));
    }, []);

    const handleHire = (actor) => {
        console.log(actor);
        if (cart.includes(actor)) {
            return;
        }
        const newCart = [...cart, actor];
        setCart(newCart);
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8">
                    <h4>Choose Engineer</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                        {
                            engineer.map((actor) => <Engineers
                                key={actor.key}
                                actor={actor}
                                handleHire={handleHire}
                            />)
                        }

                    </div>
                </div>
                <div className="col-md-4 pt-2">
                    <Cart cart={cart} />
                </div>

            </div>

        </div>
    );
};

export default Container;