

// 자바스크립트는 일급객체 - 중첩함수로 내부에 함수를 만들어서 함수를 리턴할수있다

// function calculator(n1, n2) {

//     function add() {
//         return n1 + n2;
//     }

//     return add;   //add()는 return 값인 30을 던진것
// }


// function calculator(n1, n2){    // 위에를 줄인것.
//     return () => n1 + n2;   // 이걸 해석해보자 () 함수를 전달할게!   n1 + n2 를 리턴할거야
// }

// const calculator = (n1, n2) => () => n1 + n2; //위에를 다 줄인것.  클로저함수.



// const zzz = calculator(10, 20);  // add 함수자체를 받은것.
// console.log(zzz);

// const n = zzz();   // zzz()는  add() 와 같은것
// console.log(`n : ${n}`);   // 30


// let count = 0;  // 카운팅 변수 (전역 변수)

// // 카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());
// console.log(increase());

// count = 999; // 전역변수는 중간에 누가 개입해버리면 사이드이팩트를 가질수있다.

// console.log(increase());   // 3

// const increase = () => {
//     let count = 0;  //지역변수
//     return ++count;
// }

// console.log(increase());
// console.log(increase());
// console.log(increase());   // 3 이 안나온다. 지역변수는 함수호출이 끝나면 사라지기에 담을 변수가없기에. 
                            // 이럴때 클로저함수를 사용한다

// const increaseClosure = () => {  //클로저 함수

//     let count = 0; //지역 변수

//     return () => ++count;;  //헬프 함수를 만들고 헬프함수 리턴 
// };


// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());

// count = 999;    // 전역변수가 아니기에 바뀌지않는다.
// console.log(increase());  // 3


// 즉시 실행 함수 : 정의와 동시에 호출. (일회성이기에 무명함수)
const result = (function(n1, n2) {
    return n1 + n2;
})(5, 8);               // ()로감싸서 정의하고  ();로 호출

console.log(result);

const increase = (() => {   //어차피 헬프함수만 재사용하기에 이름이 필요없다.    

    let count = 0; //지역 변수

    return () => ++count;;  //헬프 함수를 만들고 헬프함수 리턴 
})();          // ()감싸고 바로 (); 호출

console.log(increase());
console.log(increase());
console.log(increase());
