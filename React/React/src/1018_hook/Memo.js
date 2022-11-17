// useMemo : 컴포넌트의 최적화를 위한 Hook (불필요한 렌더링을 막음)

import { useState, useMemo } from "react";

const getAverage = nums => { // 매개변수 두개일때는 감싸지만 하나일때는 그냥 써도 됨!
    console.log("평균값 계산 중..")
    if(nums.length === 0) return 0;
    // 배열의 각 요소를 순회하면서 callback 함수의 실행 결과를 누적하여 하나의 결과값을 반환
    const sum = nums.reduce((a, b) => a + b);
    return sum / nums.length;
}

const Memo = () => { // 컴포넌트 이름은 항상 대문자로 시작!
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => { // 값이 바뀌면 onChange가 이 함수를 불러줌!
        setNumber(e.target.value);
    }
    const onInsert = e => {
        const nextList = list.concat(parseInt(number)); // concat : 불변성이기 때문에 값을 대입하면 값을 복사해서 새로운 주소를 만듦 => 주소가 달라짐
        // 내부가 바뀐다고해서 주소도 바뀌지 않음 => 주소가 안바뀌면 안바뀐걸로 판단! => 복제해야함(concat 사용)
        setList(nextList);
        setNumber('');
    }

    // 등록 버튼 누를때만 렌더링 (계산되게)! (인풋 창에 쓰기만 했을때면 계산X)
    const avg = useMemo(() => getAverage(list), [list]); // [] 의존성 배열? 내가 불렀을때만 호출되게..

    // // 이렇게 두가지 조건 다 넣으면 원래대로 돌아감(?)
    // const avg = useMemo(() => getAverage(list), [list, number]);


    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
                {/* <p><b>평균값 : </b>{getAverage(list)}</p> */}

                {/* 등록 버튼 누를때만 계산되게! */}
                <p><b>평균값 : </b>{avg}</p> 
        </div>
    );
}
export default Memo;