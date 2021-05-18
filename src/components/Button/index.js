import * as React from "react"

import * as styles from './styles.module.css';

const Button = ({key, children, onClick}) => (
    <button onClick={onClick} key={key} className={styles.root}>
        {children}
    </button>
);

export default Button;
