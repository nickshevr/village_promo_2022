import * as React from "react"

import * as styles from './styles.module.css';

const Link = ({style = {}, children, href}) => (
    <a style={style} href={href} className={styles.root} target='_blank' rel="noreferrer">
        {children}
    </a>
);

export default Link;
