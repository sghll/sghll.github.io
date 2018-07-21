var area01 = document.querySelector(".box01");
var area02 = document.querySelector(".box02");
var area03 = document.querySelector(".box03");
var area04 = document.querySelector(".box04");
var area05 = document.querySelector(".box05");
var area06 = document.querySelector(".box06");
var area07 = document.querySelector(".box07");
var area08 = document.querySelector(".box08");
var area09 = document.querySelector(".box09");
var area10 = document.querySelector(".box10");
var area11 = document.querySelector(".box11");

/* add eventlistener to open player */

area01.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/1tEwYgklI3U?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  /* add eventlistener to close player */

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area02.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/q7_bZnY4fYw?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area03.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/Lftpo2uTrqU?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area04.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/pG5vEFoF0LA?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area05.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/vrkV-EGfWDc?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area06.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/VE9YIgMvnhU?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area07.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/s8rbHgtmrv8?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area08.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/HQ9KTMbhHsU?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area09.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/lZqwsGi-aSs?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area10.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/Qm7UPYBfjAQ");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);

area11.addEventListener("click", function(e) {
  if (e.target.tagName === "DIV") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "H3" || e.target.tagName === "H4") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  } else if (e.target.tagName === "I") {
    var theMain = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  }
  var newI = document.createElement("i");
  var newIF = document.createElement("iframe");
  var newDIV = document.createElement("div");
  newDIV.appendChild(newI);
  newDIV.appendChild(newIF);
  theMain.appendChild(newDIV);
  newDIV.className = "showing";
  newI.className = "far fa-times-circle";
  newIF.setAttribute("src", "https://www.youtube.com/embed/WMkMgHjmI8o?rel=0");
  newIF.setAttribute("frameborder", "0");
  newIF.setAttribute("allowfullscreen", "");
  newIF.setAttribute("allow", "autoplay; encrypted-media")

  var clickArea = document.querySelector(".showing");
  clickArea.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV") {
      e.target.parentElement.removeChild(clickArea);
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.removeChild(clickArea);
    }
  }, false);

}, false);
