function 상품구매(항목, 가격, 수량, callback) {
    console.log(항목 + "를 " + 수량 + "개 구매하였습니다.");
    setTimeout(function() {
        console.log("계산이 필요합니다.");
        let 전체금액 = 가격 * 수량;
        callback(전체금액);
    }, 2000); // 2000: 2초 대기(점원이 계산할 시간)
}
function 지불금액(금액) {
    console.log("지불할 금액은 " + 금액 + "원 입니다.");
}
상품구매("밤고구마", 1000, 5, 지불금액);