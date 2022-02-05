/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/


document.querySelector("#default").onclick=function(){
    document.getElementsByTagName("header")[0].style.backgroundColor="#F2F2F2"
    document.getElementsByTagName("div")[0].style.backgroundColor="#FFFFFF"
    // console.log("default")
}
document.querySelector("#desert").onclick=function(){
    document.getElementsByTagName("header")[0].style.backgroundColor="#A47B67"
    document.getElementsByTagName("div")[0].style.backgroundColor="#F1B872"
    // console.log("desert")
}
document.querySelector("#ocean").onclick=function(){
    document.getElementsByTagName("header")[0].style.backgroundColor="#062E69"
    document.getElementsByTagName("div")[0].style.backgroundColor="#80ADCC"
    // console.log("desert")
}
document.querySelector("#high-contrast").onclick=function(){
    document.getElementsByTagName("header")[0].style.backgroundColor="#000000"
    document.getElementsByTagName("div")[0].style.backgroundColor="#FFFFFF"
    // console.log("desert")
}
// document.querySelector("#ocean").addEventListener('click', changeTheme("ocean"))
// document.querySelector("#high-contrast").addEventListener('click', changeTheme("high-contrast"))