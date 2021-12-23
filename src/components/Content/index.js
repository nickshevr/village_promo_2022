import * as React from "react"

import * as styles from './styles.module.css';

const Content = ({children}) => (
    <div className={styles.root}>
        <div className={styles.container}>
        {children}
        </div>
    </div>
);

export default Content;
