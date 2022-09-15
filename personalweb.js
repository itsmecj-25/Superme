const toggle = document.getElementsByClassName('toggle')[0]
const navlist = document.getElementsByClassName('nav-list')[0]

toggle.addEventListener('click',() => {
    navlist.classList.toggle('active')
})