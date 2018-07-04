var btn = document.querySelector(".topnav");

btn.addEventListener("mouseover", function(e) {
  if (e.target.tagName === "A") {
    e.target.lastElementChild.lastElementChild.className = "nav-btn-hover"
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.lastElementChild.lastElementChild.className = "nav-btn-hover"
  } else if (e.target.tagName === "DIV") {
    e.target.className = "nav-btn-hover"
  }
}, true);

btn.addEventListener("mouseout", function(e) {
  if (e.target.tagName === "A") {
    e.target.lastElementChild.lastElementChild.className = "nav-btn-hidden"
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.lastElementChild.lastElementChild.className = "nav-btn-hidden"
  } else if (e.target.tagName === "DIV") {
    e.target.className = "nav-btn-hidden"
  }
}, true);
