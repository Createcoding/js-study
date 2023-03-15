var n1 = +prompt(`첫번째 숫자를 입력`);
var n2 = +prompt(`두번째 숫자를 입력`);

var total = 0;

while(n1 <= n2){
    total += n1;

    n1++;
}
console.log(`4 ~ 7 까지의 누적합 : ${total}`)

//x y 의 스왑방법
if (x > y){
    //swap
    var t;
    t = x;
    x = y;
    y = t;
}