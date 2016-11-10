
//-------------------------------------------->CAROUSEL

"use strict";

var slideIndex = 1;

showDivs(slideIndex);

$(".button-right").on('click', function() {
    console.log("hello, there");

          showDivs(slideIndex += 1);

    console.log(slideIndex);
});

$(".button-left").on('click', function() {
    console.log("hello, there");

          showDivs(slideIndex -= 1);

    console.log(slideIndex);
});

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ; //if you click the back button when slideIndex=1, it will take you to the end (which is x.length).
    for (i = 0; i < x.length; i++) { //iterate through array
        var theOthers = x[i];
        x[i].style.opacity = 0; //set each to display:none;
        // $(theOthers).fadeTo(0,0);
    }

    var theChosenOne = x[slideIndex-1]
    x[slideIndex-1].style.opacity = 1; //set the "chosen one" (which is the array index - 1) to display:block;
    // $(theChosenOne).fadeTo(500,1);

    var q = document.getElementsByClassName("circle"); //get array of circles
    for(i = 0; i < q.length; i++){ //iterate through circles
      q[i].style.opacity = .5; //set each background color to transparent
    }
    q[slideIndex-1].style.opacity = 1; //set the "chosen one" to white

}

//-------------------------------TIMER

function timer(){
  showDivs(slideIndex += 1);
  setTimeout(timer,10000);
}
setTimeout(timer,10000);

// function repeat(){
//   showDivs(slideIndex += 1);
// }
// setTimeout(repeat, 2000);

//-------------------------------CAROUSEL-NAVIGATION-CIRCLES

//--THIS IS FOR RUNNING showDivs SO THE ARGUMENT IS THE NUMBER OF THE CIRCLE YOU CLICKED ON
var slideId;
$(".circle").click(function(event) { //when one of the circles is clicked
        var slideId = event.target.id; //collect the ID of the specific circle that triggered the event
        console.log("slide Id = " + slideId);
        var slideNumber = parseInt(slideId); //change the ID to an integer value
        currentSlide(slideNumber); //run a function that sets slideIndex to slideNumber and runs the showDivs function
    });

function currentSlide(v){
  slideIndex = v
  showDivs();
  console.log(v);
}

//-------------------------------------------->MENU-BUTTON


$( ".modal-dark" ).click(function() {

  var div = document.getElementById('menu_button'),
      deg = rotated ? 0 : 90;

  div.style.webkitTransform = 'rotate('+deg+'deg)';
  div.style.mozTransform    = 'rotate('+deg+'deg)';
  div.style.msTransform     = 'rotate('+deg+'deg)';
  div.style.oTransform      = 'rotate('+deg+'deg)';
  div.style.transform       = 'rotate('+deg+'deg)';

  rotated = !rotated;
});

//-------------------------------------------->ROTATE-MENU-BUTTON

var rotated = false;
var dark = document.getElementById('modal_dark');

    // dark.style.opacity = 0;

// var opa = 0;

document.getElementById('menu_button').onclick = function() {

    //USING-CSS-ROTATE-MENU-BUTTON

    var menu = document.getElementById('menu_button'),
        deg = rotated ? 0 : 90;

    menu.style.webkitTransform = 'rotate('+deg+'deg)';
    menu.style.mozTransform    = 'rotate('+deg+'deg)';
    menu.style.msTransform     = 'rotate('+deg+'deg)';
    menu.style.oTransform      = 'rotate('+deg+'deg)';
    menu.style.transform       = 'rotate('+deg+'deg)';

    rotated = !rotated;

    //DARKEN-BACKGROUND

    var dark = $('#modal_dark');

      // register is not visible lets make it visible.
      if(dark.css('opacity') === '0')
      {
        dark.css({
          'z-index': '10',
          'opacity': '1',
        });
      }
      else //We know the opacity is not 0 lets make it 0.
      {
        dark.css({
          'z-index': '-10',
          'opacity': '0',
        });
      }

}

document.getElementById('modal_dark').onclick = function() {
  var dark = $('#modal_dark');

  if(dark.css('opacity') === '0')
  {
    dark.css({
      'z-index': '10',
      'opacity': '1',
    });
  }
  else //We know the opacity is not 0 lets make it 0.
  {
    dark.css({
      'z-index': '-10',
      'opacity': '0',
    });
  }
}

//-------------------------------------------->SLIDE-MENU

// var slide = false;
//
// document.getElementById('menu_button').onclick = function() {
//     var div = document.getElementById('menu_button'),
//         deg = slide ? 0 : 90;
//
//     div.style.webkitTransform = 'rotate('+deg+'deg)';
//     div.style.mozTransform    = 'rotate('+deg+'deg)';
//     div.style.msTransform     = 'rotate('+deg+'deg)';
//     div.style.oTransform      = 'rotate('+deg+'deg)';
//     div.style.transform       = 'rotate('+deg+'deg)';
//
//     rotated = !rotated;
// }



// $(".menu-button").click(
//   toggleDark(){
//     document.getElementById("modal_dark").classList.toggle("modal-on");
//   };
// );
