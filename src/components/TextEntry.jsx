import React, { Fragment } from 'react';
import styles from '../styles/textentry.module.css';

export default function TextEntry() {
    return(
        <Fragment>
            <h1>UseContext Example</h1>
            <p className={styles.paragraph}>Sharing data between components with <em>UseContext</em> Hook.</p>
            <p>In this case the data of a <em>useReducer</em> is being shared between higher order components (pages).</p>
            <a className={styles.link} href="https://es.reactjs.org/docs/hooks-reference.html#usecontext" rel="noreferrer" target='_blank'>https://es.reactjs.org/docs/hooks-reference.html#usecontext</a>
        </Fragment>
    )
}