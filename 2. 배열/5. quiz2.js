//아래 요구사항에 맞는 코드를 작성하세요

/*
1. 변수에 배열 ['유노윤호','최강창민','영웅재중','믹키유천','시아준수']
2. 사용자에게 삭제할 멤버이름을 입력받고 해당멤버를 배열에서 삭제.
3. 배열에 없는 이름을 입력하면 xx는 잘못된 이름입니다.
4. 전체멤버를 전부 삭제할때까지 순회.
*/

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];



while (true) {
  var removeName = prompt(`[${tvxq}]삭제할 멤버이름을 입력하세요.`);
  for (var tv of tvxq) {
    if (tvxq.includes === removeName) {
      tvxq.slice(tvxq.indexOf, 1)
      alert(`${removeName}멤버가 삭제되었습니다`);
      break;
    } else
      alert(`${removeName}이름이 맞지않습니다 다시 입력해주세요`);
  }
}