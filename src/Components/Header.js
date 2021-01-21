import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className="header">

            <h2>Header component</h2>
            <IconButton>
              <PersonIcon fontSize="Large" className="header_icon" />
            </IconButton>

            <img 
                className="header_logo"
                src="https://1ooologos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt=""
            />    

        </div>
    )
}

export default Header;