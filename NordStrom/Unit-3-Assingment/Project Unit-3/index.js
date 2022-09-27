
var productContainer=document.querySelectorAll('.product-container');
var nxtBtn=document.querySelectorAll( '.nxt-btn');
var preBtn=document.querySelectorAll( '.pre-btn');


productContainer.forEach((item,i)=>{
    var contDimensions=item.getBoundingClientRect();
    var contwidth=contDimensions.width;
    nxtBtn[i].addEventListener("click",()=>{
        item.scrollLeft +=contwidth;
        
    })
    preBtn[i].addEventListener('click',()=>{
       item.scrollLeft -=contwidth;
    })
    
});



 
let i = 0;
function init() {

    
const imageArr = ["https://n.nordstrommedia.com/id/30f4a509-58fe-483f-b861-2fef342c6441.jpeg?h=622&w=1608" ,
                    
"https://n.nordstrommedia.com/id/5a88520e-8ee7-4cf0-829d-3d833b0a9af2.jpeg?h=622&w=1608",
 "https://n.nordstrommedia.com/id/ae19312f-ca77-4db9-94ee-658516ba458c.jpeg?h=622&w=1608",


]

setInterval(() => {
document.querySelector("#slideshow>img").src = imageArr[i++];

if (i === imageArr.length) i = 0;
}, 3000)
}

init();












const slider=document.querySelector(".slider");
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
const slides=document.querySelectorAll(".slide");
const slideIcons=document.querySelectorAll(".slide-icon");
const numberOfSlides=slides.length;

var slideNumber=0;

//image slider next button

nextBtn.addEventListener("click",()=>{

    slides.forEach((slide)=>{
        
        slide.classList.remove("active");
      });

      slideIcons.forEach((slideIcon)=>{
        
        slideIcon.classList.remove("active");
      });





    slideNumber++;

    if(slideNumber > (numberOfSlides-1)){

        slideNumber=0;
    }
 
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    

});

// //image slider previous button

prevBtn.addEventListener("click",()=>{

slides.forEach((slide)=>{
    
    slide.classList.remove("active");
  });

  slideIcons.forEach((slideIcon)=>{
    
    slideIcon.classList.remove("active");
  });





slideNumber--;

if(slideNumber < 0){

    slideNumber=numberOfSlides-1;
}

slides[slideNumber].classList.add("active");
slideIcons[slideNumber].classList.add("active");


});


//image slider autoplay

var playslider;

var repeater=() =>{
    playslider= setInterval(function(){
        slides.forEach((slide)=>{
        
        slide.classList.remove("active");
      });

      slideIcons.forEach((slideIcon)=>{
        
        slideIcon.classList.remove("active");
      });





    slideNumber++;

    if(slideNumber > (numberOfSlides-1)){

        slideNumber=0;
    }
 
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    
},1000)
}

repeater();

//stop the image slider autoplay on mouseover

slider.addEventListener("mouseover",()=>{

    clearInterval(playslider)
});


slider.addEventListener("mouseout",()=>{

    repeater();
});










const slider1=document.querySelector(".slider1");
const nextBtn1=document.querySelector(".next-btn");
const prevBtn1=document.querySelector(".prev-btn");
const slides1=document.querySelectorAll(".slide1");
const slideIcons1=document.querySelectorAll(".slide-icon");
const numberOfSlides1=slides1.length;

var slideNumber=0;

//image slider next button

nextBtn1.addEventListener("click",()=>{

    slides1.forEach((slide1)=>{
        
        slide1.classList.remove("active");
      });

      slideIcons1.forEach((slideIcon1)=>{
        
        slideIcon1.classList.remove("active");
      });





    slideNumber++;

    if(slideNumber > (numberOfSlides1-1)){

        slideNumber=0;
    }
 
    slides1[slideNumber].classList.add("active");
    slideIcons1[slideNumber].classList.add("active");
    

});

// //image slider previous button
 



 

// //image slider autoplay
 


 

//stop the image slider autoplay on mouseover
 

// --------navbar--------------

import { navbar } from "./navbar.js";

document.getElementById("navbar").innerHTML=navbar();


//----------footer--------------

import {footer} from "./footer.js"

document.getElementById("bottom").innerHTML=footer()



            
            
