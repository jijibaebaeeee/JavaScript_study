// -----------------------------------------------------리스트 생성/삭제
const $taskList = $(`#task-list`);
const $addBtn = $(`#add-button`);
const addBtn = document.querySelector('#add-button');

function insertText(){
  let text = prompt("추가할 할일을 입력하세요:");

  if(text !== null){
    $taskList.append(`<div class="add-container">
                        <li><label><input type="checkbox">${text}</input></label></li> 
                        <button class="delete-button">삭제</button>
                      </div>`); // 입력한 내용 + 삭제버튼 추가
    const $lastContainer = $taskList.find('.add-container').last(); // 방금 추가된 요소 받기
    $lastContainer.css({
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid gray"
    });
    $lastContainer.find('.delete-button').css({
      right: "20px",
      width: "47px",
    });
    $lastContainer.find('li').css({
      width: "100%",
      listStyle: "none",
      font: "sans-serif"
    });
  }
}

//할일 추가 버튼 클릭시
addBtn.addEventListener('click',insertText);

//해당 컨테이너의 배경색을 바꾼다.
function changeBackgroundColorLightGreen(e){
  const checkbox = e.target;
  const container = checkbox.closest('.add-container');
  if(checkbox.checked){
    container.style.backgroundColor = "lightgreen";
  }else{
    container.style.backgroundColor = '';
  }
}

//doc에 변화(checkbox 체크)가 있을 때를 이벤트로 잡는다
document.addEventListener('change', (e) => {
  if(e.target.type === 'checkbox'){
    changeBackgroundColorLightGreen(e);
  }
})

//doc에 클릭(delete-button)을 할 때를 이벤트로 잡는다 .. 이렇게 해도 되나..
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete-button')){ // 해당 이벤트가 delete-button을 포함하면
    if(confirm("할일을 삭제하시겠습니까?")){
      alert("삭제되었습니다.");
      e.target.closest('.add-container').remove();
    }else{
     alert("취소하셨습니다") ;
    }
  } 
})

// ----------------------------------------- 배너 - 슬라이드 처리 부분분
let $slideBox = $(`.slide-box`);
let $slideImg = $(`.slide-img`);

const slideWidth = 375.845;
let currentIdx = 0;
const slideCnt = $slideImg.length;

let slideInterval;

//자동 슬라이드 시작함수
function startSlide(){
  slideInterval = setInterval(function(){
    moveNext();
  }, 3000);
}

//자동 슬라이드 중지함수
function stopSlide(){
  clearInterval(slideInterval);
}

//다음 슬라이드로 이동하는 함수
function moveNext(){
  currentIdx++;
  
  if(currentIdx >= slideCnt){
    currentIdx = 0;
  }
  $slideBox.css("left", -(currentIdx * slideWidth) + "px");
  $slideBox.css("transition", "0.5s ease");
}

$slideBox.parent().on('mouseover', stopSlide);
$slideBox.parent().on('mouseout', startSlide);
startSlide();

// ----------------------------------------------------- 라이트박스 부분
const bigImgWrap = document.querySelector('.big-img-wrap');
// const bigImgBox = document.getElementsByClassName('.big-img-box');
const imges = document.querySelectorAll('.test-img'); // img 태그로 접근

imges.forEach((img) => {
  img.addEventListener('click', function(){
    let src = this.getAttribute("src");

    let bigImg = document.querySelector('.big-img');
    bigImg.setAttribute("src", src);

    bigImgWrap.style.display = "flex";
    bigImgWrap.style.justifyContent = "center";
    bigImgWrap.style.zIndex = "1";
    bigImgWrap.style.position = "fixed";
    bigImgWrap.style.left = "0";
    bigImgWrap.style.top = "0";
    // bigImgWrap.style.left = "50%";
    // bigImgWrap.style.top = "50%";
    // bigImgWrap.style.transform = "translate(-50%, -50%)";
    bigImg.style.width = "600px";
    bigImg.style.height = "600px";
  });
})

bigImgWrap.addEventListener('click', () =>{
  bigImgWrap.style.display = "none";
})

// ------------------------------------------------------- 모달창 부분
// 아직 준비중이라는 신호도 주자
function ready(){
  alert("서비스 준비중입니다.");
}

//로그인하는 모달 창을 띄워보자
const login = document.querySelector('.login');
const modalBox = document.querySelector('.modal-box');
const xBox = document.querySelector('.x-box');

//모달띄우기
login.addEventListener('click',() => {
  modalBox.style.display = "flex";
});

//x 손대면 색 변하게
xBox.addEventListener('mouseover', () =>{
  xBox.style.color = "red";
})

// x 누르면 모달끔끔
xBox.addEventListener('click', () => {
  modalBox.style.display = "none";
})
//x 벗어나면 색 변하게
xBox.addEventListener('mouseout', () =>{
  xBox.style.color = "";
})

//가볍게 약관 동의를 하는 모달창을 띄워보자
const modalSignBox = document.querySelector('.modal-sign-box');
const xxBox = document.querySelector('.xx-box');

const sign = document.querySelector('.sign');


sign.addEventListener('click', () =>{
  modalSignBox.style.display = "flex";
})

//x 손대면 색 변하게
xxBox.addEventListener('mouseover', () =>{
  xxBox.style.color = "red";
})

// x 누르면 모달끔
xxBox.addEventListener('click', () => {
  if(confirm("정말 참여? 진짜?")){
    alert("화이팅! ! !");
  }else{
    alert("그런거 없다");
  }
  modalSignBox.style.display = "none";
})

//x 벗어나면 색 변하게
xxBox.addEventListener('mouseout', () =>{
  xxBox.style.color = "";
})

const all = document.querySelector('.all');
const terms = document.querySelectorAll('.term');

//all 누르면 3개 모두
all.addEventListener('click', () =>{
  terms.forEach(term => {
    term.checked = all.checked;
  })
})

//3개 눌리면 all도
NodeList.prototype.map = Array.prototype.map;
terms.forEach(term => {
  term.addEventListener('click', function(){
    all.checked = terms.map(term => term.checked).filter(checked => checked).length === 3;
  })
})