import { createSlice } from '@reduxjs/toolkit'

import {COUNT} from '../../constants';

import MOCK from '../person/data';

const queue = [...MOCK];

export const QuestionState = {};

for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
        const id = `${i}_${j}`;
        const person = queue.pop();
        const prefix = person.gender
            ? 'Кем была'
            : 'Кем был';

        QuestionState[id] = {
            id,
            text: `${prefix} ${person.name.trim()}?`,
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

