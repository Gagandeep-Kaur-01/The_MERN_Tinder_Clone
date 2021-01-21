import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";

function Header() {
    return (
        <div className="header">

            <h2>Header component</h2>
            <PersonIcon fontSize="Large" className="header_icon" />

        </div>
    )
}

export default Header;