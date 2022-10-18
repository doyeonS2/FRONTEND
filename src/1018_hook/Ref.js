// useRef : 아이디 용도 보다는 포커스 주는 용도로 많이 씀

import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = nums => { 
    console.log("평균값 계산 중..")
    if(nums.length === 0) return 0;
    const sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
}

const Ref = () => { 
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);
    const inputEl = useRef(null); // 인풋엘리먼트를 useRef로..

    const onChange = useCallback(e  => { 
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => { 
        const nextList = list.concat(parseInt(number)); 
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); 

    const avg = useMemo(() => getAverage(list), [list]); 

    return (
        <div>
            {/* onInsert가 눌려지면 인풋엘리먼트에 포커스를 집어넣는다! */}
            {/* ref에 이름을 넣고 아이디 값으로도 사용 가능하다. */}
            <input value={number} onChange={onChange} ref={inputEl} /> 
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
                <p><b>평균값 : </b>{avg}</p> 
        </div>
    );
}
export default Ref;