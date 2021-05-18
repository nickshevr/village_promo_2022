import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';

import Text from '../Text';
import {customStyles} from '../QuestionPopup';

const gradientStyles = {
    background: '',
    backgroundImage: '-webkit-linear-gradient( -115deg, rgb(54,40,66) 0%, rgb(146,77,83) 42%, rgb(237,114,99) 80%, rgb(158,82,85) 91%, rgb(79,50,70) 100%)',
};

const merged = {
    content: {
        ...customStyles.content,
        ...gradientStyles,
    },
};

const WinPopup = () => {
    const gameEnded = useSelector((state) => state.person.gameEnded);
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
            <Text theme='white'>
                Бинго! 
                <br />
                <br />
    Вы собрали полную линию правильных ответов о достижениях значимых для истории города нижегородцах. <br /> 
    Всего в списке проекта «Имя Нижнего» 30 героев важных не только для истории Нижнего Новгорода, но и всей страны и даже мира, отобранных операторами проекта вместе экспертами, Центром 800, Министерством культуры Нижегородской области и НГИАМЗ. 
    Успейте проголосовать за того, кого по вашему мнению должны помнить и знать!
            </Text>
        </div>
        </ReactModal>
    );
};

export default WinPopup;
