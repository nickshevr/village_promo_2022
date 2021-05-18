import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';

import Text from '../Text';

const WinPopup = () => {
    const gameEnded = useSelector((state) => state.person.gameEnded);

    return (
        <ReactModal
            isOpen={gameEnded}
        >
        <Text>
            Бинго! <br /> Вы собрали полную линию правильных ответов о достижениях значимых для истории города нижегородцах. <br /> 
Всего в списке проекта «Имя Нижнего» 30 героев важных не только для истории Нижнего Новгорода, но и всей страны и даже мира, отобранных операторами проекта вместе экспертами, Центром 800, Министерством культуры Нижегородской области и НГИАМЗ. 
Успейте проголосовать за того, кого по вашему мнению должны помнить и знать!
        </Text>
        </ReactModal>
    );
};

export default WinPopup;
