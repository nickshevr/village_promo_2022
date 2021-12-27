import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';
import RestartButton from '../../containers/restartButton';

import Text from '../Text';
import {customStyles} from '../QuestionPopup';

const gradientStyles = {
    border: '5px solid #94CF1C',
    borderRadius: '5px',
    padding: '25px'
};

const merged = {
    content: {
        ...customStyles.content,
        ...gradientStyles,
    },
};

const DefaultPopup = () => {
    return (
        <React.Fragment>
            <Text style={{color: '#FF0E52'}}>
                Тренируемся дальше!
            </Text>
            <Text>
                Пока что во&nbsp;всех линиях бинго, есть ошибки. Но&nbsp;кое-что вам удалось угадать, а&nbsp;значит уже можно доверить своей интуиции рассылку подарков самым родным и&nbsp;близким! А&nbsp;заботу о&nbsp;качественной доставке Boxberry не&nbsp;только возьмет на&nbsp;себя, но&nbsp;и&nbsp;предоставит скидку в&nbsp;30% по&nbsp;промокоду &laquo;вилладж_пипл&raquo;
            </Text>
            <RestartButton />
        </React.Fragment>
    )
};

const WinPopup = () => {
    const gameEnded = useSelector((state) => state.person.loose);
    const style = {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    };

    return (
        <ReactModal
            isOpen={gameEnded}
            style={merged}
        >
            <div style={style}>
                <DefaultPopup />
            </div>
        </ReactModal>
    );
};

export default WinPopup;
