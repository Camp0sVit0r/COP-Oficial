// ================================ Carrossel 1 ==========================================

// const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, prevPageX, prevScrollLeft;
// let firstImgWidth = firstImg.clientWidth + 14;

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     })
// });

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("draggin");
//     let positionDiff = e.pageX - prevPageX
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("draggin");
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);



//==================================== Carrossel 2 =================================
var TrandingSlider = new Swiper('.tranding-slider', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   loop: true,
   slidesPerView: 'auto',
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 100,
     modifier: 2.5,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });