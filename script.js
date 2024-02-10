function init(){
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  };
  init();
  

VANTA.NET({
  el: "#homePage",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x156be3,
  backgroundColor: 0x0,
  points: 12.00,
  maxDistance: 19.00,
  spacing: 17.00
})
let typed = new Typed("#anim-text", {
    strings: ["Frontend developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  })


  let sidebar=document.querySelector(".sidebar")
  let menubar=document.querySelector(".menu");
  let closeMenu=document.querySelector(".close")

  menubar.addEventListener("click",()=>{
           sidebar.style.width="100%"
           sidebar.style.display="block"
           closeMenu.style.display="block"
           sidebar.style.transition='all ease-in-out 0.8s'
  })
  closeMenu.addEventListener("click",()=>{
           sidebar.style.width="0%"
           sidebar.style.display="none"
           closeMenu.style.display="none"
           sidebar.style.transition='all ease-in-out 0.8s'
  })


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const messageInput = document.getElementById('message');
const formErrors = document.getElementById('form-errors');

form.addEventListener('submit', (event) => {
    event.preventDefault();

     alert('Form Submitted Successfully');

     nameInput.value=""    
     emailInput.value=""
     addressInput.value=""
     messageInput.value=""
});







  



 