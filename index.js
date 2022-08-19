const dateElement = document.querySelector('span.date')
const hamburger = document.querySelector('.hamburger')

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav')
  navbar.classList.toggle('nav-active', window.scrollY > 80)
})


function getCurrentYear() {
  const date = new Date()
  dateElement.textContent = date.getFullYear()
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("hamburger_active")
})

getCurrentYear()