

var n1 = `10`;
var n2 = `20`;

// js 에서는 0, '', null, undefined, NaN 는 거짓으로 판단한다.
// 이외 나머지는 전부 진실로 판단.   ' ' 띄어쓰기 있으면 진실.

// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ({name : `kim`}) console.log('ok10');