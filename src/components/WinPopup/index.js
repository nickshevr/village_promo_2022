import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';

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
                Бинго!
            </Text>
            <Text>
                Вы собрали полную линию верных ответов о заветных желаниях нижегородцев!
            </Text>
            <div>
                <Text style={{color: '#94CF1C'}}>
                    "вилладж_пипл"
                </Text>
                <Text>
                    Теперь можно смело доверять своей интуиции и&nbsp;рассылать подарки всем родным и&nbsp;близким с&nbsp;уверенностью! А&nbsp;заботу о&nbsp;качественной доставки возьмет Boxberry не&nbsp;только возьмет на&nbsp;себя, но&nbsp;и&nbsp;предоставит скидку в&nbsp;30% по&nbsp;промокоду &laquo;вилладж_пипл&raquo;
                </Text>
            </div>
        </React.Fragment>
    )
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
                <DefaultPopup />
            </div>
        </ReactModal>
    );
};

export default WinPopup;
