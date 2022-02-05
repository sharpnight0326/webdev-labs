/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
var isModeOn = false;
document.getElementById("dyslexia-toggle").onclick = function (){
    if(isModeOn === false) {
        document.body.classList.add('dyslexia-mode');
        isModeOn = true;
    }
    else {
        document.body.classList.remove('dyslexia-mode');
        isModeOn = false;
    }
}