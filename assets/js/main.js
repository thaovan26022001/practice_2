const actionMenus = document.querySelectorAll('.js-action')
const modal = document.querySelector('.js-modal')
const closes = document.querySelectorAll('.js-close')
function showMenu() {
    modal.classList.add('header__modal-open')

}
function hideMenu() {
    modal.classList.remove('header__modal-open')

}
for (const actionMenu of actionMenus) {
    actionMenu.addEventListener('click', showMenu)
}
for ( const close of closes) {
    close.addEventListener('click', hideMenu)
}


