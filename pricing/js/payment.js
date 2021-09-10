//Payment Section
const arrowleft = document.querySelector('.arrowleft');
const arrowright = document.querySelector('.arrowright');
const paymentbtn = document.querySelector('.paymentbtn');
const imgslides = document.querySelectorAll('.slide');

let activeslide = 0;

function setactiveslide(){
     imgslides.forEach((slide) => {
          slide.classList.remove('active');
     });

     imgslides[activeslide].classList.add('active');
}
setactiveslide();
arrowright.addEventListener('click', function(){
     activeslide++;
     if(activeslide > imgslides.length - 1){
          activeslide = 0;
     }

     setactiveslide();
          // console.log(activeslide);
});

arrowleft.addEventListener('click', () => {
     activeslide--;
     if(activeslide < 0){
          activeslide = imgslides.length - 1;
     }
     setactiveslide();
});

paymentbtn.addEventListener('click', () => {
     window.location.assign('index.html');
});

