//var age = 14;
var age = prompt("나이를 입력해주세요", "15")

if(age !== null){

if(age >= 15){
    document.write("드라마 관람가<br>");
}
else{
    document.write("드라마 관람불가<br>")
}
document.write("나이는" + age + "세 입니다.");
}else{
document.write("입력이 취소되었습니다.")
}