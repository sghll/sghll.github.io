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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=2484048&cid=3889378&page=1");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=5");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=2");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=4");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=7");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=8");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=33670438&cid=58952305&page=6");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=25356270&cid=43067095&page=1");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=30849870&cid=54115841&page=1");
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
  newIF.setAttribute("src", "//player.bilibili.com/player.html?aid=32823095&cid=57443918&page=1");
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
