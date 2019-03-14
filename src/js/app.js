// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


// Swipper
var swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});



$(function() {
   $(".swiper-nav a").click(function() {
      // remove classes from all
      $(".swiper-nav a").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});