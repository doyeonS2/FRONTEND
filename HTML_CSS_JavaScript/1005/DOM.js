function newRegister() {
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // 폼의 텍스트 필드
    let newText= document.createTextNode(subject.value); // 텍스트 필드의 값으로 텍스트 노드 만들기
    newItem.appendChild(newText);

    let itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]); // insertBefore : 맨 앞에다 추가
    
    subject.value = "";
    let items = document.querySelectorAll("li");
    for(i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.parentNode) { // 부모 노드가 있다면
                this.parentNode.removeChild(this);
            }
        });
    }
}