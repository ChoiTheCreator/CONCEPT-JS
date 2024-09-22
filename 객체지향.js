//LOL 캐릭터들 정리해서 보여줘야지 ㅋㅋ
// JS 자료형에다가 정보들을 담아보자
// 챔피언들 졸라많다

//Object 자료형으로 만든다고 가정하면
//아래처럼 만들수 있겠다..

//    const nunu = {
//   q: 'consume',
// w: 'snowball',
//};

//    const garen = {
//     q: 'strike',
//     w: 'courage',
//   };

//이런 비슷한 류의 쿠키들을 계속 만들어야 한다 할떄
// class만들어 쓰자. (object 만들어내는 노예)
//옛날 문법에는 function을 활용함 이건 생성자라고도함
//this는 노예로 부터 만들어진 object -> instance라고도 함

//이렇게하면 끝 + 노예야 새로운 기계 하나 줘봐라
//새로운 -> new keyword 필수

//이러면 노예의 매개변수를 추가 업그레이드

function Hero(q, w) {
  this.q = q;
  this.w = w;
}

const nunuPrime = new Hero('consume', 'snowball');
const garenPrime = new Hero('strike', 'courage');

//ES6 위는 옛날 문법임 새걸로 하자면
class HeroUsingES6 {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}
