const imgBtn = document.querySelectorAll('button[type="button"]');
// console.log(imgBtn);

// const bigImgWrap = document.getElementsByClassName('big-img-wrap');
const bigImgWrap = document.querySelector('.big-img-wrap');
// console.log(bigImgWrap);

imgBtn.forEach((btn) => {
  btn.addEventListener('click', function(){ // 화살표함수 사용시 get/set Attribute 안된다.
    let src = this.getAttribute("data-src");

    let bigImg = document.querySelector('.big-img');
    bigImg.setAttribute("src", src);

    // bigImgWrap[0].style.display = "flex";
    bigImgWrap.style.display = "flex";
    bigImg.style.width = "500px";
    bigImg.style.height = "500px";
  })

  bigImgWrap.addEventListener("click", function(){
    // with(bigImgWrap.style){
    //   display = "none";
    // }
    // bigImgWrap.style.display = "none";
    this.style.display = "none";
  })



})