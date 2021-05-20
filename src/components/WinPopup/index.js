import ReactModal from "react-modal";
import React from "react";
import {useSelector} from 'react-redux';

import Text from '../Text';
import Link from '../Link';
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

const FirstPopup = () => {
    return <Text theme='white'>
        Поздравляем!
        <br /> 
        Вы собрали полную линию верных ответов и стали одним из 30ти бинго-победителей. Забрать специальный приз можно в пышечной «Вспышка» по адрес ул. Алекссевская д. 11, просто назвав секретную фразу «Я знаю новых героев Нижнего!» 
    </Text>
};

const DefaultPopup = () => {
    return (
        <React.Fragment>
            <Text theme='white'>
                        Бинго! 
                        <br />
                        Вы собрали полную линию верных ответов о героях Нижнего и их достижениях.
            </Text>
            <div>
                <Text theme='white'>
                    Заходите на сайт&nbsp;
                    <Link href='http://name.nizhny800.ru/'>
                            name.nizhny800.ru
                    </Link>
                        , знакомьтесь с важными для города именами и&nbsp;
                    <Link href='http://name.nizhny800.ru/#name'>
                            голосуйте 
                    </Link>
                    &nbsp;за одного из 30 героев, которые попали в список проекта «Имя Нижнего»! Все вместе мы выберем 9 имен, которые станут частью праздничной программы 800-летия!
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
                <FirstPopup />
            </div>
        </ReactModal>
    );
};

export default WinPopup;
