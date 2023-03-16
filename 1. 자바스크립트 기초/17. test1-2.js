var answer = 6;

var level = +prompt(`난이도를 설정하세요 1.상 (기회 3번) 2. 중 (기회 2번) 3. 하 (기회 1번)`);
var count;

if (level === 1) {
        count = 3;
    for (var x = count; x >= 0; x--) {
        var number = +prompt(`1-50 사이의 무작위 숫자를 맞춰보세요 `)
        if (answer > number) {
            alert(`UP!!!`);
            alert(`${x} 기회가 남았습니다`)
        } else if (answer < number) {
            alert('DOWN!!!');
            alert(`${x} 기회가 남았습니다`)
        } else if (answer === number) {
            alert(`정답입니다!`);
            break;
        }
        if (x === 0) {
            alert(`기회가 모두 소진하였습니다 다음기회를 이용해주세요`);
            break;
        }
    }
} else if (level === 2){
    count = 2;
    for (var x = count; x >= 0; x--) {
        var number = +prompt(`1-50 사이의 무작위 숫자를 맞춰보세요 `)
        if (answer > number) {
            alert(`UP!!!`);
            alert(`${x} 기회가 남았습니다`)
        } else if (answer < number) {
            alert('DOWN!!!');
            alert(`${x} 기회가 남았습니다`)
        } else if (answer === number) {
            alert(`정답입니다!`);
            break;
        }
        if (x === 0) {
            alert(`기회가 모두 소진하였습니다 다음기회를 이용해주세요`);
            break;
        }
    }
} else if (level === 1){
    count = 1;
    for (var x = count; x >= 0; x--) {
        var number = +prompt(`1-50 사이의 무작위 숫자를 맞춰보세요 `)
        if (answer > number) {
            alert(`UP!!!`);
            alert(`${x} 기회가 남았습니다`)
        } else if (answer < number) {
            alert('DOWN!!!');
            alert(`${x} 기회가 남았습니다`)
        } else if (answer === number) {
            alert(`정답입니다!`);
            break;
        }
        if (x === 0) {
            alert(`기회가 모두 소진하였습니다 다음기회를 이용해주세요`);
            break;
        }
    }
}