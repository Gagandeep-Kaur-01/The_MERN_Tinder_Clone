import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className="header">

            <IconButton>
              <PersonIcon fontSize="Large" className="header_icon" />
            </IconButton>

            <img              
                className="header_logo"
                //src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                src="https://toppng.com/public/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
                alt="tinder logo"
             >
            </img>
                

        </div>
    )
}

export default Header;