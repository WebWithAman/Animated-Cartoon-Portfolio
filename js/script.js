/***************************************************************
 Get Toggle Button And Menubar
***************************************************************/
const toggleBtn = document.querySelector(".toggle");
const menubar = document.querySelector(".menubar");

let flag = true;

/***************************************************************
  Add Click Event On Toggle Button to Show Menubar 
***************************************************************/
toggleBtn.addEventListener('click', () => {

    /***************************************************************
       Add Show Class To Menubar
    ***************************************************************/
    menubar.classList.toggle("show");

    /***************************************************************
       If Flag True Than Add Close Icon Else Open
    ***************************************************************/
    toggleBtn.innerHTML = flag ? "&#10799" : "&#8801";

    flag = !flag;

})
