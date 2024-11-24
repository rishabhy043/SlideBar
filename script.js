let scrollbar = document.querySelector('.gallery');
let backbtn = document.getElementById('backbtn')
let nextbtn = document.getElementById('nextbtn')

scrollbar.addEventListener("wheel" , (evt) => {
  evt.preventDefault();
scrollbar.scrollLeft += evt.deltaY;
})
nextbtn.addEventListener('click' , ()=>{
  scrollbar.style.scrollBehavior = "smooth";
  scrollbar.scrollLeft +=900;
})  
backbtn.addEventListener('click' , ()=>{
  scrollbar.scrollLeft -=900;

})