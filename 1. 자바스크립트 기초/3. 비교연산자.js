
var a = 5;
var b = '5';   //문자열 5 는 유니코드로 27

console.log(a == b);   // 이건 쓰지말자
console.log(a === b);   // 이게 값 비교이다.
console.log(a !== b);   // 이게 다르다고 하는것

// == 비교는 결과 예측이 어려움
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자 대소비교
console.log('================');
console.log('ace' < 'ade');   // true  c보다 d가 크기에

if (!FoodList.contains('오뎅')) {}
