const selectedTheme = window.localStorage.getItem('eachCol left'); 
const bodyDoc = document.querySelector('body');

if(selectedTheme.includes('rightlight dark')) {
   bodyDoc.classList.add('rightdark');
   bodyDoc.classList.add('dark');
   bodyDoc.classList.remove('rightlight');
   bodyDoc.classList.remove("light");
}


