// 목표
// jquery를 사용하여 클래스가 box2인 요소에 접근

// box2의
// 1. 부모요소
// 2. 조상요소 전부
// 3. 형 요소
// 4. 동생 요소
// 5. 동생 전체
// 6. box4만
// 를 출력하고

// 클래스가 div-box인 요소중 2번째 인덱스 요소를 출력할 것

let $box2 = $(`.box2`); // jquery 객체
console.log($box2);

// 부모요소
console.log($box2.parent());

// 부모요소 모두
console.log($box2.parents());

// 형 요소
console.log($box2.prev());

// 동생 요소
console.log($box2.next());

// 동생 전체
console.log($box2.nextAll());

// box4만
console.log($box2.next().next());
console.log($box2.nextAll()[1]); // [0] => box3 , [1] => box4

let $divBox = $(`.div-box`);
console.log($divBox);
console.log($divBox[2]); // <- 태그만 나온다
console.log($divBox.eq(2)); // <- jqueryList로 나온다.

//복습
//태그를 출력하려면
//HTMLCollection -> 인덱스로 접근해서 출력
//NodeList -> 요소 자체로 출력
//jquery -> 인덱스로 접근해서 출력

      // .eq() -> jqueryList로 출력된다.