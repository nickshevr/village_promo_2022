import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../entities/question';
import personReducer from '../entities/person';

export default configureStore({
    reducer: {
        question: questionReducer,
        person: personReducer,
    },
    preloadedState: {},
});
