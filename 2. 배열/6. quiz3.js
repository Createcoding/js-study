//게임인원 등록
var member = +prompt('게임인원 (2 ~ 4명)');

//플레이어 이름 등록
alert('플레이어 이름을 등록합니다.');
var player = [];
for (var i = 1; i <= member; i++) {
    playerName = prompt(`${i}번 플레이어 이름 : `);
    player.push(playerName);
}
alert(`${player} 참가!`);


//실탄 개수 등록
var bullet = +prompt('실탄개수 (1 ~ 5개)');

//랜덤 플레이어 순서
var starting = Math.floor(Math.random() * member);

alert(`총을 받았습니다. ${player[starting]}부터 시작합니다.`);

    alert(`[${player[starting]}님]의 턴! 탄창을 회전합니다`);
    //격발하기
while (true) {
    alert(`[${player[starting]}님]의 턴! 탄창을 회전합니다`);
    var shot = prompt('# 엔터를 누르면 격발합니다.');

    starting++;
}