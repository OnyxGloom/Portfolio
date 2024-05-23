
let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }
  
function moveToAbout() {
  window.location.href ="./about.html"
}

const openAbout = () => {

  const currentSlide = document.querySelector(`[data-status="active"]`)

  const currentSlideIndex = currentSlide.dataset.index;

  const currentArticleSectionLeftImage = document.querySelector(`.li${currentSlideIndex}`),
        currentArticleSectionLeftTitle = document.querySelector(`.lt${currentSlideIndex}`)

  const currentArticleSectionRightPara = document.querySelector(`.rp${currentSlideIndex}`),
        currentArticleSectionRightNav = document.querySelector(`.rn${currentSlideIndex}`)

  currentArticleSectionLeftImage.dataset.status = "leave-left"
  currentArticleSectionLeftTitle.dataset.status = "leave-left"
  currentArticleSectionRightPara.dataset.status = "leave-right"
  currentArticleSectionRightNav.dataset.status = "leave-right"
  setTimeout (moveToAbout, 1500)

}