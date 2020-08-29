$(document).ready(function() {

  // const anime = require('animejs');
  // import anime from 'animejs/lib/anime.es.js';


  // anime({
  // targets: 'div',
  // translateX: 250,
  // rotate: '1turn',
  // backgroundColor: '#FFF',
  // duration: 800
  // });

  var colcade = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });



  // by default, hide the closeup

  $(".closeupContainer").hide();
  $(".back").hide();

  // add images to the pins

  let pins = document.getElementsByClassName("grid-item");

  let addImages = function(pins) {
    for (let i = 0; i < pins.length; i++) {
      let pin = pins[i];
      pin.style.backgroundImage = "url('assets/img/pin" + [i] + ".jpg')"; 
      pin.style.backgroundSize = "cover";
      pin.style.backgroundPosition = "center center";
    }

    
  }

  addImages(pins);

  // bottom right
  let bottomRight = document.createElement("div");
  bottomRight.className = "bottom-right";

  let plus = document.createElement("img");
  plus.className = "bottom-right-icon plus";
  plus.src = "assets/img/plus.svg";

  let questionMark = document.createElement("img");
  questionMark.className = "bottom-right-icon question-mark";
  questionMark.src = "assets/img/question-mark.svg";

  bottomRight.append(plus);
  bottomRight.append(questionMark);
  $(".app").append(bottomRight);



  // make education modal

  let modal = document.createElement("div");
  modal.className = "modal";
  $(".app").append(modal);

  let masonryBg = document.createElement("div"); 
  masonryBg.className = "masonry-bg";
  modal.append(masonryBg);


  let modalContentCards = document.createElement("div");
  modalContentCards.className = "modal-content-cards";
  modal.append(modalContentCards);


  for (let i = 0; i < 2; i++) {

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContentCards.append(modalContent)

    let modalText = document.createElement("div");
    modalText.className = "modal-text";
    modalContent.append(modalText);

    let modalSubtext = document.createElement("div")
    modalSubtext.className = "modal-subtext";
    modalContent.append(modalSubtext);

    let modalButton = document.createElement("div");
    modalContent.append(modalButton);

    if (i == 0) {
      // text
      modalText.innerHTML = "Click on an idea you like to learn more about it";
      modalSubtext.innerHTML = "Ideas are links from all over";
      modalButton.innerHTML = "Next";
      modalButton.className = "modal-button modal-button-0"

    } else if (i == 1) {
      modalText.innerHTML = "Save ideas to collections";
      modalSubtext.innerHTML = "The more you save, the better our recommendations for you.";
      modalButton.innerHTML = "Got it";
      modalButton.className = "modal-button modal-button-1"

    }

  }

  // modalHeader = document.createElement("div");
  // modalHeader.className = "modal-header";
  // modal.append(modalHeader);

  let modalDotsContainer = document.createElement("div");
  modalDotsContainer.className = "modal-dots-container";
  modal.append(modalDotsContainer);

  let modalDot1 = document.createElement("div");
  modalDot1.className = "modal-dot";
  modalDotsContainer.append(modalDot1);

  let modalDot2 = document.createElement("div");
  modalDot2.className = "modal-dot";
  modalDotsContainer.append(modalDot2)

  let modalX = document.createElement("img");
  modalX.className = "modal-X";
  modalX.src = "assets/img/x.svg";
  // modalX.attr("src", "assets/img/x.svg");  
  modal.append(modalX); 


  let handSvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  $(".modal").append(handSvg);
  handSvg.setAttributeNS(null, 'width', 48);
  handSvg.setAttributeNS(null, 'height', 48);
  handSvg.setAttributeNS(null, 'viewBox', '0 0 48 48');
  handSvg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7756 22.3904C13.7747 23.9776 9.24586 22.359 7.21871 18.7698C7.03957 18.5027 6.86043 18.2183 6.68757 17.9103C5.13186 15.1634 3.02771 13.7821 2.58771 13.581C2.14928 13.3783 0.595142 12.613 1.09957 11.6921C1.38086 11.1798 2.16343 10.8011 2.87843 10.7257C4.00043 10.4806 5.89714 11.0337 7.77186 12.2217L4.05386 3.41855C3.74114 2.67684 3.98943 1.85027 4.60857 1.37884C4.61171 1.37569 4.61643 1.37255 4.62114 1.36941C4.67614 1.32698 4.73428 1.28927 4.79557 1.25312C4.80971 1.24684 4.82071 1.23898 4.83486 1.23112C4.90086 1.19498 4.97 1.16041 5.04228 1.13212C5.04386 1.13055 5.04543 1.13055 5.04543 1.13055C5.04543 1.13055 5.04543 1.13055 5.047 1.12898C5.11928 1.10069 5.19314 1.07869 5.267 1.05984C5.28114 1.05669 5.29528 1.05355 5.30943 1.04884C5.38014 1.03469 5.44928 1.02055 5.51843 1.01269C5.52471 1.01269 5.52943 1.01112 5.53414 1.01112C6.31671 0.927837 7.093 1.34741 7.40571 2.08755L9.59157 7.26069C9.64343 6.62269 10.0551 6.03498 10.7089 5.77569C11.6329 5.40955 12.6889 5.83855 13.0691 6.73427C13.0707 6.74212 13.0739 6.75155 13.077 6.75941C13.143 6.13555 13.5516 5.56512 14.1911 5.31212C15.1167 4.94598 16.1727 5.37341 16.5514 6.27069C16.5671 6.30527 16.5781 6.34141 16.5907 6.37912C16.6803 5.78355 17.0794 5.24927 17.6954 5.00569C18.6194 4.63955 19.6189 4.96955 19.9991 5.86684L20.0007 5.87155C20.0007 5.87155 21.1149 8.03855 22.3657 11.6513C22.4129 11.7911 22.4569 11.931 22.4946 12.0724C24.0267 16.1613 21.9666 20.7278 17.7756 22.3904Z" fill="#111111"/>'
  handSvg.setAttribute("class","handSvg");


  //make modal masonry

  let modalMasonry = document.createElement("div");
  modalMasonry.className = "masonry";
  // masonryBg.append(modalMasonry);

  for (let i = 0; i < 12; i++) {
    let modalMasonryPin = document.createElement("div");

    if (i == 5) {
      modalMasonryPin.className = "item item-main"
    } else if (i == 1 || i == 3 || i == 7 || i ==8) {
      modalMasonryPin.className = "item item-short";
    } else if (i == 4) {
      modalMasonryPin.className = "item item-medium";
    } else {
      modalMasonryPin.className = "item";

    }

    modalMasonry.append(modalMasonryPin);
  }

  //make modal save

  let modalSave = document.createElement("div");
  modalSave.className = "modal-save";
  modalSave.innerHTML = "Save";


  function firstHFCard() {




    //masonry bg for modal



    // if from closeup card special case 

    if ($(modalCloseup).is(":visible")) {

      $(".item").not(".item-main").css("opacity", "1");


      var scaleDownModalCloseup = anime({
        targets: '.modal-closeup',
        opacity: 0,
        scale: 1,
        translateX: 12,
        translateY: 14,
        easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)',
        duration: 85

      });

      scaleDownModalCloseup.play();


      var scaleDownCloseup = anime({
        targets: '.item-main',
        translateX: 0,
        translateY: 0,
        easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

      });

    scaleDownCloseup.play();





    } else {





    }


    // unhide masonry
    // reset item-main position into masonry grid 





    // global things that need to happen

    if ($(modalDot2).hasClass("modal-dot-active")) {
      modalSave.remove()


    }

    var scaleDown = anime({
      targets: '.masonry',
      scale: 1,
      duration: 500,
      easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

    });

    scaleDown.play();


    // reset pin scale up and down animation 

    $(".item-main").css("animation-name", "pinClicked");
    $(".item-main").css("animation-duration", "3s");
    $(".item-main").css("animation-iteration-count", "infinite");
    $(".item-main").css("animation-timing-function", "cubic-bezier(.63, .09, .3, .43");


    // this is the first step
    $(modalDot1).addClass("modal-dot-active");
    $(modalDot2).removeClass("modal-dot-active");
    $(".modal-content-cards").css("margin-left", "100%")

    // pointer animation
    $(".handSvg").css("position", "absolute");
    $(".handSvg").css("top", "24%");
    $(".handSvg").css("left", "60%");
    $(".handSvg").css("animation-name", "clickingArc");
    $(".handSvg").css("animation-duration", "1.5s");
    $(".handSvg").css("animation-iteration-count", "infinite");
    $(".handSvg").css("animation-direction", "alternate");




  }

  let modalCloseup = document.createElement("div");
  modalCloseup.className = "modal-closeup"
  masonryBg.append(modalCloseup);
  $(modalCloseup).css("opacity", "0");
  $(modalCloseup).hide();


  
  let modalCloseupLeft = document.createElement("div");
  modalCloseupLeft.className = "modal-closeup-left";
  modalCloseup.append(modalCloseupLeft);

  let modalCloseupRight = document.createElement("div");
  modalCloseupRight.className = "modal-closeup-right";
  modalCloseup.append(modalCloseupRight);



  function secondHFCard() {
     // modal dot transition
    $(modalDot1).removeClass("modal-dot-active");  
    $(modalDot2).addClass("modal-dot-active");  
    $(".modal-content-cards").css("margin-left", "-100%")

    var scaleUp = anime({
      targets: '.masonry',
      scale: 2.5,
      easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

    });



    scaleUp.play();


    $(".item-main").css("animation-name", "null")
    $(".item-main").css("background-color", "rgba(255,255,255,0)")


    //append the save button 
    $(".item-main").append(modalSave);


    $(".modal-save").css("animation-name", "buttonClickedHF");
    $(".modal-save").css("animation-duration", "1.5s");
    $(".modal-save").css("animation-iteration-count", "infinite");
    $(".modal-save").css("animation-timing-function", "cubic-bezier(.63, .09, .3, .43");


    $(".handSvg").css("top", "28%");
    $(".handSvg").css("left", "64%");
    $(".handSvg").css("animation-name", "clicking");
    $(".handSvg").css("animation-duration", "1.5s");
    $(".handSvg").css("animation-iteration-count", "infinite");
    $(".handSvg").css("animation-direction", "normal");



  }

  function secondHFCard2() {
     // modal dot transition
    $(modalDot1).removeClass("modal-dot-active");  
    $(modalDot2).addClass("modal-dot-active");  
    $(".modal-content-cards").css("margin-left", "-100%")

    // hide masonry

    var scaleUp = anime({
      targets: '.masonry',
      scale: 2.5,
      easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

    });

    scaleUp.play();

    $(".item").not(".item-main").css("opacity", "0");


    $(".item-main").css("animation-name", "null");
    $(".item-main").css("background-color", "rgba(255,255,255,.8");

    var scaleUpCloseup = anime({
      targets: '.item-main',
      translateX: -40,
      translateY: 4,
      easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

    });

    scaleUpCloseup.play();

    // append closeup to modalCloseup

    $(modalCloseup).show();

    var scaleUpModalCloseup = anime({
      targets: '.modal-closeup',
      opacity: 1,
      scale: 2.5,
      translateX: -12,
      translateY: -14,
      easing: 'cubicBezier(0.66, 0.025, 0.33, 0.975)'

    });



    scaleUpModalCloseup.play();


    //append save button

    $(modalCloseup).append(modalSave);


    $(".modal-save").css("animation-name", "buttonClickedHF");
    $(".modal-save").css("animation-duration", "1.5s");
    $(".modal-save").css("animation-iteration-count", "infinite");
    $(".modal-save").css("animation-timing-function", "cubic-bezier(.63, .09, .3, .43");


    $(".handSvg").css("top", "28%");
    $(".handSvg").css("left", "74%");
    $(".handSvg").css("animation-name", "clicking");
    $(".handSvg").css("animation-duration", "1.5s");
    $(".handSvg").css("animation-iteration-count", "infinite");
    $(".handSvg").css("animation-direction", "normal");



  }




  // customize for the hf 

  if ($('body').is('.homefeedPage')) {

    masonryBg.append(modalMasonry);

    firstHFCard(); 
 

    // if (sessionStorage.getItem('hasClickthrough') == 'true') {
    //   secondHFCard();
    // }


    $(".modal-button-0").click(function() {
      secondHFCard();

    });


  }


  $(".modal-button-1").click(function() {
   $(modal).hide()


  });


  $(".modal-X").click(function() {
   $(modal).hide()


  });



  $(modalDot1).click(function() {


    firstHFCard();    

  })


  $(modalDot2).click(function() {


    secondHFCard();    

  })



  // grid item to closeup
  $(".grid-item").click(function() {

    $(".closeupContainer").show();
    $(".back").show();

    let image = $(this)[0].style.backgroundImage;

    $(".closeupImage").css('background-image', image);  

    secondHFCard2();


    // localStorage.setItem("imageURL", image);



  });


  $(".back").click(function() {

    $(".closeupContainer").hide();
    $(".back").hide()

    firstHFCard();



  });


  $(".navIcon").click(function() {

    window.location.href = "index.html";


  });

  
  let pulsar = document.createElement("div");
  pulsar.className = "pulsar";
  $(".saveButton").append($(pulsar));
  $(pulsar).css("animation-name", "pulse");
  $(pulsar).css("animation-duration", "5s");
  $(pulsar).css("animation-iteration-count", "infinite");
  // $(pulsar).css("animation-direction", "alternate");



  





  



});