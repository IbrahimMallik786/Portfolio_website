//Header toggle

let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark')
})

//Typing Effects

let typed=new Typed('.auto-input',{
  strings:['Frontend Developer!','Backend Developer!','Software Developer!'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:200,
  loop:true,
})

//Active Link State on Scroll

//Get All Links
let navLinks=document.querySelectorAll('nav ul li a')
//Get All Sections
let sections=document.querySelectorAll('section')


window.addEventListener('scroll',function(){
  const scrollPos=window.scrollY+20
sections.forEach(section=>{
  if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight) ){
    navLinks.forEach(link =>{
      link.classList.remove('active');
      if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
        link.classList.add('active')
      }
    });
  }
});
});

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}