// loader on set time
const loaderContainer = document.querySelector('.loader-container');

setTimeout(() => {
  loaderContainer.classList.add('d-none');
  const body = document.querySelector('#body');
  body.classList.add('focus-in');
  }, 1100 );


// pushbar
const pushbar = new Pushbar({
  blur:false,
  overlay:true,
});


// fullpage
new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: false,
  scrollBar: false,
  licenseKey: 'gplv3-license',
  scrollingSpeed: 1000,
  continuousVertical: true,
  navigation: true,
  anchors:['0', '1', '2', '3', '4'],
  credits: {enabled: false},
  normalScrollElements: '.modal-content',
  scrollOverflow: true,
});


// nav-links (desktop)
const navAbout = document.querySelector('#nav-about');
const navPortfolio = document.querySelector('#nav-portfolio');
const navResume = document.querySelector('#nav-resume');
const navContact = document.querySelector('#nav-contact');

navAbout.addEventListener('click', () => window.location.href = '#1'); // anchors created by fullpage.js
navPortfolio.addEventListener('click', () => window.location.href = '#2');
navResume.addEventListener('click', () => window.location.href = '#3');
navContact.addEventListener('click', () => window.location.href = '#4');


// nav-links (mobile)
const mobileNavAbout = document.querySelector('#mobile-nav-about');
const mobileNavPortfolio = document.querySelector('#mobile-nav-portfolio');
const mobileNavResume = document.querySelector('#mobile-nav-resume');
const mobileNavContact = document.querySelector('#mobile-nav-contact');

mobileNavAbout.addEventListener('click', () => {
  window.location.href = '#1'; // anchors created by fullpage.js
  pushbar.close(); // closes the mobile nav-menu
});

mobileNavPortfolio.addEventListener('click', () => {
  window.location.href = '#2'
  pushbar.close();
});

mobileNavResume.addEventListener('click', () => {
  window.location.href = '#3'
  pushbar.close();
});

mobileNavContact.addEventListener('click', () => {
  window.location.href = '#4'
  pushbar.close();
});


// scroll to #about-anchor when clicking "learn more"
const learnMore = document.querySelector('#learn-more');
learnMore.addEventListener('click', () => window.location.href = '#1');

