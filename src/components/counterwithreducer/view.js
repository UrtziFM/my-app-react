import React, { useReducer } from 'react';
//import { useParams } from 'react-router-dom';


const InitialState = { count: 0 };

//function init (initialCount){
//    return { count: initialCount };
//}

function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count +1 };
        case 'decrement':
            return { count: state.count -1 };
        //case 'reset':
        //    return init(action.payload);
        default:
            throw new Error();
    }
}
export const CounterCardReducer = function () {
    //const initialValue = Number(useParams().initialValue);
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
    );
}

export default CounterCardReducer