

var x = 10;  //전역변수

// 매개변수도 지역 스코프를 가짐
function foo(z) {
    //var x;    
    console.log(`지역변수 x 선언전: ${x}`);
    console.log(x);  
    var y = 20 + x;
    console.log(y-z); //지역변수

    var x = '홍길동'    // 함수 맨위에 var x; 를 생성한것과 같은뜻이다.
    console.log(`지역변수 x 선언후: ${x}`);

}

foo(50);    // 호출이 끝난순간 지역변수들 죽음

console.log(`함수 호출후 x의 값: ${x}`);


// 중첩 함수 : 함수안에 함수를 정의

function outer(m) {

    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);
    // 헬퍼 함수 : 바깥쪽 함수를 도와주는 함수(호출이 함수내부로 제한)
    function inner(){ 
        console.log(n);     //함수내부에 지역변수 사용가능
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    }

    inner();
 

}
var m = 'global m';

outer('outer param m');