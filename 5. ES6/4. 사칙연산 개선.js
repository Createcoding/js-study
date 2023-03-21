/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/

// 난이도 설정
function selectGameLevel(){
    
    let level = +prompt(`~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
    [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`);

    let maxNumber;
    
    if(level === 1){
        maxNumber = 100;
    } else if (level === 2){
        maxNumber = 50;
    }else if (level === 3){
        maxNumber = 20;
    } else {
        maxNumber = 9999;
    }

}

function markGame(selectGameLevel){
    
    while(true){
        //랜덤 정수 생성
        let firstNumber = Math.floor(Math.random() * selectGameLevel.maxNumber) + 1;
        let secondNumber = Math.floor(Math.random() * selectGameLevel.maxNumber) + 1;

        //랜덤 부호 결정할 정수 생성
        let markNum = Math.floor(Math.random() * 3);

        //기호를 저장할 변수
        let mark;
        //실제 정답
        let realAnswer;

        if(markNum === 0){
            mark = '+';
            realAnswer = firstNumber + secondNumber;
        }else if (markNum === 1){
            if (firstNumber === secondNumber) continue;
        }else if (firstNumber < secondNumber){
            var temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp;
        }
        mark = '-';
        realAnswer = firstNumber - secondNumber;
    } else {
        mark = 'x';
        realAnswer = firstNumber * secondNumber;
    }

    }

}