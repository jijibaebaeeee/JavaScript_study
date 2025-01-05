// const taskList = document.querySelector('#task-list');
// console.log(taskList);
const $taskList = $(`#task-list`);
// console.log($taskList);
const $addBtn = $(`#add-button`);
const addBtn = document.querySelector('#add-button');

//변동이 있을경우 새로운 체크박스들에 접근하는 변수
function newCheckBoxes(){
  let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  return checkBoxes;
}

//변동이 있을경우 삭제버튼들에 접근하는 변수
function newDeleteBtn(){
  let DeleteBtns = document.querySelectorAll('.delete-button');
  return DeleteBtns;
}


//할일을 추가하는 함수
function insertText(){
  let text = prompt("추가할 할일을 입력하세요:");
  // $taskList.append(`<li>${text}</li>`);
  if(text !== null){
    $taskList.append(`<div class="add-container">
                        <li><label><input type="checkbox">${text}</input></label></li> 
                        <button class="delete-button">삭제</button>
                      </div>`); // 입력한 내용 + 삭제버튼 추가
    // console.log($taskList.find('#delete-button'));
    $taskList.find('.add-container').css('display', "flex"); // container flex 먹이기
    $taskList.find('.add-container').css('margin-top', 10 + "px"); // 목록사이의 상하 띄우기
    $taskList.find('.add-container').css('border-bottom', 1 +"px"+ " solid gray"); // 아래 밑줄
    $taskList.find('.delete-button').css('right', 20 + "px"); // 삭제버튼 오른쪽으로 붙이기
    $taskList.find('.delete-button').css('width', 47 + "px"); // 버튼 크기 조절
    $taskList.find('.delete-button').css('margin-bottom', 10 + "px"); // 버튼 띄우기
    $taskList.find('li').css('width', "100%"); // 나머지는 li가 차지 
    $taskList.find('li').css('list-style', "none"); // ● 없애기
    $taskList.find('li').css('padding-bottom', 10 +"px"); // 너비조절
    $taskList.find('li').css('font', 'sans-serif'); // 폰트 설정(네이버)
    }
}
//버튼 클릭시 할일을 추가
addBtn.addEventListener('click',insertText);

function changeBackgroundColorLightGreen(){
  let checkBoxes = newCheckBoxes();
  checkBoxes.forEach((checkbox) => {
    
  })
}

