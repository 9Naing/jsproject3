//UI
const nav = document.getElementById('nav');
const togglebtn = document.getElementById('toggle');
console.log(nav, togglebtn);

togglebtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});