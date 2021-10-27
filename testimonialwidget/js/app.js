//UI

const testimonialel = document.querySelector('.testimonial');
const userimageel = document.querySelector('.user-image');
const usernameel = document.querySelector('.username');
const roleel = document.querySelector('.role');

const testimonials = [
     {
          name: "Mya Mya",
          role: "Marketing",
          photo: "https://randomuser.me/api/portraits/women/21.jpg",
          text: "Mya Mya Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at exercitationem veritatis tempore, ea fuga voluptatem sapiente odio, atque consectetur, velit a recusandae voluptas saepe id? Totam voluptatem libero harum",
     },

     {
          name: "Aung Aung",
          role: "Manager",
          photo: "https://randomuser.me/api/portraits/men/22.jpg",
          text: "Aung Aung Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at exercitationem veritatis tempore, ea fuga voluptatem sapiente odio, atque consectetur, velit a recusandae voluptas saepe id? Totam voluptatem libero harum",
     },

     {
          name: "Su Su",
          role: "Marketing",
          photo: "https://randomuser.me/api/portraits/women/23.jpg",
          text: "Su Su Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at exercitationem veritatis tempore, ea fuga voluptatem sapiente odio, atque consectetur, velit a recusandae voluptas saepe id? Totam voluptatem libero harum",
     },

     {
          name: "Kyaw Kyaw",
          role: "Sales",
          photo: "https://randomuser.me/api/portraits/men/24.jpg",
          text: "Kyaw Kyaw Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at exercitationem veritatis tempore, ea fuga voluptatem sapiente odio, atque consectetur, velit a recusandae voluptas saepe id? Totam voluptatem libero harum",
     },

     {
          name: "Zue Zue",
          role: "Warehouse Manager",
          photo: "https://randomuser.me/api/portraits/women/25.jpg",
          text: "Zue Zue Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum at exercitationem veritatis tempore, ea fuga voluptatem sapiente odio, atque consectetur, velit a recusandae voluptas saepe id? Totam voluptatem libero harum",
     },
];

// console.log(testimonials[0].text);

let idx = 0;

function updatetestimonial(){
     const {name, role, photo, text} = testimonials[idx];

     testimonialel.textContent = text;
     userimageel.src = photo;
     usernameel.innerText = name;
     roleel.innerText = role;

     idx++;

     if(idx > testimonials.length - 1){
          idx = 0;
     }
}

updatetestimonial();
setInterval(updatetestimonial, 10000);
