

// x ~ y 까지의 총합을 구하는 함수
/*
    parameter: 
    -begin : 누적총합의 시작값
    -end : 누적총합의 끝값

    return : 계산된 총합
*/
//만약 값을 하나만 주면?(3)  begin에는 3 들어가는데 y는 undefined   
//값을 더 많이 주면? (1,5,10)  begin end 에도 들어가고 나머지값 10 은 다른데 객체로 들어가있다.

// 매개변수(parameter): 함수를 정의할 때 외부에서 받아오는 값을 저장할 변수
function calcRangeTotal(begin,end){

    console.log(`x: ${begin} y: ${end}`);
    var total = 0; //총합을 지정할 변수
    for(var i = begin; i <= end; i++){
        total += i;
    }
    return total;
}


// 인수 (argument) : 함수를 호출할때 함수에게 전달하는 값이나 표현식
var result1 = calcRangeTotal(1,10);
console.log(result1);

// 매개변수의 기본값 
// ES6
function sayHello(language='한국어'){ //아무것도 안들어올시 '한국어' 들어오면 수정됨
    // ES5
    language = language || '한국어';  //첫번째 truty 를 찾는 or 단축평가

    if(language === '한국어'){
        console.log('안녕하세요!');
    } else if (language === '영어'){
        console.log('HELLO!');
    } else if (language === '중국어'){
        console.log('따지하오~');
    } else {
        console.log('크크루삐오');
    }
}
sayHello('중국어');

//EX ) arr [10, 20, 30, 40, 50]
function mySlice(arr, start, end){
    //사본 배열 생성
    var copyArr = [];
    for(var i = start; i < end; i++){
        copyArr.push(arr[i]);
    }
    return copyArr;
}
var newArr = mySlice([10,20,30,40,50], 1, 3);
console.log(newArr);

// 매개변수가 없는 함수
function selectRandomPet(){
    var pets = ['멍멍이', '짹짹이', '쎅쎅이', '어흥이'];
    
    return pets[Math.floor(Math.random() * pets.length)];
}
var randomPet = selectRandomPet();
console.log(`랜덤동물 : ${randomPet}`);