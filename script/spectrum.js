//declaring variables for each element of the DOM i will modify
let mainHeading = document.querySelector("h1");
let specOne = document.querySelector(".spectrum1");
let specTwo = document.querySelector(".spectrum2");
let specThree = document.querySelector(".spectrum3");
let specFour = document.querySelector(".spectrum4");
let specFive = document.querySelector(".spectrum5");

//adding event listener to change text when hovering over the h1
mainHeading.addEventListener("mouseover", function(){
  mainHeading.textContent = "Trippy, Isn't It?";
});

mainHeading.addEventListener("mouseout", function(){
  mainHeading.textContent = "Inspired By Spectrum V By Ellsworth Kelly";
});


//calling five functions to loop through random hex codes for each pallet
function getRandomColor(){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
};

function getRandomColor2(){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
};

function getRandomColor3(){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
};

function getRandomColor4(){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
};

function getRandomColor5(){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
};

//function to change the backgrund color of each pallet
function changeColor(){
  let colorInput = getRandomColor();
  let colorInput2 = getRandomColor2();
  let colorInput3 = getRandomColor3();
  let colorInput4 = getRandomColor4();
  let colorInput5 = getRandomColor5();

  specOne.style.backgroundColor = colorInput;
  specTwo.style.backgroundColor = colorInput2;
  specThree.style.backgroundColor = colorInput3;
  specFour.style.backgroundColor = colorInput4;
  specFive.style.backgroundColor = colorInput5;
};

// interval in millisecods
setInterval("changeColor()",750);
