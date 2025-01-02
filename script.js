

let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.side-bar');

let container= document.querySelector('.container');

menuIcon.onclick = function(){
    sidebar.classList.toggle('samll-sidebar');
    container.classList.toggle('large-container');
}