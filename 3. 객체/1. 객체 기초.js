

// 객체 리터럴(값)
var dog = {
    // 프로퍼티 작성
    'name': '뽀삐',
    //key는 변수처럼 문자열 사용가능
    //value는 아무거나 다넣어도된다. 배열,함수,null 등등
    playWithChild: function() {},
    kind: '진돗개',
    age: 3,
    for: 11,
    // 'for waiting': 11,
    //문자열로 처리하면 띄어쓰기도 가능.
    injection: true,
    favorite: ['산책','간식'],
    
};
console.log(typeof dog);
//객체에 저장된 데이터 참조하는방법
console.log(dog.name);
dog.favorite.push('강아지');

dog.favorite.slice(1).splice(1,1);

//프로퍼티 참조 2번째방법
console.log('=======================');
console.log(dog['injection']);

//key 를 변수에 저장
var fv = 'favorite';
//변수에 담아서 참조하니까 '' 를빼준것
console.log(dog[fv]);

//프로퍼티 값 수정
dog.age = 4;
//console.log(dog.age);
dog.favorite[1] = '실뭉치';
//console.log(dog.favorite);

dog['injection'] = false;
console.log(dog);

//프로퍼티 동적 추가
dog.owner = '김철수';
console.log(dog);

//프로퍼티 삭제
delete dog.owner;
console.log(dog);

//프로퍼티 존재 유무 확인
//key를 반드시 문자열로 표기해야함.
var ageFlag = 'age' in dog;
console.log(ageFlag);

//master 라는 프로퍼티가 없으면 추가해라
if(!('master' in dog)){
    dog.master = '김또수';
}
console.log(dog.master);

var m = 'master';
if(!(m in dog)){
    dog[m] = '김또또';
}
console.log(dog[m]);


//객체(key)를 순회하는 반복문
for(var k in dog){
    console.log(k);
    console.log(dog[k]);
}

//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};

var bbs = articles.articleList;
bbs[0].writer;

for (var x in articles){

}
for (var y of bbs){
    console.log(y);
}