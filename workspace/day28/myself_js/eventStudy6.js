// 목표
// input의 all을 all 변수에 저장한다
// input의 term을 모두 terms 변수에 저장한다

// all을 클릭할때 terms에 저장된 변수를 반복하면서
// terms의 checked 속성에 all의 checked 값을 대입한다

// terms을 반복하며
// 3개의 모든 체크박스가 체크되는 경우 all도 체크된다.
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("input.all");
// console.log(all);
const terms = document.querySelectorAll("input.term");

all.addEventListener('click', () =>{
  terms.forEach((term) => {
    term.checked = all.checked;
  })
})

terms.forEach((term)=>{
  term.addEventListener('click', () => {
    console.log(term);
    all.checked = terms.map(term => term.checked).filter((checked) => checked).length === 3;
  });
})

//결론 : NodeList여도 map 함수를 사용하려면 NodeList의 prototype에 Array의 prototype의 map을 추가해줘야한다.