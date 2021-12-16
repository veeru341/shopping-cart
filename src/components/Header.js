import React from 'react';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Dropdown, Badge } from 'react-bootstrap';


function Header() {
    return (
        <div className="header">
            <div className="brandname">
                Shopping Cart
            </div>
            <div className="search">
                <input type="text" className="searchinput" placeholder="Search Products" />
            </div>
            <div className="cart">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <ShoppingBasketIcon />
                        10
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Cart is Empty</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header