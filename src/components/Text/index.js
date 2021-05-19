import React from "react";
import classNames from 'classnames/bind';

import * as styles from './styles.module.css';

const cx = classNames.bind(styles);

const Text = ({style, children, size = 'l', theme = 'black'}) => {
    const className = cx({
        root: true,
        [theme]: true,
        [size]: true,
    });

    return (
        <p style={style} className={className}>
            {children}
        </p>
    );
};

export default Text;
