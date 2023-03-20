// return 탈출문
// function callName(nickName) {

//     var prohibits = ['멍청이', '돌아이', '홍길동'];

//     if (prohibits.includes(nickName) {
//             console.log('잘못된 닉네임을 입력하셨습니다');
//             return; //반복문 안쓰는데 탈출하고싶을때.
//         }
//         console.log(`${nickName}님 안녕하세요!`);
//     }

//     callName('돌아이');

    function stopLoop(flag) {

        while (true) {
            var flag = prompt('명렁어를 입력하세요!');
            if (flag === '멈춰') {
                return;   //break보다 강력해서 함수 자체를 끝내버림 
            }
            alert(flag);
        }
        alert('수고용~');
    }

    stopLoop();