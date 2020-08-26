const blank = document.getElementById("shift");
const fill = document.getElementById("hover");
const blank2 = document.getElementById("shift-2");
const fill2 = document.getElementById("hover-2");
const high = document.getElementById("highlight");
const high2 = document.getElementById("highlight-2");
const size1 = document.getElementById("icon-size-1");
const size2 = document.getElementById("icon-size-2");




fill.addEventListener("mouseover",mouseover);
fill.addEventListener("mouseout",mouseout);

fill2.addEventListener("mouseover",mouseover2);
fill2.addEventListener("mouseout",mouseout2);


function mouseover(){
 blank.style.cssText="transition:0.4s all;left:-100%;transform:translateX(100%);z-index:0";
 high.style.cssText="background-color:#343a40;transition:0.4s all";
  }

function mouseout(){
blank.style.cssText="background-color:#fed136;left:0%;transition:0.2s all";
high.style.cssText="background-color:unset";
  }


  function mouseover2(){
    blank2.style.cssText="transition:0.4s all;left:100%;transform:translateX(-100%);z-index:0";
    high2.style.cssText="background-color:#343a40;transition:0.4s all";
     }
   
   function mouseout2(){
   blank2.style.cssText="background-color:#fed136;left:0%;transition:0.2s all";
   high2.style.cssText="background-color:unset";
     }

function changesize(x){
if(x.matches){
  size1.style.width="60";
  size1.style.height="60";

  size2.style.width="60";
  size2.style.height="60";

}
else{
  size1.style.width="100";
  size1.style.height="100";

  size2.style.width="100";
  size2.style.height="100";
}
}


   var x = window.matchMedia("(max-width:380px)") 
   changesize(x);
   x.addListener(changesize);