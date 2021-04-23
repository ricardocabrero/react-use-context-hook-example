import React, { useContext } from 'react';
import { CounterContext } from '../useContext/CouterContext';
import Counter from '../components/Counter';

export default function Home() {

    const { state, dispatch, initialState } = useContext(CounterContext);

    return(
        <div>
            <h2>Home Page</h2>
            <Counter counter={state} dispatch={dispatch} initialState={initialState}/>
        </div>
    )
}