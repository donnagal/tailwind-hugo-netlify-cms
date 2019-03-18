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

   // if background colour is light
   $('#nutritional a[style="background-color: #FFFFFF"]').css('background', '#a6a6a6');
   $('#nutritional a[style="background-color: #CCFF66"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #FCCA53"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #FFF888"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #90EE90"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #FFFF99"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #D4E901"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #bfd833"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #FFFD37"]').addClass("text-dark");
   $('#nutritional a[style="background-color: #ffffaa"]').addClass("text-dark");
});


