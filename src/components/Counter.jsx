import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/counter.module.css';

export default function Counter({counter, dispatch, initialState}) {

    const decrement = () => {
        dispatch({ type: 'decrement' });
    }

    const increment = () => {
        dispatch({ type: 'increment' });
    }

    const restart = () => {
        dispatch({ type: 'restart', payload: initialState });
    }

    return(
        <div className={styles.counter}>
            <button 
            disabled={counter === 0 && 'disabled'} 
            onClick={decrement}>Decrement</button>
            <p>{counter}</p>
            <button className={styles.left}
            onClick={increment}>Increment</button>
            <button 
            className={styles.right}
            disabled={counter === 0 && 'disabled'}
            onClick={restart}>Restart</button>
        </div>
    )
}

Counter.propTypes = {
    counter: PropTypes.number,
    dispatch: PropTypes.func,
    initialState: PropTypes.number,
}