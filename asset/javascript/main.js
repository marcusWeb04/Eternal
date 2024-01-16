// on déclare nos variables
const widthSlider1 = document.querySelector(".container-collection").offsetWidth;
const modal = document.querySelector("#modal-burger");

// modal
function modalReact(){
    modal.classList.toggle("appear");
}

// slider 1
function sliderRight(){
    document.querySelector('.collection-1').scrollLeft += widthSlider1;
}
setInterval(sliderRight, 1000);

// slider 2
function sliderLeft(){
    document.querySelector('.collection-1').scrollLeft -= widthSlider1;
}
setInterval(sliderLeft, 1000);