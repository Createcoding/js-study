// 1. 한 변의 길이를 입력받는다.
var length = 3;

var star = '';
// 2. 
for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);