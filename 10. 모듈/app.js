
// 외부 js 불러오기
// import {add} from './foo.js';   // foo.js 에서 add만 가져오기
// import {x} from './bar.js';     // bar.js 에서 x만 가져오기
//둘다 가져오고 싶을때
import * as foo from './foo.js';   // foo.js 에서 둘다 가져오기 호출할때도 .으로 가져오기


// 메인 실행 파일 app.js
// 실행 코드만 입력: 함수 호출
// 함수정의, 클래스정의, 변수정의 XXXX

console.log(foo.add(10,20));   // 호출
// gameStart();
// console.log(add(10, 20));
console.log(`x1: ${bar.x}`);
console.log(`x2: ${add.x}`);