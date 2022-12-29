
const pre=document.querySelector(".prebtn")
const next=document.querySelector(".nextbtn")
const alls=document.querySelectorAll(".slide")

let current=0;
let late=alls.length-1;

pre.addEventListener("click", function () {

  if (current === 0) {
    current = late;
  } else {
    current--;
  }


  alls.forEach((slide, index) => {

    slide.style.transform = "translateX(" + 100 * (index - current) + "%)";
  });
})



next.addEventListener("click", function () {

    if (current === late) {
        current = 0  ;
    } else {
      current++;
    }
  
   
    alls.forEach((slide, index) => {

      slide.style.transform = "translateX(" + 100 * (index - current) + "%)";
    });
  })