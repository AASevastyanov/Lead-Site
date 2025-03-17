let questions = document.querySelectorAll('.questions-blocks__more');
let moreButton = document.querySelectorAll('.questions-blocks__info-more');

moreButton.forEach((more, index) => {
  more.addEventListener("click", ()=> {
    more.classList.toggle('questions-more-visible');
    questions[index].classList.toggle('questions-visible');
    moreButton.forEach((hidden, index) => {
      if (hidden!=more){
        hidden.classList.remove('questions-more-visible');
        questions[index].classList.remove('questions-visible');
      }
    })
  })
})