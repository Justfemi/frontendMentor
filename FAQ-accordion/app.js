const faqBtns = document.querySelectorAll('.faq-btn');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');

faqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const faqDescription = btn.nextElementSibling;

    document.querySelectorAll('.faq-answer').forEach(answer => {
      if (answer !== faqDescription) {
        answer.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });

    faqDescription.classList.toggle('active');
    if (faqDescription.style.maxHeight) {
      faqDescription.style.maxHeight = null;
      plusBtn.style.display = 'block'
      minusBtn.style.display = 'none'
    } else {
      faqDescription.style.maxHeight = faqDescription.scrollHeight + 'px';
      plusBtn.style.display = 'none'
      minusBtn.style.display = 'block'
    }
  })
})