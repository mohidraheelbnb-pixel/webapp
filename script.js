  document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('#bestsellerSplide', {
      type: 'slide',
      perPage: 3,
      perMove: 1,
      gap: '20px',
      pagination: false,
      arrows: false,
      autoplay: false,
      keyboard: true,
      breakpoints: {
        991: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        }
      }
    });
 
    // Custom arrow buttons
    var prev = document.querySelector('.emblaPrev');
    var next = document.querySelector('.emblaNext');
 
    prev.addEventListener('click', function() {
      splide.go('-');
    });
 
    next.addEventListener('click', function() {
      splide.go('+');
    });
 
    splide.mount();
  });
document.addEventListener('DOMContentLoaded', function () {

  // Header glass background after scroll
  var header = document.getElementById('headerSection');
  function onScroll() {
    if (window.scrollY > 20) header.classList.add('active');
    else header.classList.remove('active');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var menuSection = document.getElementById('menuSection');
  if (navToggle && menuSection) {
    navToggle.addEventListener('click', function () {
      menuSection.classList.toggle('open');
    });
  }

  // Mobile Services submenu toggle
  var hasSubMenu = document.querySelector('.hasSubMenu');
  if (hasSubMenu) {
    var subMenuLink = hasSubMenu.querySelector(':scope > a');
    subMenuLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        hasSubMenu.classList.toggle('open');
      }
    });
  }

  // Testimonial carousel
  var avatars = document.querySelectorAll('.clientsReviewsHeader li');
  var reviewsContainer = document.getElementById('reviewsContainer');
  var slides = reviewsContainer ? reviewsContainer.querySelectorAll('.emblaSlide') : [];
  var current = 0;

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    reviewsContainer.style.transform = 'translateX(-' + (current * 100) + '%)';
    avatars.forEach(function (a, i) {
      a.classList.toggle('active', i === current);
    });
  }

  avatars.forEach(function (avatar, i) {
    avatar.addEventListener('click', function () { goToSlide(i); });
  });

  var reviewsPrev = document.getElementById('reviewsPrev');
  var reviewsNext = document.getElementById('reviewsNext');
  if (reviewsPrev) reviewsPrev.addEventListener('click', function () { goToSlide(current - 1); });
  if (reviewsNext) reviewsNext.addEventListener('click', function () { goToSlide(current + 1); });

  if (slides.length) {
    setInterval(function () { goToSlide(current + 1); }, 2000);
  }

  // Bestseller/portfolio carousel prev/next (native scroll)
  var bestsellerViewport = document.getElementById('bestsellerViewport');
  document.querySelectorAll('[data-target="bestsellerViewport"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!bestsellerViewport) return;
      var amount = 320;
      bestsellerViewport.scrollBy({
        left: btn.classList.contains('emblaPrev') ? -amount : amount,
        behavior: 'smooth'
      });
    });
  });

  // Contact form - local demo submit (no backend)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! This is a local replica — hook this form up to your backend/CRM when ready.');
      contactForm.reset();
    });
  }
});
