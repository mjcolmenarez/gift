// Scroll reveal
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{
  threshold:0.3
});

sections.forEach(section=>{
  observer.observe(section);
});

// Popup
const popup = document.querySelector('.popup');
const popupImg = document.getElementById('popupImg');
const popupText = document.getElementById('popupText');

document.querySelectorAll('.contact-grid img').forEach(img=>{
  img.addEventListener('click',()=>{
    popup.style.display='flex';
    popupImg.src = img.src;
    popupText.innerText = img.dataset.text;
  });
});

popup.addEventListener('click',()=>{
  popup.style.display='none';
});
