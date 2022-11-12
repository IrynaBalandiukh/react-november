import React, {useReducer} from 'react';

const init = (initState) => {
    return {count1: initState, count2: initState, count3: initState}
}

const reducer = (state, action) => {
    switch (action.type) {
        // case 'inc1':
        //     return {...state, count1: state.count1++}
        // case 'inc2':
        //     return {...state, count2: state.count2++}
        // case 'inc3':
        //     return {...state, count3: state.count3++}
        //
        // case 'dec1':
        //     return {...state, count1: state.count1--}
        // case 'dec2':
        //     return {...state, count2: state.count2--}
        // case 'dec3':
        //     return {...state, count3: state.count3--}

        case 'counter1':
            return {...state, count1: state.count1 + action.payload}
        case 'counter2':
            return {...state, count2: state.count2+action.payload}
        case 'counter3':
            return {...state, count3: state.count3+action.payload}

        case 'res1':
            return {...state, count1: 0}
        case 'res2':
            return {...state, count2: 0}
        case 'res3':
            return {...state, count3: 0}

        case 'set1':
            return {...state, count1: action.payload}
        case 'set2':
            return {...state, count2: action.payload}
        case 'set3':
            return {...state, count3: action.payload}

        default:
            console.error('невідомий тип')
            return state
    }
}

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>
                {state.count1}
                <button onClick={()=>dispatch({type: 'counter1', payload: 1})}>inc</button>
                <button onClick={()=>dispatch({type: 'counter1', payload: -1})}>dec</button>
                <button onClick={()=>dispatch({type: 'res1'})}>reset</button>
                <button onClick={()=>dispatch({type: 'set1', payload: 10})}>reset</button>
            </div>
            <div>
                {state.count2}
                <button onClick={()=>dispatch({type: 'counter2', payload: 1})}>inc</button>
                <button onClick={()=>dispatch({type: 'counter2', payload: -1})}>dec</button>
                <button onClick={()=>dispatch({type: 'res2'})}>reset</button>
                <button onClick={()=>dispatch({type: 'set2', payload: 10})}>reset</button>
            </div>
            <div>
                {state.count3}
                <button onClick={()=>dispatch({type: 'counter3', payload: 1})}>inc</button>
                <button onClick={()=>dispatch({type: 'counter3', payload: -1})}>dec</button>
                <button onClick={()=>dispatch({type: 'res3'})}>reset</button>
                <button onClick={()=>dispatch({type: 'set3', payload: 10})}>reset</button>
            </div>
        </div>
    );
}

export {Counters};