const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['잠영', '족구', '테니스']
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['발레리나', '축구']
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['레슬링', '발레', '테니스', '영화감상']
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['퐁퐁', '영화감상']
    },
];

// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {

    for (const user of userList) {
        wannaSay(user);
    }
}

alertUserInfo(y => console.log(`나는 ${y.userName}님이시다`));

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach((user) => { //user 에 하나씩 갖다줌.
    console.log(user.address);
});

const numbers = [10, 20, 30, 40];

let total = 0;
numbers.forEach((n) => {
    total += n;
});
console.log(`총합 ${total}`);

console.log('==================');


// 서울사는 회원들만
// 필터링해서 담아줘
// function filterSeoul(){

//     // 새로운 배열 생성
//     const filteredArray = [];

//     for (const user of userList){
//         if (user.address === '서울'){
//             filteredArray.push(user);
//         }
//     }

//     return filteredArray;
// }


// const newArray = filterSeoul();
// console.log(newArray);

// 특정 필터조건에 의해 필터링하는 함수
function filter(condition) {

    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (condition(user)) {
            filteredArray.push(user);
        }
    }

    return filteredArray;
}


//const newArray = filter(u => u.address === '서울');
const newArray = filter(u => u.hobbys.length >= 3);
console.log(newArray);

// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log('===================');

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0);
console.log(newArr);

const user1 = userList.filter(user => user.account === 'abc1234');

console.log(user1);


// 배열 고차 함수 map() - filter()는 말그대로 필터링 하는거라면 map은 수정하는것.
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
// 매핑한 배열을 반환

const doubles = numbers.map(n => n ** 2); //배열에 값들을 n에 하나씩가져와서 제곱해서 다시 배열에 담아줘
console.log(doubles);

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.userName); //배열에 값들을 user 에 하나씩가져와서 
console.log(userNames); //username만 뽑아서 다시 배열에 담아줘


// userList 에서 원하는 프로퍼티값을 매핑하는 함수를 정의해보세요
console.log('==============================');

//이름만 출력시켜봐라
function myMap(callback) {

    //새로운 배열생성(이름만 담을 배열)
    const mapArray = [];

    for (const user of userList) {
        mapArray.push(callback(user));
    }
    return mapArray;

}
const userNames2 = myMap(user => ({
    userName: user.userName,
    address: user.address
}));
console.log(userNames2);

const appleBasket = [{
        color: 'green',
        sweet: 13
    },
    {
        color: 'red',
        sweet: 14
    },
    {
        color: 'green',
        sweet: 11
    },
    {
        color: 'green',
        sweet: 6
    },
    {
        color: 'green',
        sweet: 7
    },
    {
        color: 'green',
        sweet: 9
    },
];

// 사과중 녹색이면서 당도가 9이상인 사과만 선별하여
// 이 사과는 xxx 색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.


    // appleBasket
    // .filter(apple => apple.color === 'green' && apple.sweet >= 9);

    const mappedApples =
        appleBasket
        .filter(apple => apple.color === 'green' && apple.sweet >= 9)
        .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);

console.log(mappedApples);


console.log('====================');
// userList에서 서울사는 user들의 
// 첫번쨰 취미만 배열에 모아서 리턴

const mapUserList = 
    userList
    .filter(user => user.hobbys[0])
    .map(user => `유저의 취미는 ${user.hobbys[0]}입니다.`);

console.log(mapUserList);


