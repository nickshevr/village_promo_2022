import React from "react"
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import {selectCurrentQuestion} from '../../entities/question';
import {INITIAL} from '../../constants';

import * as styles from './styles.module.css';

const cx = classNames.bind(styles);

const Question = (props) => {
    const {id} = props;
    const person = useSelector((state) => state.person.collection[id]);
    const dispatch = useDispatch();
    const className = cx({
        root: true,
        [person.status.toLowerCase()]: true,
    })
    const onClick = () => dispatch(selectCurrentQuestion(person.id));

    return (
        <button disabled={person.status !== INITIAL} key={id} className={className} onClick={onClick}>
            <p className={styles.text}>
                {person.text}
                <br />
                {id}
            </p>
        </button>
    );
};

export default Question;
