import React from "react"
import { useDispatch } from 'react-redux';

import {returnInitialState} from '../entities/person';
import Button from '../components/Button';

const RestartButton = () => {
    const dispatch = useDispatch();
    const restartTheGame = () => dispatch(returnInitialState());

    return (
        <Button onClick={restartTheGame}>
            <p>
                Начать заново
            </p>
        </Button>
    )
};

export default RestartButton;