(function() {
  'use strict';

  // YOUR CODE HERE
  let tr = document.querySelector('#stopButton');
  let ty = document.querySelector('#slowButton');
  let tg = document.querySelector('#goButton');
  let lr = document.querySelector('#stopLight');
  let ly = document.querySelector('#slowLight');
  let lg = document.querySelector('#goLight');
  tr.addEventListener('click', red);
  ty.addEventListener('click', yellow);
  tg.addEventListener('click', green);
  tr.addEventListener('mouseenter', redMouse);
  ty.addEventListener('mouseenter', yellowMouse);
  tg.addEventListener('mouseleave', greenMouse);
  tr.addEventListener('mouseleave', redOutMouse);
  ty.addEventListener('mouseleave', yellowOutMouse);
  tg.addEventListener('mouseenter', greenOutMouse);
  tr.addEventListener('click', redOnOff);
  ty.addEventListener('click', yellowOnOff);
  tg.addEventListener('click', greenOnOff);

/*var getNode
 forlooop 
 getNode[i].addEventListener("mouseover", () => console.log("Entered <textContent> butten"))*/

function red(){
    lr.classList.toggle('stop');
}
  function yellow(){
    ly.classList.toggle('slow');
  }
function green(){
    lg.classList.toggle('go');
}

function redMouse(){
  console.log("Entered " + tr.textContent + " butten.")
}
function yellowMouse(){
  console.log("Entered " + ty.textContent + " butten.")
}
function greenMouse(){
  console.log("Entered " + tg.textContent + " butten.")
}

function redOutMouse(){
  console.log("Left " + tr.textContent + " butten.")
}
function yellowOutMouse(){
  console.log("Left " + ty.textContent + " butten.")
}
function greenOutMouse(){
  console.log("Left " + tg.textContent + " butten.")
}

function redOnOff(){
  if(lr.style.backgroundColor !== 'red'){
    console.log(tr.textContent + " Butten off.");
  }else{
    console.log(tr.textContent + " Butten on.");
  }
}
  function yellowOnOff(){
    if(ly.style.backgroundColor !== 'yellow'){
      console.log(ty.textContent + " Butten off");
    }else{
      console.log(ty.textContent + " Butten on.");
    }
  }
function greenOnOff(){
  if(lg.style.backgroundColor !== 'green'){
    console.log(tg.textContent + " Butten off.");
  }else{
      console.log(tg.textContent + " Butten on.");
  }
}

}());
