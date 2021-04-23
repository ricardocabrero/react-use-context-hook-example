import { useReducer } from 'react';
import { CounterContext } from "../useContext/CouterContext";
import MainRouter from "../routers/MainRouter";
import counterReducer from "../useReducer/counterReducer";

function Main() {
  
  const initialState = 0;
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{state, dispatch, initialState}}>
      <div className="Main">
        <MainRouter/>
      </div>
    </CounterContext.Provider>
  );
}

export default Main;
