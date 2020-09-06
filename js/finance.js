$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 2000
    })
    $('.carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});





function changesize(x){
    if(x.matches){
     document.getElementById("car1").className="col-12";
     document.getElementById("car2").className="col-12";
     document.getElementById("car3").className="col-12";
     document.getElementById("car4").className="col-12";

    }
    else{
        document.getElementById("car1").className="col-4";
        document.getElementById("car2").className="col-4";
        document.getElementById("car3").className="col-4";
        document.getElementById("car4").className="col-4";
    }
    }
    
    
       var x = window.matchMedia("(max-width:600px)") 
       changesize(x);
       x.addListener(changesize);