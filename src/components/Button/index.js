import * as React from "react"

import * as styles from './styles.module.css';

const Button = ({style = {}, key, children, onClick}) => (
    <button style={style} onClick={onClick} key={key} className={styles.root}>
        {children}
    </button>
);

export default Button;
