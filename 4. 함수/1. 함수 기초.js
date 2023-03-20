// console.log('김두한님 방가방가');
// console.log('좋은하루되세요');
//100줄 코딩

//3000줄 코딩

//함수 정의 -> 만든다
function happyGreeting(yourName) {
    console.log(`${yourName} 님 방가방가 ㅈㅈ`);
    console.log('좋은하루되세요');
}
//함수 호출 -> 사용한다
happyGreeting('뽀로로');

function makeLine() {
    console.log('===========================');
}

for (var i = 0; i < 5; i++) {
    makeLine();
}

// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2 함수화
function calcAreaCircle(r) {
    console.log('야!!!');
    var PI = 3.14159265; 
    var area = PI * r ** 2;
    return area;
}

var r1 = calcAreaCircle(5);
//호출이 될때 코드가 실행되는것
//코드가 실행이 끝나면 return 된 값을 호출한 함수에 전달해준다.
//호출한 함수를 변수에 저장하면 return값이 저장되있음.
console.log(r1);

var r2 = calcAreaCircle(15);
console.log(r2);
var r3 = calcAreaCircle(20);