//상세 설명 보기 클릭 - 텍스트 보이기
function showtext(){
    var text = document.getElementById("desc");
    text.style.display = "block";

    var button = document.getElementById("btn");
    button.style.display = "none";
}

function hidetext(){
    var text = document.getElementById("desc");
    text.style.display = "none";

    var button = document.getElementById("btn");
    button.style.display = "block";
}