import React from "react"
import { useDispatch, useSelector } from 'react-redux';

import {returnInitialState} from '../entities/person';
import Button from '../components/Button';
import Text from '../components/Text';

const RestartButton = () => {
    const gameStarted = useSelector((state) => state.person.gameStarted);
    const dispatch = useDispatch();
    const restartTheGame = () => dispatch(returnInitialState());
    const style = {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        gameStarted && <Button style={style} onClick={restartTheGame}>
            <Text theme='white'>
                Начать заново
            </Text>
        </Button>
    )
};

export default RestartButton;