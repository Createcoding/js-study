const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
/*
// emp. 을 쓰기싫을때
const {empName, birthDay, age} = emp;  //객체는 key값으로 넣기에 순서 상관없다!!.
*/

// emp도 지우고싶을때(변수이름을 바꾸고싶다)
const {
    empName: name,
    birthDay: day,
    age: a
} = emp;

console.log(`${name}님의 나이는 ${a}살이고 생일은 ${day}입니다`);

console.log('=====================');

// 스프레드
const {
    birthDay,
    age,
    ...rest
} = emp;

console.log(birthDay);
console.log(age);
console.log(rest);

// 객체 안전 복사 : 스프레드
const copyEmp = {
    ...emp
};

// 복사하면서 추가 프로퍼티도 가능
const copyEmp1 = {
    ...emp,
    address: '서울시',
    hobbies: ['놀고먹기','잠자기'],
    empName: '망둥어'    // 수정도 가능
};
console.log(copyEmp1);