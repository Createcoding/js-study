
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


function counterClosure() {  // 2개 카운트값을 공유하는법.

    let count = 0;

    function increase() {
        return ++count;
    }
    function decrease() {
        return --count;
    }
    // 두개를 동시에 리턴해야한다. 객체에 담아서

    return {
        increase: increase,
        decrease: decrease
    };
}

const counter = counterClosure();
const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase());
console.log(increase());  //2 
console.log(decrease());  //1  counter 가 공유되서 값이 전달됨.