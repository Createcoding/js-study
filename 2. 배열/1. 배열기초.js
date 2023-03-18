

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

//배열 요소 수정
fruits[1] = '파인애플';

//수정시 주의사항
// fruits[4] = '초콜릿';
// console.log(fruits);

// 배열 내부데이터 전체 참조 (순회 : travis)
// 선형(무작위) 탐색 : 순차적으로 확인해보면서 찾기

var target = '바나나';
// 찾았는지에 대한 여부
var findflag = false;
    for(var i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
    
    if (fruits[i] === target){
        console.log(`${target} 과일은 존재함!`);
        findflag = true;
        break;
    } 
}
if (!findflag) console.log(`${target} 과일 없음!`);

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월', '화', '수',
                '목', '금', '토', '일']


console.log('==============');

// for(var i = 0; i <weekDays.length; i++){
//     console.log(`${weekDays[i]}요일!`);
// }

for (var day of weekDays){
    console.log(`${day}요일!`);
}