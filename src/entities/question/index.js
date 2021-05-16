import { createSlice } from '@reduxjs/toolkit'

import {COUNT} from '../../constants';

export const QuestionState = {};

for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
        const id = `${i}_${j}`;

        QuestionState[id] = {
            id,
            text: `Left or right`,
            answers: [
                `Left${id}`,
                `Rigth${id}`,
            ],
            rightAnswer: 0,
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

