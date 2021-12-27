import { createSlice } from '@reduxjs/toolkit'

import {COUNT, INITIAL, ANSWERED, FAILED} from '../../constants';

import MOCK from './data';

const queue = [...MOCK];

export const PersonState = {};

for (let i = 0; i < COUNT; i++) {
    for (let j = 0; j < COUNT; j++) {
        const id = `${i}_${j}`;
        const person = queue.pop();

        PersonState[id] = {
            id,
            text: person.name,
            status: INITIAL,
            questionId: id,
        }
    }
}

const INITIAL_STATE = {
    collection: PersonState,
    gameEnded: false,
    gameStarted: false,
    loose: false,
};

const recreateAvailable = () => ({
    1: true,
    2: true,
    3: true,
    0: true,
});

let AVAILABLE_ROWS = recreateAvailable();

let AVAILABLE_COLUMNS = recreateAvailable();


export const personSlice = createSlice({
    name: 'person',
    initialState: INITIAL_STATE,
    reducers: {
        changePersonState: (state, action) => {
            const {id, status} = action.payload;

            state.collection[id].status = status;
            state.gameStarted = true;

            const [row, column] = id.split('_');

            if (status === ANSWERED) {
                let gameEndedRow = true;
                let gameEndedColumn = true;
                let gameEndedMainDiag = true;
                let gameEndedSubDiag = true;

                for (let i = 0; i < COUNT; i++) {
                    const rowId = `${row}_${i}`;
                    const columnId = `${i}_${column}`;
                    const subDiag =  `${COUNT-i-1}_${i}`;
                    const mainDiag = `${i}_${i}`;

                    gameEndedRow = gameEndedRow && state.collection[rowId].status === ANSWERED;
                    gameEndedColumn = gameEndedColumn && state.collection[columnId].status === ANSWERED;
                    gameEndedMainDiag = gameEndedMainDiag && state.collection[mainDiag].status === ANSWERED;
                    gameEndedSubDiag = gameEndedSubDiag && state.collection[subDiag].status === ANSWERED;
                }

                state.gameEnded = gameEndedRow || gameEndedColumn || gameEndedMainDiag || gameEndedSubDiag;
            }

            if (status === FAILED) {
                AVAILABLE_ROWS[row] = false;
                AVAILABLE_COLUMNS[column] = false;


                if (!Object.values(AVAILABLE_ROWS).includes(true)) {
                    state.loose = true;
                }

                if (!Object.values(AVAILABLE_COLUMNS).includes(true)) {
                    state.loose = true;
                }
            }
        },
        returnInitialState: () => {
            AVAILABLE_COLUMNS = recreateAvailable();
            AVAILABLE_ROWS = recreateAvailable();

            return INITIAL_STATE;
        }
    },
})

export const { changePersonState, returnInitialState } = personSlice.actions

export default personSlice.reducer

