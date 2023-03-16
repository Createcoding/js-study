
    var number1 = Math.floor(Math.random() * 20)+1;
    var number2 = Math.floor(Math.random() * 20)+1;
    var result = number1+number2;
    alert('재미있는 사칙연산 게임~~~ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요')

    var reply = prompt(`Q1. ${number1} + ${number2} = ??`);
    if (result===reply){
        alert(`정답입니다`);
    }

