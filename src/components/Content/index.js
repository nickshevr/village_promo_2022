import * as React from "react"

import * as styles from './styles.module.css';

const Content = ({children}) => (
    <div className={styles.root}>
        {children}
    </div>
);

export default Content;
