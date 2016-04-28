
window.onload = init();




function init(){
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
      //image is getting passed an event object each time an image is clicked on
      images[i].onmouseover = showAnswer;
      images[i].onmouseout = reblur;

    }

};

function showAnswer(eventObj){
  //the even obj's target property is a reference to the image element that was clicked on
  var image = eventObj.target;



//name gets the image element's id and concatenates that wiht a .jpg because the
//the unblurred images have the same name but without the blurred word added to it
  var name = image.id;
  name = name + ".jpg";
  //this gets the unblurred image
  image.src = name;





  // setTimeout(reblur, 600, image);

}



function reblur(eventObj){
  var image = eventObj.target;
  var name = image.id;
  name = name + "Blur.jpg";
  image.src = name;
}
