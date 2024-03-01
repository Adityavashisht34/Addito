const acc_ques = document.querySelectorAll('.item-ques')
const acc_ans = document.querySelectorAll('.item-answer')
const arrows = document.querySelectorAll('.arrow-icon')

// faq functionality
for (let ind = 0; ind < acc_ques.length; ind++) {
  acc_ques[ind].addEventListener('click', () => {
    arrows[ind].classList.toggle('open')
    acc_ans[ind].classList.toggle('acc-active')
  })
}

// input error msg
const error_icon = document.querySelector('.error-icon')
const error_msg = document.querySelector('.error-msg')
const input = document.querySelector('.input')
const contact_btn = document.querySelector('.contact-btn')
const contact_msg = document.querySelector('.contact-msg')

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
contact_btn.addEventListener('click', () => {
  const expression = input.value
  if (!validateEmail(expression)) {
    error_icon.classList.add('error-active')
    error_msg.classList.add('error-active')
    input.classList.add('error-active')
  } else {
    input.value = ''
    const showTime = setTimeout(() => {
      contact_msg.style.display = 'block'
    }, 1000)
    setTimeout(() => {
      clearTimeout(showTime)
      contact_msg.style.display = 'none'
    }, 3000)
  }
})

input.addEventListener('keydown', () => {
  error_icon.classList.remove('error-active')
  error_msg.classList.remove('error-active')
  input.classList.remove('error-active')
})

// tab logic
const tab_items = document.querySelectorAll('.tab-list-item')
const tab_contents = document.querySelectorAll('.tab-content')

for (let ind = 0; ind < tab_items.length; ind++) {
  tab_items[ind].addEventListener('click', () => {
    tab_items.forEach((item, ind) => {
      item.classList.remove('active')
      tab_contents[ind].classList.remove('active')
    })
    tab_items[ind].classList.add('active')
    tab_contents[ind].classList.add('active')
  })
}
// window loading
window.addEventListener('load', () => {
  // close arrow icon
  arrows.forEach((item) => {
    item.classList.remove('open')
  })

  // close every faq answer
  acc_ans.forEach((ans) => {
    ans.classList.remove('acc-active')
  })

  // remove all tabs
  tab_items.forEach((item, ind) => {
    item.classList.remove('active')
    tab_contents[ind].classList.remove('active')
  })
  // select only one tab
  tab_items[0].classList.add('active')
  tab_contents[0].classList.add('active')
  error_icon.classList.remove('error-active')
  error_msg.classList.remove('error-active')
  input.classList.remove('error-active')
  input.value = ''
})

// menu logic
const menu_btn = document.querySelector('#menu')
const close_btn = document.querySelector('#close')
const active_nav_container = document.querySelector('.active-menu')
const nav_link = document.querySelectorAll('.link-item a')

menu_btn.addEventListener('click', () => {
  active_nav_container.style.display = 'flex'
})
nav_link.forEach((item) => {
  item.addEventListener('click', () => {
    active_nav_container.style.display = 'none'
  })
})

close_btn.addEventListener('click', () => {
  active_nav_container.style.display = 'none'
})