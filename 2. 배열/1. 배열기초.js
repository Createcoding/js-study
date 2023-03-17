

var a = 10;
var b = a;

a = 15;

console.log(b);

console.log(`====================`);

var arr1 = [1,2,3,4];
var arr2 = arr1;

arr1[1] = 999;
arr2[0] = 77;

console.log(`arr1:`, arr1);
console.log(`arr2:`, arr2);

console.log(`====================`);

// 배열의 생성
// 배열 변수 이름 관례: 복수형, list 어미
var fruits = ['오렌지'
            ,'라임'
            ,'레몬'
        ];  // 배열 리터럴



console.log(fruits);