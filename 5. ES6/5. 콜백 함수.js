

// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n){

    for (let i = 1; i <= n; i++){
        if(i % 2 === 0) console.log(i);
    }

}
showEvenNumber(10);

function showOddOrEvenNumber(n, delim){

    for (let i = 1; i <= n; i++){
        if(i % 2 === delim) console.log(i);
    }

}

function showMultipleNumber(n, multiNumber){

    for (let i = 1; i <= n; i++){
        if(i % multiNumber === 0) console.log(i);
    }

}
console.log('============================');
function showNumber(n, code){

    for (let i = 1; i <= n; i++){  //공통적으로 하는일인 for문 
        if(code(i)) {   //개별적으로 하는일인 if 조건식을 코드로 넣을순없을까?
            console.log(i);
        }
    }

}

function test(n){
    return n % 3 === 0;
}

showNumber(20, n => n % 2 === 0 && n % 6 === 0);


//showOddOrEvenNumber(10 , 0);

function showMessage(message, howTo){
    // 공통기능
    document.body.style.background = 'gray';

   
    // 개별기능
   howTo(message);

   


    // 공통기능
    alert('하하호호'); // 비동기코드는 코드가 바로 실행됨.
}

showMessage('메롱메롱', function(m){
    const answer = prompt(m);
    if(answer === '즐'){
        alert('음 그렇구나')
    } else
        alert('고맙구나');
});