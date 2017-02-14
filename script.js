// les images que le slideshow va charger :
var dataImg = [
  "https://images.pexels.com/photos/8923/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/60224/pexels-photo-60224.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
];


var slideShow = document.querySelector('#container');
var monoSlide = document.createElement('div');

var i = 0;
var btn1 = document.querySelector('#button1');
var btn2 = document.querySelector('#button2');
var btn3 = document.querySelector('#button3');
var btn4 = document.querySelector('#button4');

function insererSlide(i){
  monoSlide.style.backgroundImage = "url(" + dataImg[i] + ")";
  monoSlide.style.backgroundSize = "cover";
  monoSlide.style.height = "400px";
  monoSlide.style.backgroundPosition = "top";
  slideShow.appendChild(monoSlide);
}

insererSlide(i);

btn1.addEventListener("click", function(){
  i = 0;
  btn1.style.color = "#FF1448";
  btn2.style.color = "#FF7896";
  btn3.style.color = "#FF7896";
  btn4.style.color = "#FF7896";
  insererSlide(i);
});

btn2.addEventListener("click", function(){
  i = 1;
  btn2.style.color = "#FF1448";
  btn1.style.color = "#FF7896";
  btn3.style.color = "#FF7896";
  btn4.style.color = "#FF7896";
  insererSlide(i);
});

btn3.addEventListener("click", function(){
  i = 2;
  btn3.style.color = "#FF1448";
  btn1.style.color = "#FF7896";
  btn2.style.color = "#FF7896";
  btn4.style.color = "#FF7896";
  insererSlide(i);
});

btn4.addEventListener("click", function(){
  i = 3;
  btn4.style.color = "#FF1448";
  btn1.style.color = "#FF7896";
  btn2.style.color = "#FF7896";
  btn3.style.color = "#FF7896";
  insererSlide(i);
});
