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


const actionHeaders = document.querySelector('.js-action-1')
const model = document.querySelector('.js-modal-1')
const exits = document.querySelector('.js-close-1')
function showHeader() {
    model.classList.add('header__content-open')

}
function hideHeader() {
    model.classList.remove('header__content-open')
} 

actionHeaders.addEventListener('click', showHeader)

exits.addEventListener('click', hideHeader)
