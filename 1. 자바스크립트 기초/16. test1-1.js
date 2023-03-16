var answer = 6;


    for (var count = 5; count >= 0; count--) {
        var number = +prompt(`1-50 사이의 무작위 숫자를 맞춰보세요 `)
        if (answer > number) {
            alert(`UP!!!`);
            alert(`${count} 기회가 남았습니다`)
        } else if (answer < number) {
            alert('DOWN!!!');
            alert(`${count} 기회가 남았습니다`)
        } else if (answer === number) {
            alert(`정답입니다!`);
            break;
        } 
        if (count === 0){
            alert(`기회가 모두 소진하였습니다 다음기회를 이용해주세요`);
            break;
        }
    }
    
    
