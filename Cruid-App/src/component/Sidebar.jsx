import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <>
        <ul className="list-unstyled">
            <li>
                <Link to="/products"> get all producs</Link> 
            </li>
            <li>
            <Link to="/category"> get all categorys</Link>  
            </li>
            </ul></>
    )
}

export default Sidebar;