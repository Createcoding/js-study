
// 변수 정의, 함수 정의만.  단독으로 외부함수 호출 x
// 내부(서브)함수 호출은 O

let x = 'foo'; // 전역변수
// console.log(x);   디버깅 코드도 다빼기


function add(n1, n2) {
    return n1 + n2;
}

// 여기서 정의된 변수와 함수를 내보내기
export { x, add };