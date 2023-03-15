

// 1 ~ 100 의 난수 
/*
    Math.random() * 100 // 0.0이상  100.0 미만

    난수 공식 : x이상 y이하의 정수의 난수
    Math.floor(Math.random() * (y - x + 1)) + x
   
*/
var age = Math.random();  //0.0이상 1.0미만 실수
Math.floor(Math.random() * 100);  // 0이상 100미만 정수
Math.floor(Math.random() * 100) + 1;  // 1이상 101 미만(1~100) 정수



alert(`age : ${age}살`);

//var age = +prompt('당신의 나이는?')
//alert(`내 나이: ${age + 1}살`);

if (age > 19)  { 
    alert(`성인입니다`);
    alert(`주류를 구매할 수 있습니다`);
} 
else if (age >= 17) {
    alert(`고딩입니다.`);
}
else if (age >= 14) {
    alert(`중딩입니다`);
}
