
//-------------------------------------------->CAROUSEL

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
        x[i].style.display = "none"; //set each to display:none;
    }
    x[slideIndex-1].style.display = "block"; //set the "chosen one" (which is the array index - 1) to display:block;

    var q = document.getElementsByClassName("circle"); //get array of circles
    for(i = 0; i < q.length; i++){ //iterate through circles
      q[i].style.backgroundColor = "transparent"; //set each background color to transparent
    }
    q[slideIndex-1].style.backgroundColor = "white"; //set the "chosen one" to white

    slideIndex += 1;
    setTimeout(showDivs, 2000);

}

//-------------------------------TIMER

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
