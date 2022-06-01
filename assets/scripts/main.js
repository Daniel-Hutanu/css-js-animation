const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  mousewheel: true,
  speed: 600,
  spaceBetween: 0,
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});


const swiperSlides = document.getElementsByClassName('swiper-slide');


for(let i = 0; i < swiperSlides.length; i++){
  let numberOfSlide = swiperSlides[i].getAttribute('data-swiper-slide-index')
  if(numberOfSlide != 0){
    let pageNumber = document.createElement('p')
    pageNumber.classList.add('page-number')
    pageNumber.textContent = numberOfSlide
    swiperSlides[i].appendChild(pageNumber)
  }
}