import React from 'react';
import { Provider } from 'react-redux';
import store from '.';

export const server = ({element}) => {
    return (
        <Provider store={store}>{element}</Provider>
    );
};

export const client = server;
