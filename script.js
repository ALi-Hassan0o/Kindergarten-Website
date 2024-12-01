//navbar click
const btnOpen=document.getElementById("Openbars");
const btnclose=document.getElementById("Closebars");
const links=document.getElementById("links");

btnOpen.addEventListener('click',function () {
    links.style.display='block';
    btnOpen.style.display='none';
    btnclose.classList.remove('hide')
})
btnclose.addEventListener('click',function () {
     links.style.display='none'; 
   btnclose.classList.add('hide')  
      btnOpen.style.display='block';
         btnclose.style.fontSize='40px';
})
//
