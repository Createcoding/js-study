
/*
const increase = (()=> { //클로저1
    let count = 0;
    return () => ++count;
})();


const decrease = (()=> {  //클로저2
    let count = 0;
    return () => --count;
})();

console.log(increase()); // increase,decrease 다른 클로저이기에 둘의 카운트값은 공유되지않는다.
console.log(increase()); // 2
console.log(decrease());
console.log(decrease()); // -2
*/


// const counterClosure = () => {  // 2개 카운트값을 공유하는법.

//     let count = 0;
   
//     // 두개를 동시에 리턴해야한다. 객체에 담아서
//     return {
//         increase: () => ++count,
//         decrease: () => --count
//     };
// };
/*
const counter = (() => {    

    let count = 0;
 
    return {
        increase: () => ++count,
        decrease: () => --count
    };
})();

const {increase, decrease} = counter;


console.log(increase());
console.log(increase());  //2 
console.log(decrease());  //1  counter 가 공유되서 값이 전달됨.
*/

// function counterWithCbClosure() {  //조작하는 도구를주는것
    
//     let count = 0;  // count 라는 상태관리 변수

//     function process(callback) { //리모콘을 커스텀해줘야함 
//         return count = callback(count);  //콜백 커스텀함수를 만들어서 리턴.
//     }

//     return process;  //상태관리하기위한 리모콘
// }

// 위에꺼 리팩토링.
const counter_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));    // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2));// 16

