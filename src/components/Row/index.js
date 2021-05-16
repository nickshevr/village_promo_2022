import * as React from "react"

import * as styles from './styles.module.css';

const Row = ({key, children}) => (
    <div key={key} className={styles.root}>
        {children}
    </div>
);

export default Row;
