import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";
import './SwipeButtons.css'

function SwipeButtons() {
  return (
    <div className="swipeButtons">   

        <IconButton className="swipeButtons__repeat MuiIconsButton-root">
          <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__left MuiIconsButton-root">
          <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__star MuiIconsButton-root">
          <StarRateIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__right MuiIconsButton-root">
          <FavoriteIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipeButtons__lightning MuiIconsButton-root">
          <FlashOnIcon fontSize="large" />
        </IconButton>

    </div>
  );
}

export default SwipeButtons;
