import React from 'react';
import { CartState } from "../context/Context";
import SingleProduct from './SingleProduct';

function Home() {

    const { state : {products}} = CartState();
    console.log(products);


    return (
        <div>
            {
                products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id} />
                })
            }
        </div>
    )
}

export default Home
