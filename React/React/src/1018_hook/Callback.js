
// useCallback 추가.. (함수 중간에다 끼워넣는다.. 의존성배열에 따라서 불려진다?)
import { useState, useMemo, useCallback } from "react";

const getAverage = nums => { 
    console.log("평균값 계산 중..")
    if(nums.length === 0) return 0;
    const sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
}

const Callback = () => { 
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e  => { 
        setNumber(e.target.value);
    }, []);

    // useCallback 내부를 보고 호출할지? 말지? 결정.. 
    const onInsert = useCallback(e => { 
        const nextList = list.concat(parseInt(number)); 
        setList(nextList);
        setNumber('');
    }, [number]); // 넘버값이 변경됐을때만 실행

    const avg = useMemo(() => getAverage(list), [list]); 

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
                <p><b>평균값 : </b>{avg}</p> 
        </div>
    );
}
export default Callback;