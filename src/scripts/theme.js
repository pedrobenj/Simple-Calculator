let themeButton = document.getElementById('themeButton');
let iconTheme = document.getElementById('iconTheme');
let themeButton2 = document.getElementById('themeButton2');
let iconTheme3 = document.getElementById('iconTheme3');

let body = document.querySelector('body');

themeButton.addEventListener('click', function () {
   body.classList.toggle('dark');
   body.classList.toggle('light');

   window.localStorage.setItem ('eachCol left', body.classList.value);

   iconTheme.classList.toggle('fa-moon');
   iconTheme.classList.toggle('fa-sun');
});

// themeButton2.addEventListener('click', function () {
//    body.classList.toggle('rightlight');
//    body.classList.toggle('rightdark');

//    iconTheme.classList.toggle('fas fa-lightbulb');
//    iconTheme.classList.toggle('far fa-lightbulb');
// });