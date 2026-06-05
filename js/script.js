function showSection(sectionId){
  const sections = document.querySelectorAll('.section');

  sections.forEach(function(section){
    section.classList.remove('active-section');
  });


  document.getElementById(sectionId).classList.add('active-section');
}

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  alert('Thank you! Your message has been received.');
  form.reset();
});
