// 문제
// 영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤, 대문자는 소문자로, 
// 소문자는 대문자로 바꾸어 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.

// 출력
// 첫째 줄에 입력으로 주어진 단어에서 대문자는 소문자로, 소문자는 대문자로 바꾼 단어를 출력한다.

function inputVal() {
    let inputValue = document.getElementById("inputValue").value;
    대소문자변환(inputValue);
    // document.getElementById("value").innerHTML = inputValue;
}

function 대소문자변환(val) {
    let arr = [];
    for(let i = 0; i < val.length; i++) {
        if(val.charCodeAt(i) < 97) arr[i] = String.fromCharCode(val.charCodeAt(i) + 32);
        else arr[i] = String.fromCharCode(val.charCodeAt(i) - 32);
    }
    const str = arr.join('');
    document.getElementById("value").innerHTML = "결과 : " + str;
}