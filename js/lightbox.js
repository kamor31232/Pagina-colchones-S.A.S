const element = document.getElementById("container1");
const element2 = document.getElementById("container2");
const element3 = document.getElementById("container3");
const element4 = document.getElementById("container4");
const element5 = document.getElementById("container5");
const element6 = document.getElementById("container6");
/* onmouseover, El mouseoverevento ocurre cuando el puntero del mouse pasa sobre un elemento y mouseout, cuando lo deja. */
element.onmouseover = element.onmouseout = handler;
element2.onmouseover = element2.onmouseout = handler2;
element3.onmouseover = element3.onmouseout = handler3;
element4.onmouseover = element4.onmouseout = handler4;
element5.onmouseover = element5.onmouseout = handler5;
element6.onmouseover = element6.onmouseout = handler6;

function handler(event) {
  const hover = document.getElementById("containerHover1");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}
function handler2(event) {
  const hover = document.getElementById("containerHover2");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}

function handler3(event) {
  const hover = document.getElementById("containerHover3");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}

function handler4(event) {
  const hover = document.getElementById("containerHover4");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}
function handler5(event) {
  const hover = document.getElementById("containerHover5");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}

function handler6(event) {
  const hover = document.getElementById("containerHover6");

  if (event.type == "mouseover") {
    hover.className += " image-aparecer";
  }
  if (event.type == "mouseout") {
    hover.className = "image-description-hover";
  }
}
