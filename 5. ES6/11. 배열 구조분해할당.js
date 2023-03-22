

const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park] = userNames; // 구조 분해 할당 

console.log(kim);
console.log(kang);
console.log(park);

// 객체 여러개있을때 순서대로 첫번째 객체만 가져옴
const [firstObj] = [{id: 1},{id: 2},{id: 3}]
                    .filter(obj => obj.id >= 2);   //필터링을 넣을수도있다.

console.log(firstObj);


// 변수 교환하기
let first = 10, second = 20;
//const temp = first; // 원래는 백업(빈그릇)을 해놓고 교환하는데 
[second, first] = [first, second];   // 구조분해할당을 이용하면 쉽게 가능

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1, 3, 5, 7, 9, 11];

const [one, two, ...others] = numbers;
console.log(one);
console.log(two);
console.log(others);

/*
// 위랑 같은결과
const copyNumbers = numbers.slice();

const one = copyNumbers.shift();
const two = copyNumbers.shift();
const others = copyNumbers;
console.log(one);
console.log(two);
console.log(others);
*/

// 스프레드(펼쳐서넣기)로 배열 간편복사
console.log('==================');

const foods = ['감튀', 'DQPC', '징거버거'];

// const copyFoods = foods;  // 이건 배열 주소를 복사한것이다. 값을 바꿀시 둘다바뀜

const copyFoods = [...foods];  //...foods - foods안에있는걸 펼쳐서 넣음.
foods[0] = '콜라';

const copyFoods1 = [...foods, '사이다', '주스']  //이런식으로도 넣을수있다

console.log(copyFoods1);
console.log(foods);
