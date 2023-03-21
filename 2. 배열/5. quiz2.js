//아래 요구사항에 맞는 코드를 작성하세요

/*
1. 변수에 배열 ['유노윤호','최강창민','영웅재중','믹키유천','시아준수']
2. 사용자에게 삭제할 멤버이름을 입력받고 해당멤버를 배열에서 삭제.
3. 배열에 없는 이름을 입력하면 xx는 잘못된 이름입니다.
4. 전체멤버를 전부 삭제할때까지 순회.
*/

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

// while (true) {
//   var removeName = prompt(`[${tvxq}]삭제할 멤버이름을 입력하세요.`);
//     if (tvxq.includes(removeName)){
//       //존재한다면
//       tvxq.splice(tvxq.indexOf(removeName),1);
//       alert(`${removeName} 멤버 삭제 완료`);
//     }else
//       alert(`${removeName} 멤버 이름을 다시 입력해주세요.`)

//     if(tvxq.length === 0){
//       alert('모든 멤버가 삭제되었습니다')
//       break;
//     }
// }


//수정하기
while(true){
  var modName = prompt(`[${tvxq}]수정할 멤버이름을 입력하세요.`);

  if (tvxq.includes(modName)){
    var newName = prompt(`새로운 멤버이름을 입력하세요.`);
     tvxq[tvxq.indexOf(modName)] = newName;
     alert(`수정완료! 현재멤버 : [${tvxq}]`)
     break;
  } else 
  alert(`${modName} 멤버 이름을 다시 입력해주세요.`)
  

}