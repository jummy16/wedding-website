// var slide = document.getElementById("slide");
// var arr =["image1.jpg","image2.jpg"];
// var pos = 0
// var images = "assets/bootstrap/";
// slide.src = images+arr[pos];
var sliderElems = document.querySelectorAll(".slider-container");
setInterval(function(){
    if(sliderElems[0].style.display === "none"){
        sliderElems[0].style.display = "block";        
        sliderElems[1].style.display = "none";
    }else if(sliderElems[0].style.display === "block"){
        sliderElems[0].style.display = "none";
        sliderElems[1].style.display = "block";
    }
}, 5000);