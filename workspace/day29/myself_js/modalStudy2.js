// 목표
// 로그인 메뉴바에 접근한다
// 메뉴바를 클릭하면 모달창(modal-box)이 열려야하며

// 모달창 내에서 x에 마우스를 올리면 (커서도 바뀌어야하며)
// 색이 red로 변해야한다 

// 마우스 벗어나면 다시 검정으로.

const login = document.querySelector(".nav--login") // HTMLC--
const modalBox = document.querySelector('.modal-box'); // NodeList
const xBox = document.querySelector('.x-box'); // NodeList

login.addEventListener("click", () => {
  modalBox.style.display = "flex";
})

xBox.addEventListener("mouseover", () => {
  xBox.style.color = "red";
})

xBox.addEventListener("mouseout", () => {
  xBox.style.color = "black";
})

xBox.addEventListener('click', () =>{
  modalBox.style.display = "none";
})
