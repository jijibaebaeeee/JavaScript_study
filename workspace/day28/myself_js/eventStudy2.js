// 목표
// id가 click인 것을 클릭하면 배경색이 green이 된다
// id가 over인 것에 마우스를 대면 배경색이 skyblue가 된다
// id가 out인 것에 마우스를 댄 후, 벗어나면 배경색이 pink가 된다

const clickBtn = document.querySelector('#click');
const overBtn = document.querySelector('#over');
const outBtn = document.querySelector('#out');
const ovoutBtn = document.querySelector('#over-out');

function changeGreen(){
  this.setAttribute("style", "background-color:green");
}
function changeSkyblue(){
  this.setAttribute("style", "background-color:skyblue");
}
function changePink(){
  this.setAttribute("style", "background-color:pink");
}

clickBtn.addEventListener("click", changeGreen); // 왜 () 없어야해?

overBtn.addEventListener("mouseover",changeSkyblue);

outBtn.addEventListener("mouseout", changePink);

ovoutBtn.addEventListener('mouseover', changeSkyblue);
ovoutBtn.addEventListener('mouseout', changePink);
ovoutBtn.addEventListener('click', changeGreen);