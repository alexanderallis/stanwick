
//-------------------------------------------->ROTATE-MENU-BUTTON

var rotated = false;
var moved = false;
var darkened = false;
var dark = document.getElementById('modal_dark');

var menuBar = document.getElementById('menu_bar');
var menuButton = document.getElementById('menu_button');
var menu = document.getElementById('menu_button_svg');

function slideMenu(){

  var deg = rotated ? 0 : 90;
  var mov = moved ? 0 : 98;
  var movMenu = moved ? 0 : 100;
  var fixed = moved ? true : false;

  menu.style.webkitTransform = 'rotate('+deg+'deg)';
  menu.style.mozTransform    = 'rotate('+deg+'deg)';
  menu.style.msTransform     = 'rotate('+deg+'deg)';
  menu.style.oTransform      = 'rotate('+deg+'deg)';
  menu.style.transform       = 'rotate('+deg+'deg)';

  menuButton.style.webkittransform = 'translateX('+mov+'%)';
  menuButton.style.moztransform = 'translateX('+mov+'%)';
  menuButton.style.mstransform = 'translateX('+mov+'%)';
  menuButton.style.otransform = 'translateX('+mov+'%)';
  menuButton.style.transform = 'translateX('+mov+'%)';

  // menuBar.style.transform = 'translate3d('+movMenu+'%, 0, 0)'
  menuBar.style.webkittransform = 'translateX('+movMenu+'%)';
  menuBar.style.moztransform = 'translateX('+movMenu+'%)';
  menuBar.style.mstransform = 'translateX('+movMenu+'%)';
  menuBar.style.otransform = 'translateX('+movMenu+'%)';
  menuBar.style.transform = 'translateX('+movMenu+'%)';

  // DARKEN-BACKGROUND
  var dark = $('#modal_dark');
  if(rotated){
  $(dark).toggleClass('modal-show', false);
  $(menuButton).toggleClass('menu-button-fixed-toggle', false);
  }else{
    $(dark).toggleClass('modal-show', true);
    $(menuButton).toggleClass('menu-button-fixed-toggle', true);
  }

  rotated = !rotated;
  moved = !moved;

}

//CLICK-ON-BUTTON
document.getElementById('menu_button_svg').onclick = function() {
    slideMenu();
  }

document.getElementById('menu_button').onclick = function() {
    if(rotated){
      // $(dark).toggleClass('modal-show', false);
    }else{
      //nothing
    }
}

//CLICK-ON-DARK-BACKGROUND
document.getElementById('modal_dark').onclick = function() {
  slideMenu();
}

var toTop = document.getElementById('to_top').onclick = function() {
// window.scrollTo(0,0);
$("html, body").animate(
    {scrollTop:'100vh'},
   900,
    "swing"
    )


};
