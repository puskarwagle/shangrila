// boxes of achievements animate on intersection 
const boxes = document.querySelectorAll('.box');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateX(0%)';
	  entry.target.style.opacity = '1';
	  observer.unobserve(entry.target);
    } 
	else {
      entry.target.style.transform = 'translateX(50%)';
      entry.target.style.opacity = '0.5';
	 }
  });
}, options);
boxes.forEach(box => {
  observer.observe(box, { once: true });
});
// happy clients intersection observer
const boxes2 = document.querySelectorAll('#happy');
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};
const observer2 = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0%)';
	  entry.target.style.opacity = '1';
	  observer.unobserve(entry.target);
    } 
	else {
      entry.target.style.transform = 'translateY(50%)';
      entry.target.style.opacity = '0';
	 }
  });
}, options2);

boxes2.forEach(box => {
  observer2.observe(box, { once: true });
});
const header = document.getElementById('header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// happy clients loop
const happy = document.getElementById('div');

happy.addEventListener('scroll', function() {
  if (happy.scrollLeft + happy.clientWidth >= happy.scrollWidth) {
    
    happy.appendChild(happy.firstElementChild);
    happy.scrollLeft -= happy.firstElementChild.clientWidth;
  }
});
