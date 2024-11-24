let scrollbar = document.querySelector('.gallery');
let backbtn = document.getElementById('backbtn')
let nextbtn = document.getElementById('nextbtn')

scrollbar.addEventListener("wheel" , (evt) => {
  evt.preventDefault();
scrollbar.scrollLeft += evt.deltaY;
})
