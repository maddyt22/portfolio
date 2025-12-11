


window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
}

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

'use strict';

function setupIcons() {
  const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
  const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');
  
  function setLight() {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }

  function setDark() {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  }


  const matcher = window.matchMedia('(prefers-color-scheme:dark)');
  function onUpdate() {
    if (matcher.matches) {
      setDark();
    } else {
      setLight();
    }
  }
  matcher.addListener(onUpdate);
  onUpdate();
}

setupIcons();

$(function () {
  $('#nav-icon3').click(function () {
      $('.sliding-nav').toggleClass('sliding-nav-open');
      $('#nav-icon3').toggleClass('menu-opened');
  });

  $('.open').click(function () {
      $('.sliding-nav').toggleClass('sliding-nav-open');
      $('#nav-icon3').toggleClass('menu-opened');
  })
});


$(document).ready(function () {
  $('#nav-icon3').click(function () {
      $(this).toggleClass('open');
  });
});









gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let speed = 50;

var headershrink = new gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: "header",
    start: "top top",
    end: "1000% 100%",
    scrub: true,
    
    
  }
});

headershrink.to('header', 
{"--headerborder": '100%', "height": "80px"
});
headershrink.to('.headercontent', 
{"height": "80px"}, "<");
headershrink.to('.headerlogo', 
{"padding-left": "45px"}, "<");



gsap.to(".hero [data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  ease: "none",
  scrollTrigger: {
    triggerElement: ".hero",
    start: "top top",
    end: "100% 100%",
    // markers: true,
    pin: true,
    invalidateOnRefresh: true,
    scrub: 1
  }
});

gsap.utils.toArray(".homepageabout [data-speed]").forEach(el => {
  gsap.to(el, {
    y: function () { return (1 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger.maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0)) },
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "max",
      invalidateOnRefresh: true,
      scrub: true
    }
  });
});

gsap.utils.toArray(".aboutsection1 [data-speed]").forEach(el => {
  gsap.to(el, {
    y: function () { return (1 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger.maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0)) },
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "max",
      invalidateOnRefresh: true,
      scrub: true
    }
  });
});
gsap.utils.toArray(".abtmountains [data-speed]").forEach(el => {
  gsap.to(el, {
    y: function () { return (3 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger.maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0)) },
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "max",
      invalidateOnRefresh: true,
      scrub: 3
    }
  });
});

gsap.utils.toArray(".servicespage [data-speed]").forEach(el => {
  gsap.to(el, {
    y: function () { return (3 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger.maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0)) },
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "max",
      invalidateOnRefresh: true,
      scrub: true
    }
  });
});


// Portfolio page change bg

$(function() {
  $('.billy').hover(function() {
    $(':root').css({'--pink': '#681a42', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });

  $('.foxtails').hover(function() {
    $(':root').css({'--pink': '#F8A33D', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });

  $('.cinderella').hover(function() {
    $(':root').css({'--pink': '#f3b1b9', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });

  $('.elektrik').hover(function() {
    $(':root').css({'--pink': '#1d1e23', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });

  $('.fiesta').hover(function() {
    $(':root').css({'--pink': '#52c2b6', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });
  
  $('.maxim').hover(function() {
    $(':root').css({'--pink': '#e5b6af', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });
  $('.lisab').hover(function() {
    $(':root').css({'--pink': '#fff', '--green': '#9eb3ae'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });
  $('.publ').hover(function() {
    $(':root').css({'--pink': '#ee937c', '--green': '#fee6db'});
  }, 
  function() {
    // on mouseout, reset the background colour
    $(':root').css({'--pink': '#fee6db', '--green': '#00363e'});
  });
});

// ---------------------
var controller = new ScrollMagic.Controller
var fadeup = document.getElementsByClassName("fadeup");
for (var i = 0; i < fadeup.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: fadeup[i], // y value not modified, so we can use element as trigger as well
    // start a little later
    triggerHook: 0.7,
    // duration: "80%",
    reverse: false,
  })
    .setClassToggle(fadeup[i], "visible") // add class toggle
    // .addIndicators({name: "project" + (i+1) }) // add indicators (requires plugin)
    .addTo(controller);
}


var startl = gsap.timeline()
  .set('.path', {
    x: "random(-200, 200, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-100, 100, 3)",
    scale: "random(0.3, 0.8)",
  })
  .to('.path', {
    x: "random(-200, 200, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-100, 100, 3)",
    scale: "random(0.1, 1)",
    duration: 20,
    yoyo: true,
    ease: "none",
    repeat: -1,
    repeatRefresh: true // gets a new random x and y value on each repeat
  })

gsap.set(".laptopscroll", {height: "70vh"})

  const page = document.querySelector(".lbscroll");
  console.log(scroll.offsetWidth)
  

  
 gsap.to(page, {
  xPercent: 70 * (page.scrollWidth - 1),
  duration: 3,
    ease: "none",
    scrollTrigger: {
      trigger: ".laptopscroll",
      start: "top 20%",
      pin: true,
     
      invalidateOnRefresh: true,
      scrub:true
    }
  });
  




// ---------Contact---------

const frontmountains = document.querySelectorAll('.contact-m1');
const middlemountains = document.querySelectorAll('.contact-m2');
const backmountains = document.querySelectorAll('.contact-m3');
const contactstars = document.querySelector('.contactstars');
const contactcontainer = document.querySelector('.contactanimcontainer')
const containerCoords = document.querySelector('.contactanim');
const mouseCoords = containerCoords.getBoundingClientRect();

contactcontainer.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(frontmountains, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 20,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 20,
     ease: Power4.easeOut
   })
   TweenMax.to(middlemountains, 0.3, {
    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
    ease: Power4.easeOut
  })
  TweenMax.to(backmountains, 0.3, {
    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 100,
    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 100,
    ease: Power4.easeOut
  })
  TweenMax.to(contactstars, 0.3, {
    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 150,
    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 150,
    ease: Power4.easeOut
  })
});


contactcontainer.addEventListener('mouseleave', function(e) {
  TweenMax.to(frontmountains, 0.3, {
    x: 0,
    y: 0,

  });
  TweenMax.to(middlemountains, 0.3, {
    x: 0,
    y: 0,

  });  
  TweenMax.to(backmountains, 0.3, {
    x: 0,
    y: 0,

  }); 
   TweenMax.to(contactstars, 0.3, {
    x: 0,
    y: 0,

  });
 
});



