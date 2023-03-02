// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 200) {
//           document.getElementById('navbar_top').classList.add('fixed-top');
//           // add padding top to show content behind navbar
//           navbar_height = document.querySelector('.navbar').offsetHeight;
//           document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('navbar_top').classList.remove('fixed-top');
//            // remove padding top from body
//           document.body.style.paddingTop = '0';
//         } 
//     });
// }); 
  
(function mainScript() {
  "use strict";
  const offcanvasToggle = document.querySelector(
    '[data-bs-toggle="offcanvas"]'
  );
  const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
  offcanvasToggle.addEventListener("click", function () {
    offcanvasCollapse.classList.toggle("open");
  });
})();
