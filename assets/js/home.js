/*----------------------------------------
             Enable tooltips start
------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
    new bootstrap.Tooltip(tooltipTriggerEl)
  )
});
/*----------------------------------------
             Enable tooltips end
------------------------------------------*/
/*----------------------------------------
        scroll animation start
------------------------------------------*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-animation').forEach((el) => observer.observe(el));
/*----------------------------------------
          scroll animation end
------------------------------------------*/
/*----------------------------------------
       hover function 1 start
------------------------------------------*/
function hoverIn1() {
  $(this).css("transform", "scale(1.1)");
};
function hoverout1() {
  $(this).css("transform", "scale(1)");
};
/*----------------------------------------
       hover function 2 start
------------------------------------------*/
function hoverIn2() {
  $(this).css("transform", "scale(1.2)");
};
function hoverout2() {
  $(this).css("transform", "scale(1)");
};
/*----------------------------------------
       hover function 3 start
------------------------------------------*/
function hoverIn3() {
  $(this).css("transform", "scale(1.4)");
};
function hoverout3() {
  $(this).css("transform", "scale(1)");
};
/*----------------------------------------
       hover function 4 start
------------------------------------------*/
function hoverIn4() {
  $(this).css("transform", "scale(1.05)");
};
function hoverout4() {
  $(this).css("transform", "scale(1)");
};
/*----------------------------------------
       hover opacity funciton start
------------------------------------------*/
function hoveropacityin() {
  $(this).css("opacity", "1");
};
function hoveropacityout() {
  $(this).css("opacity", "0.7");
};
/*----------------------------------------
       navigation text & button hover
------------------------------------------*/
$(document).ready(function () {
  $("#navhome , #navlink , #navabout , #navalbums , #navdisabled, #navbutton").hover(hoverIn2, hoverout2);
});
/*----------------------------------------
       hero section text & button hover
------------------------------------------*/
$(document).ready(function () {
  $("#herobutton1 , #herobutton2").hover(hoverIn1, hoverout1);
});

$(document).ready(function () {
  $(" #social-media-link").hover(hoverIn3, hoverout3);
});
/*----------------------------------------
       logo hover & hover opacity
------------------------------------------*/
$(document).ready(function () {
  $("#logo1 , #logo2 , #logo3 , #logo4 , #logo5").hover(hoveropacityin, hoveropacityout);
  $("#logo1 , #logo2 , #logo3 , #logo4 , #logo5").hover(hoverIn1, hoverout1);
});

/*----------------------------------------
       Albums card link & photo hover
------------------------------------------*/
$(document).ready(function () {
  $(".card-link-hover").hover(hoverIn2, hoverout2);
  $(".card-image-hover").hover(hoverIn4, hoverout4);
});
