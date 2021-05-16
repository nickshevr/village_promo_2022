import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';

const WinPopup = () => {
    const gameEnded = useSelector((state) => state.person.gameEnded);

    return (
        <ReactModal
            isOpen={gameEnded}
        >
            TEXT ABOUT THE WIN
        </ReactModal>
    );
};

export default WinPopup;
