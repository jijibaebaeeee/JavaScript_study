// 목표
// test-img에 접근할 변수 선언
// big-img-wrap에 접근 변수 선언
// 이미지 클릭될 때 이미지 경로를 저장할 변수 선언
// 저장한 경로를 big-img 클래스의 src 속성에 저장
// 이미지를 보이기 위해 display: flex로 설정

// 이미지를 다시 클릭시 화면에서 나갈 수 있도록 설정

const testImg = document.getElementsByClassName("test-img");
const bigImgWrap = document.getElementsByClassName("big-img-wrap");

for(let i = 0; i < testImg.length; i++){
  testImg[i].addEventListener('click', function(){ // 화살표 함수 쓰면 getAttribute에서 오류남
    // let src = testImg[i].getAttribute('src'); 가 아니라 this 사용해야함함
    let src = this.getAttribute("src"); // 이 객체에 한해서만 !
    
    let bigImg = document.querySelector(".big-img");
  //   with(bigImg.style){ <--with 사용시 src 지정을 ...?
  //     src = "src";
  //     width = "500px";
  //     height = "500px";
  //     display = "block";
  //   } 
 
  
    bigImg.setAttribute("src", src);
    console.log(bigImg.src);
    bigImgWrap[0].style.display = "flex"; // none -> flex 바꿔줬다.
    bigImg.style.width = "500px";
    bigImg.style.height = "500px";
  })

  // let bigImgBox = document.querySelector(".big-img-box"); // 비효율적인 코드드
  // bigImgBox.addEventListener('click', () =>{
  //   bigImgWrap[0].style.display = "none";
  // })
  // bigImgWrap.addEventListener('click', () => {   //아예 안나옴
  //   bigImgWrap[0].style.display = "none";
  // })

  bigImgWrap[0].addEventListener('click', () => {
    // bigImgWrap[0].style.display = "none";
    with(bigImgWrap[0].style){
      display = "none";
    }
  })
  
}