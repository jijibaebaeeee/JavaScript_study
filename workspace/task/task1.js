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