import React, { useContext } from 'react';
import { CounterContext } from '../useContext/CouterContext';
import Counter from '../components/Counter';

export default function About() {

    const { state, dispatch, initialState } = useContext(CounterContext);

    return(
        <div>
            <h2>About Page</h2>
            <Counter counter={state} dispatch={dispatch} initialState={initialState}/>
        </div>
    )
}