import ReactModal from "react-modal";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {selectCurrentQuestion} from '../../entities/question';
import {changePersonState} from '../../entities/person';
import {ANSWERED, FAILED, INITIAL} from '../../constants';
import Text from '../Text';

import * as styles from './styles.module.css';

const PopupContent = ({currentQuestionId}) => {
    const question = useSelector((state) => state.question.collection[currentQuestionId]);
    const person = useSelector((state) => state.person.collection[currentQuestionId]);
    const rightAnswer = question.rightAnswer;
    const title = question.title;
    const questionText = question.questionText;
    const text = question.question;
    const dispatch = useDispatch();

    const leftButtonClick = () => {
        const status = rightAnswer === 0
            ? ANSWERED
            : FAILED;

        dispatch(changePersonState({status, id: currentQuestionId}))
    };

    const rightButtonClick = () => {
        const status = rightAnswer === 1
            ? ANSWERED
            : FAILED;

        dispatch(changePersonState({status, id: currentQuestionId}))
    }

    const nextClick = () => {
        dispatch(selectCurrentQuestion(null))
    };

    const choose = (
        <React.Fragment>
            <Text size='m' style={{color: '#FF0E52'}}>
                {title}
            </Text>
            <Text size='m'>
                {questionText}
            </Text>
            <Text size='m' style={{color: '#FF0E52'}}>
                {text}
            </Text>
            <div className={styles.questions}>
                <button className={styles.button} onClick={leftButtonClick}>
                    <Text size='m' theme='white'>
                        {question.answers[0]}
                    </Text>
                </button>
                <Text size='m' style={{color: '#94CF1C'}}>
                    или
                </Text>
                <button className={styles.button}  onClick={rightButtonClick}>
                    <Text size='m' theme='white'>
                        {question.answers[1]}
                    </Text>
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <div className={styles.root}>
            {person.status === FAILED &&
                <Text style={{textAlign: 'center'}}>
                    {question.notRight}
                </Text>
            }
            {person.status === ANSWERED && <Text>Верно!</Text>}
            {person.status !== INITIAL &&
                <button className={styles.button}  onClick={nextClick}>
                    <Text size='l' theme='white'>
                        Продолжаем
                    </Text>
                </button>
            }
            {person.status === INITIAL && choose}
        </div>
    );
};

export const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        display : 'flex',
    }
};

const QuestionPopup = () => {
    const currentQuestionId = useSelector((state) => state.question.currentQuestion);
    //const dispatch = useDispatch();
    const isOpen = currentQuestionId !== null;


    return (
        <ReactModal
            isOpen={isOpen}
            style={customStyles}
        >
            {currentQuestionId && <PopupContent currentQuestionId={currentQuestionId} />}
        </ReactModal>
    );
};

export default QuestionPopup;
