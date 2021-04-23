import React, { useContext, useEffect, useRef } from 'react';
import { transitionOpacity, transitionFromLeft } from '../animations/gsapAnimations';
import { CounterContext } from '../useContext/CouterContext';
import Counter from '../components/Counter';

export default function Contact() {

    const { state, dispatch, initialState } = useContext(CounterContext);

    const mainRef = useRef(null);

    useEffect(() => {

        transitionOpacity(mainRef.current, 0, 1, 1);
        transitionFromLeft(mainRef.current, -50, 0, 1);

    }, []);

    return(
        <div ref={mainRef}>
            <h2>Contact Page</h2>
            <Counter counter={state} dispatch={dispatch} initialState={initialState}/>
        </div>
    )
}