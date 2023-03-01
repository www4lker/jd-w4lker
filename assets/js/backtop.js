window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    document.querySelector('.back-to-top').style.display = 'block';
  } else {
    document.querySelector('.back-to-top').style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
});

