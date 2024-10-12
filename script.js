const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

/*
arrows.forEach((arrow) =>{
    arrow.addEventListener("click", function(){
        arrow.style.background = "red";
    })
})
*/

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth/300);
  let clickCounter = 0;
  const imageItem = movielist[i].querySelectorAll("img").length;
  console.log(imageItem);
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) +(4-widthRatio) >= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
  console.log(window.innerWidth);
});

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter selct,.movie-list-title")
ball.addEventListener("click",  ()=>{
  items.forEach((item) => item.classList.toggle("active"));
})