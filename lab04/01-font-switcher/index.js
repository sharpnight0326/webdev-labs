
const makeBigger = () => {
   h1 = document.getElementsByTagName("h1")
   p = document.getElementsByTagName("p")
   styleh = window.getComputedStyle(h1[0], null).getPropertyValue('font-size');
   hcurrentSize = parseInt(styleh);
   stylep = window.getComputedStyle(p[0], null).getPropertyValue('font-size');
   pcurrentSize = parseInt(stylep);
   h1[0].style.fontSize= (hcurrentSize+1) + 'px'
   p[0].style.fontSize= (pcurrentSize+1) + 'px'
};

const makeSmaller = () => {
   h1 = document.getElementsByTagName("h1")
   p = document.getElementsByTagName("p")
   styleh = window.getComputedStyle(h1[0], null).getPropertyValue('font-size');
   hcurrentSize = parseInt(styleh);
   stylep = window.getComputedStyle(p[0], null).getPropertyValue('font-size');
   pcurrentSize = parseInt(stylep);
   h1[0].style.fontSize= (hcurrentSize-1) + 'px'
   p[0].style.fontSize=(pcurrentSize-1) + 'px'
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

