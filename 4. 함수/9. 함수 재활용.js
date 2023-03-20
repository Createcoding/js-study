

// 배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element){

    for(var i = 0; i < arr.length; i++){
        if(element === arr[i]){
            return i;
        }
    }

    return -1;
}


function myIncludes(arr, element){

    return myIndexOf(arr, element) !== -1;
}

var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];

var idx = myIndexOf(foodList, '고추잡채');  //idx = 1 을 리턴해주면 좋겠다
console.log(idx);

var flag = myIncludes(foodList, '고추잡채');
console.log(flag);
