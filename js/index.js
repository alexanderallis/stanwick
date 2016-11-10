
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

//-------------------------------------------->ROTATE-MENU-BUTTON

var rotated = false;
var moved = false;
var darkened = false;
var dark = document.getElementById('modal_dark');

//CLICK-ON-BUTTON
document.getElementById('menu_button_svg').onclick = function() {

    //USING-CSS-ROTATE-AND-SLIDE-MENU-BUTTON
    var menuBar = document.getElementById('menu_bar');
    var menuButton = document.getElementById('menu_button');
    var menu = document.getElementById('menu_button_svg');
    var deg = rotated ? 0 : 90;
    var mov = moved ? 0 : 25.2;
    var movMenu = moved ? 0 : 100;

    menu.style.webkitTransform = 'rotate('+deg+'deg)';
    menu.style.mozTransform    = 'rotate('+deg+'deg)';
    menu.style.msTransform     = 'rotate('+deg+'deg)';
    menu.style.oTransform      = 'rotate('+deg+'deg)';
    menu.style.transform       = 'rotate('+deg+'deg)';

    menuButton.style.webkittransform = 'translate('+mov+'%, 0)';
    menuButton.style.moztransform = 'translate('+mov+'%, 0)';
    menuButton.style.mstransform = 'translate('+mov+'%, 0)';
    menuButton.style.otransform = 'translate('+mov+'%, 0)';
    menuButton.style.transform = 'translate('+mov+'%, 0)';

    menuBar.style.webkittransform = 'translate('+movMenu+'%, 0)';
    menuBar.style.moztransform = 'translate('+movMenu+'%, 0)';
    menuBar.style.mstransform = 'translate('+movMenu+'%, 0)';
    menuBar.style.otransform = 'translate('+movMenu+'%, 0)';
    menuBar.style.transform = 'translate('+movMenu+'%, 0)';

    // DARKEN-BACKGROUND
    var dark = $('#modal_dark');
    if(rotated){
    $(dark).toggleClass('modal-show', false);
    }else{
      $(dark).toggleClass('modal-show', true);
    }

    rotated = !rotated;
    moved = !moved;

  }

//CLICK-ON-DARK-BACKGROUND
  document.getElementById('modal_dark').onclick = function() {

    //DO-THE-SAME-THING-AS-ABOVE
    var menuBar = document.getElementById('menu_bar');
    var menuButton = document.getElementById('menu_button');
    var menu = document.getElementById('menu_button_svg');
    var deg = rotated ? 0 : 90;
    var mov = moved ? 0 : 340;

    menu.style.webkitTransform = 'rotate('+deg+'deg)';
    menu.style.mozTransform    = 'rotate('+deg+'deg)';
    menu.style.msTransform     = 'rotate('+deg+'deg)';
    menu.style.oTransform      = 'rotate('+deg+'deg)';
    menu.style.transform       = 'rotate('+deg+'deg)';

    menuButton.style.webkittransform = 'translate('+mov+'px, 0)';
    menuButton.style.moztransform = 'translate('+mov+'px, 0)';
    menuButton.style.mstransform = 'translate('+mov+'px, 0)';
    menuButton.style.otransform = 'translate('+mov+'px, 0)';
    menuButton.style.transform = 'translate('+mov+'px, 0)';

    menuBar.style.webkittransform = 'translate('+mov+'px, 0)';
    menuBar.style.moztransform = 'translate('+mov+'px, 0)';
    menuBar.style.mstransform = 'translate('+mov+'px, 0)';
    menuBar.style.otransform = 'translate('+mov+'px, 0)';
    menuBar.style.transform = 'translate('+mov+'px, 0)';

    // DARKEN-BACKGROUND
    var dark = $('#modal_dark');
    if(rotated){
    $(dark).toggleClass('modal-show', false);
    }else{
      $(dark).toggleClass('modal-show', true);
    }

    rotated = !rotated;
    moved = !moved;

  }
