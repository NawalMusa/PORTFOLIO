//Navigation bar effect on scroll

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
//End of Navigation bar section 


//Service section modal
// Select all service modals, learn more buttons, and modal close buttons
document.addEventListener('DOMContentLoaded', () => {
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

console.log(serviceModals); 
console.log(learnmoreBtns); 

// Function to activate a specific modal
const modal = function(modalIndex) {
    serviceModals[modalIndex].classList.add("active");
};

// Add event listeners to the "Learn More" buttons
learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

// Add event listeners to the close buttons
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});
});
//end of service modal

//swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  //end of swiper

  //scroll to top button 
  const scrollTopBtn= document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll" , function (){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});
 //End of scroll to top button 

 //Navigation menu items active on page scroll
 window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav a[href="#${id}"]`).classList.add("active");
        }
        else{
            document.querySelector(`.nav a[href="#${id}"]`).classList.remove("active");
        }
    });
});



