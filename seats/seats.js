var customer = prompt("입장객은 몇 명인가요?");
var colnum = prompt("한 줄에 몇 명씩 앉나요?");
var rownum;

// 입장객 수에 따른 행과 열 계산
if(customer % colnum === 0)
    rownum = parseInt(customer / colnum);
else
    rownum = parseInt(customer / colnum) + 1;
    
// 좌석 번호 배치
document.write("<table>")
for(var i=0; i<rownum; i++){ // 행
    document.write("<tr>")
    for(var j=1; j<=colnum; j++){ // 열
        var seatnum = i*colnum+j
        if(seatnum > customer)// 좌석번호가 입장객수를 초과할 때 탈출
            break;
        document.write("<td>좌석" + seatnum + "</td>");
    }
    document.write("<tr>")
}
document.write("</table>")