import { useReducer } from "react";
import Counter from "../1013_JSX/Counter";

// 1개씩 Count(증가, 감소)
// function reducer(state, action) {
//     // action의 type에 따라서 다른 작업 수행
//     switch(action.type) {
//         case "INCREMENT":
//             return {value:state.value + 1};
//         case "DECREMENT":
//             return {value:state.value - 1};
//         default :
//             return state;
//     } 
// }

// 2개씩 증가, 감소
function reducer(state, action) {
    // action의 type에 따라서 다른 작업 수행
    switch(action.type) {
        case "INCREMENT":
            return {value:state.value + action.step};
        case "DECREMENT":
            return {value:state.value - action.step};
        default :
            return state;
    } 
}

const Reducer = () => {
    // 1개씩 증가, 감소
    // const [state, dispatch] = useReducer(reducer, {value:0});
    // return (

    //     <div>
    //         <p>현재 카운터 값은 <b>{state.value}</b></p>
    //     <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
    //     <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
    //     </div>
    // );

    // 2개씩 증가, 감소
    const [state, dispatch] = useReducer(reducer, {value:0});
    return (

        <div>
            <p>현재 카운터 값은 <b>{state.value}</b></p>
        <button onClick={()=>dispatch({type:"INCREMENT", step: 2})}>+2</button>
        <button onClick={()=>dispatch({type:"DECREMENT", step: 2})}>-2</button>
        </div>
    );


}
export default Reducer;