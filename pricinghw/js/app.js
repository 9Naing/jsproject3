//UI
const mthbtn = document.querySelector('.month');
const yrbtn = document.querySelector('.year');
const costs = document.querySelectorAll('.cost');
const ordbtns = document.querySelectorAll('.submitbtn');
const pricecontainer = document.querySelector('.pricing-container');
const paymentcontainer = document.querySelector('.payment-container');
const decisionsection = document.querySelector('.decision-section');
// console.log(mthbtn, yrbtn, costs);

let costvalue = [69.9, 89, 139.99, 210];
let idx = 0;
// mthbtn.addEventListener('click', () => {
//      currentvalue();
// });

mthbtn.addEventListener('click', () => {
     for(idx =  0; idx < costs.length; idx++){
          costs[idx].innerHTML = costvalue[idx];
    }
});

yrbtn.addEventListener('click', () =>{
     updatevalue();
});

function updatevalue(){
    for(idx =  0; idx < costs.length; idx++){
          costs[idx].innerHTML = Math.floor(costvalue[idx] * 12);
    }
}

ordbtns.forEach(ordbtn => {
     ordbtn.addEventListener('click', () => {
          window.location = "payment.html";
     });
})


// //Payment Section
// const arrowleft = document.querySelector('.arrowleft');
// const arrowright = document.querySelector('.arrowright');
// const paymentbtn = document.querySelector('.paymentbtn');
// const imgslides = document.querySelectorAll('.slide');

// let activeslide = 0;

// ordbtns.forEach(ordbtn => {
//      ordbtn.addEventListener('click', () => {
//           pricecontainer.style.transform = "translate(-150%)";
//           paymentcontainer.style.left = '50%';
//           decisionsection.style.opacity = "0";
//      });
// });

// paymentbtn.addEventListener('click', () => {
//      pricecontainer.style.transform = 'translate(0)';
//      paymentcontainer.style.left = '150%';
//      decisionsection.style.opacity = '1';
// });

// function setactiveslide(){
//      imgslides.forEach((slide) => {
//           slide.classList.remove('active');
//      });

//      imgslides[activeslide].classList.add('active');
// }
// setactiveslide();
// arrowright.addEventListener('click', function(){
//      activeslide++;
//      if(activeslide > imgslides.length - 1){
//           activeslide = 0;
//      }

//      setactiveslide();
//           // console.log(activeslide);
// });

// arrowleft.addEventListener('click', () => {
//      activeslide--;
//      if(activeslide < 0){
//           activeslide = imgslides.length - 1;
//      }
//      setactiveslide();
// });

