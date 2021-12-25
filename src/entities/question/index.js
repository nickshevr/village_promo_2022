import { createSlice } from '@reduxjs/toolkit'

import {COUNT} from '../../constants';

import MOCK from '../person/data';

const queue = [...MOCK];

export const QuestionState = {};

for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
        const id = `${i}_${j}`;
        const person = queue.pop();
        const title = person.name;
        const questionText = person.question.split('.').slice(0, -1).join('');
        const question = person.question.split('.').slice(-1).join('');

        console.log(question);

        QuestionState[id] = {
            id,
            title,
            questionText,
            question,
            answers: person.answers,
            rightAnswer: person.rightAnswer,
            notRight: person.notRight,
        }
    }
}

export const questionsSlice = createSlice({
    name: 'question',
    initialState: {
        collection: QuestionState,
        currentQuestion: null,
    },
    reducers: {
        selectCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
    },
})

export const { selectCurrentQuestion } = questionsSlice.actions

export default questionsSlice.reducer

