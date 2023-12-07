const faqBtns = document.querySelectorAll('.accordion-btn');
const faqDescription = document.querySelector('.faq-answer');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

faqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    faqDescription.classList.toggle('active')

    if(faqDescription.style.maxHeight) {
      faqDescription.style.maxHeight = null
      plusBtn.style.display = 'block'
      minusBtn.style.display = 'none'
    } else {
      faqDescription.style.maxHeight = faqDescription.scrollHeight + 'px'
      plusBtn.style.display = 'none'
      minusBtn.style.display = 'block'
    }
  })
})