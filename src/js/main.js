const navbarMenu = document.querySelector('#navbarMenu');
const navbarList = document.querySelector('#navbarList');
const navbarClose = document.querySelector('#navbarClose');

// EVENT LISTENER FOR MENU BAR
navbarMenu.addEventListener('click', toClick);
navbarClose.addEventListener('click', toClose);

// FUNCTION FOR ADDING CLASS
function toClick() {
	navbarList.classList.add('modal');
}
// FUNCTION FOR REMOVE CLASS
function toClose() {
	navbarList.classList.remove('modal');
}
