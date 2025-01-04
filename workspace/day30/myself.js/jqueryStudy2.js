// 목표
// jquery를 이용하여
// 1. 클래스가 div-box에 접근하여 출력하기
let $divBox = $(`.div-box`)
console.log($divBox);
// 2. 클래스가 div-box에 접근하여 인데스 2에 해당하는 것 출력하기
console.log($divBox.eq(2)); // <- jquery 객체로 출력
console.log($divBox[2]); // 태그 포함 요소로 출력

// 3. (2)의 요소에 배경색을 red로 설정하기
// $divBox.eq(2)[0].css("background-color", "red"); // 오류발생
$divBox.eq(2).css("background-color", "red"); // 스타일을 입히려면 jquery 객체로 접근근
// $divBox[2].css("background-color", "red"); // 오류발생

// 4. li태그 전체 가져오기
let $li = $(`li`);
console.log($li);

// 5. 클래스 이름이 product인 태그 전체 가져오기
let $product = $(`.product`);
console.log($product);

// 6. div-box의 자식 태그 중 첫번째 자식 가져오기
console.log($divBox.eq(0));
console.log($divBox.children().first()); // 없는 값이어도 0이 출력

// 7. ul 태그의 부모태그 가져오기
let $ul = $(`ul`);
console.log($ul.parent());

// 8. li태그의 부모태그 가져오기
console.log($li.parent()); // ul.product

// 9. ul 태그 자식 중에서 0번째 인덱스 가져오기
console.log($ul.children().first());

// 10. ul 태그 자식 중에서 2번째 인덱스 가져오기(3가지 방법)
console.log($ul.children().eq(2));
console.log($(`ul > li:first-child`));
console.log($(`ul > li:nth-child(1)`)); // css 선택자로 선택이 가능
console.log($(`ul`).find(`li`).first()); // find + first 조합

//결과
// 1. jqueyr에 스타일을 입히려면 jquery 객체여야 한다. -> 인덱스 접근 x eq()접근
// 2. jqeury의 인덱스 기준을 알아야한다.