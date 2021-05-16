import { createSlice } from '@reduxjs/toolkit'

import {COUNT, INITIAL, ANSWERED} from '../../constants';

export const PersonState = {};

for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
        const id = `${i}_${j}`;

        PersonState[id] = {
            id,
            text: `Person`,
            status: INITIAL,
            questionId: id,
        }
    }
}

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        collection: PersonState,
        gameEnded: false,
    },
    reducers: {
        changePersonState: (state, action) => {
            const {id, status} = action.payload;

            state.collection[id].status = status;

            const [row, column] = id.split('_');

            if (status === ANSWERED) {
                let gameEndedRow = true;
                let gameEndedColumn = true;

                for (let i = 0; i < COUNT; i++) {
                    const rowId = `${row}_${i}`;
                    const columnId = `${i}_${column}`;

                    gameEndedRow = gameEndedRow && state.collection[rowId].status === ANSWERED;
                    gameEndedColumn = gameEndedColumn && state.collection[columnId].status === ANSWERED;
                }

                state.gameEnded = gameEndedRow || gameEndedColumn;
            }
        },
    },
})

export const { changePersonState } = personSlice.actions

export default personSlice.reducer

