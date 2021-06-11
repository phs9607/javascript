//var age = 12;
var age = prompt("나이를 입력해주세요")
var charge; //입장료

//조건문 코딩
if(age !== null){
if(age < 8){
    document.write("미취학 아동입니다.<br>")
    charge = 1000;      
}
else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>")
    charge = 2000;         
}
else if(age >= 14 && age < 20){
    document.write("중,고등학생입니다.<br>")
    charge = 2500;
}
else{
    document.write("일반인입니다.<br>")
    charge = 3000;
}
document.write("입장료는 <span clas='accent'>" + charge + "</span>원입니다.");
}else{
document.write("입력이 취소되었습니다.")
}