// for(let i = 2; i <10; i++) {
//     document.write("<table>");
//     document.write("<tr><th>" + i + "단</th></tr>");
//     for(let j = 1; j < 10; j++) {
//         document.write("<tr><td>" + i + " x " + j + " = " + (i*j) + "</td></tr>");
//     }
//     document.write("</table>")
// }

//------------------------------------------
// while문 : 조건이 참인동안 돌아감!

let treeHit = 0;
while(treeHit < 10) {
    treeHit++;
    document.write("<p>나무를 " + treeHit + "번 찍었습니다. </p>");
    if(treeHit == 10) {
        document.write("<h2>나무가 넘어갑니다.</h2>")
    } 
}