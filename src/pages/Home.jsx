import React, { useContext, useEffect, useRef } from 'react';
import { transitionOpacity, transitionFromLeft } from '../animations/gsapAnimations';
import { CounterContext } from '../useContext/CouterContext';
import Counter from '../components/Counter';

export default function Home() {

    const { state, dispatch, initialState } = useContext(CounterContext);

    const mainRef = useRef(null);

    useEffect(() => {

        transitionOpacity(mainRef.current, 0, 1, 1);
        transitionFromLeft(mainRef.current, -50, 0, 1);

    }, []);

    return(
        <div ref={mainRef}>
            <h2>Home Page</h2>
            <Counter counter={state} dispatch={dispatch} initialState={initialState}/>
        </div>
    )
}