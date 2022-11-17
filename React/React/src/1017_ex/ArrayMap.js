// Map이란 : 파라미터로 전달된 함수를 사용해서 배열 내의 각 요소를 규칙에 따라 변환 후 새로운 배열 생성

// let arr = [3,4,5,6,7];
// let newArr = arr.map(e => e * 3); // 3 * 3 한 값이 newArr에 저장되어서 9 * 3 이 되는 것..

// const ArrayMap = () => {
//     const numbers = [1,2,3,4,5,6,7];
//     const listItems = numbers.map(e => <li>{e * 3}</li>)
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// export default ArrayMap;

// const ArrayMap = () => { 
//     const numbers = [1,2,3,4,5,6,7];
//     const names = ["박지훈", "옹성우", "배진영", "하성운", "황민현", "김재환", "윤지성"];
//     const listItems = names.map(e => <li>{e}</li>)
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// export default ArrayMap;

const ArrayMap = () => {
    const names = [
        {firstName: "다니엘", lastName: "강"},
        {firstName: "우진", lastName: "박"},
        {firstName: "대휘", lastName: "이"}

    ];
    const fullNames = names.map(e => <div>{e.lastName}{e.firstName}</div>);

    return (
        <h3>{fullNames}</h3>
    )
}
export default ArrayMap;


