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


// userList에서 서울사는 user들의 
// 첫번쨰 취미만 배열에 모아서 리턴

// const mapUserList = 
//     userList
//     .filter(user => user.hobbys[0])
//     .map(user => `유저의 취미는 ${user.hobbys[0]}입니다.`);

// console.log(mapUserList);

function map(callback){     //여기서부터 시작. 콜백함수 매개변수로 받는다
    const filterArr = [];   //배열을 만들어서 담는그릇 생성

    for (let user of userList){   // for문을 이용해서 userList 를 돌린다.
        filterArr.push(callback(user));// push해준다.어떤걸? callback 함수 받아온걸 조건으로
                                // for문 안에서 user 이용해서 user.hobby[0]을 
                                // 하나씩 배열에 담아준다.
    }
    return filterArr;   // 담은것들을 배열로 리턴
}
var q1 = map(user => user.hobbys[0]);  //콜백함수 호출
console.log(q1);   //q1 은 배열이 나온다.

console.log('=================================');

function filter(callback1){
    const filterArr1 = [];

    for (let user of userList){
        if(callback1(user))
        filterArr1.push(user);
    }
    return filterArr1;
}
var q2 = filter(user => user.address === '서울');
console.log(q2);

var q2 = fliter(function (user){
    return user.hobbys === user.hobbys[0];
})





