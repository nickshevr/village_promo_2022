import { createSlice } from '@reduxjs/toolkit'

export const GameState = {};

export const personSlice = createSlice({
    name: 'game',
    initialState: {
        isOver: false,
    },
    reducers: {
        changePersonState: (state, action) => {
            const {id, status} = action.payload;

            state.collection[id].status = status;
        },
    },
})

export const { changePersonState } = personSlice.actions

export default personSlice.reducer

