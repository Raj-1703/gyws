const blank = document.getElementById("shift");
const fill = document.getElementById("hover");
const fill2 = document.getElementById("hover2");
const high = document.getElementById("highlight");
const high2 = document.getElementById("highlight-2");


const height_value = getComputedStyle(fill).height;

blank.style.height= height_value;

fill.addEventListener("mouseover",mouseover);
fill.addEventListener("mouseout",mouseout);



function mouseover(){
 blank.style.cssText="position:absolute;left:0%;transition:0.4s all;";
 blank.style.height= height_value;
 high.style.cssText="background-color:#343a40;transition:0.4s all;";
 high2.style.cssText="background-color:unset;transition:0.4s all";
}

function mouseout(){
blank.style.cssText="position:absolute;left:100%;transform:translateX(-100%);transition:0.4s all;";
blank.style.height= height_value;
high.style.cssText="background-color:unset;transition:0.4s all";
high2.style.cssText="background-color:#343a40;transition:0.4s all;";

  }



