//array of contains memebers
var reviews = [
  {
    id: 1,
    image: "images/m1.jpg",
    name: "Roqay harrit",
    job: "painting man",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum debitis laborum perferendis dolore nulla, qui laudantiumminima? so waht now are youy sekj olmostaf ohhisn",
  },
  {
    id: 1,
    image: "images/m2.jpg",
    name: "yassin lamin",
    job: "developer",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum debitis laborum perferendis dolore nulla, qui laudantiumminima?  adipisicing elit. Aperiam dolorum debitis laborum perferendis dolore nulla, qui laudantiumminima?",
  },

  {
    id: 1,
    image: "images/m3.jpg",
    name: "rayan lamin",
    job: "full stack",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum debitis laborum perferendis dolore nulla, qui laudantiumminima? helo  hol just becuas eI am good with  you man",
  },
  {
    id: 1,
    image: "images/m4.jpg",
    name: "liba lamin",
    job: "designer",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum debitis laborum perferendis dolore nulla, qui laudantiumminima?",
  },
];

//html Dom
var persone = document.querySelector(".persone");
var text = document.querySelector(".pa");
var job = document.querySelector(".title");
var image = document.querySelector(".profile");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var counter = 0;

//assign the first value to the container

window.addEventListener("DOMContentLoaded", function () {
  showPerson(counter);
});

//show person function
function showPerson() {
  const items = reviews[counter];
  image.src = items.image;
  persone.textContent = items.name;
  job.textContent = items.job;
  text.textContent = items.text;
}

//next function
next.addEventListener("click", function () {
  counter++;
  if (counter > reviews.length - 1) {
    counter = 0;
  }
  showPerson();
});

//prev function
prev.addEventListener("click", function () {
  counter--;
  if(counter < 0){
      counter = reviews.length -1;
  }
  showPerson();
});
