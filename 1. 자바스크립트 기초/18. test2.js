// 정답,틀린횟수
var Tcount = 0;
var Fcount = 0;

// 랜덤 숫자들이 입력된다.
alert('재미있는 사칙연산 게임~~~ 즐겁게 문제를 푸시다가 지겨우면 0을 누르세요')


// 난이도 설정
var level = +prompt('난이도를 선택하세요! [1. 상(1~100) | 2. 중(1~50) | 3. 하(1~20) ]');
var HIGH = 1;
var MIDDLE = 2;
var LOW = 3;

// 사용자 입력답
while (answer !== 0) {
    for (var x = 1; x <= 100; x++) {
        if (level === HIGH) {
            var number1 = Math.floor(Math.random() * 100) + 1;
            var number2 = Math.floor(Math.random() * 100) + 1;
        } else if (level === MIDDLE) {
            var number1 = Math.floor(Math.random() * 50) + 1;
            var number2 = Math.floor(Math.random() * 50) + 1;
        } else if (level === LOW) {
            var number1 = Math.floor(Math.random() * 20) + 1;
            var number2 = Math.floor(Math.random() * 20) + 1;
        }
        // 사칙연산 랜덤 설정
        if (x === 1) {
            var result = number1 + number2;
            var answer = +prompt(`Q${x}. ${number1} + ${number2} = ??`);
        }
        if (x === 2) {
            var result = number1 * number2;
            var answer = +prompt(`Q${x}. ${number1} * ${number2} = ??`);
        }
        if (x === 3) {
            var result = number1 * number2;
            var answer = +prompt(`Q${x}. ${number1} - ${number2} = ??`);
        }

        if (answer === 0) {
            alert(`게임을 종료합니다`);
            break;
        }
        if (result === answer) {
            alert(`정답입니다`);
            Tcount++;
        } else {
            alert(`틀렸어요~~!`);
            Fcount++;
        }

    }
}
alert(`정답횟수 ${Tcount} , 틀린횟수 ${Fcount}`);