let sliders = document.querySelectorAll('.slide-panel')
let pages = document.querySelectorAll('.slide-content')

sliders.forEach((slide, index) => {
  slide.addEventListener("click", ()=> {
    slide.classList.add('active');
    pages[index].classList.add('visible');
    sliders.forEach((nonAct, index) => {
      if (nonAct!=slide){
        nonAct.classList.remove('active');
        pages[index].classList.remove('visible');
      }
    })
  })
})
