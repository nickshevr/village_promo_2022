import ReactModal from "react-modal";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {selectCurrentQuestion} from '../../entities/question';
import {changePersonState} from '../../entities/person';
import {ANSWERED, FAILED} from '../../constants';

import * as styles from './styles.module.css';

const PopupContent = ({currentQuestionId}) => {
    const question = useSelector((state) => state.question.collection[currentQuestionId]);
    const rightAnswer = question.rightAnswer;
    const dispatch = useDispatch();

    const leftButtonClick = () => {
        const status = rightAnswer === 0
            ? ANSWERED
            : FAILED;

        dispatch(changePersonState({status, id: currentQuestionId}))
        dispatch(selectCurrentQuestion(null))
    };

    const rightButtonClick = () => {
        const status = rightAnswer === 1
            ? ANSWERED
            : FAILED;

        dispatch(changePersonState({status, id: currentQuestionId}))
        dispatch(selectCurrentQuestion(null))
    }

    return (
        <div className={styles.root}>
            <p>
                {question.text}
            </p>
            <div className={styles.questions}>
                <button className={styles.button} onClick={leftButtonClick}>
                    {question.answers[0]}
                </button>
                <p>
                    ИЛИ
                </p>
                <button className={styles.button}  onClick={rightButtonClick}>
                    {question.answers[1]}
                </button>
            </div>
        </div>
    );
};

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const QuestionPopup = () => {
    const currentQuestionId = useSelector((state) => state.question.currentQuestion);
    //const dispatch = useDispatch();
    const isOpen = currentQuestionId !== null;

    //const close = () => dispatch(selectCurrentQuestion(null));

    return (
        <ReactModal
            isOpen={isOpen}
            styles={customStyles}
        >
            {currentQuestionId && <PopupContent currentQuestionId={currentQuestionId} />}
        </ReactModal>
    );
};

export default QuestionPopup;
