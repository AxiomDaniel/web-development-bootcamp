var allLi = document.querySelectorAll('li');


//NOTE: YOU CAN'T USE ARROW NOTATIONS WHEN USING THIS. IT BREAKS.
for (var i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener("mouseover", function() {
    this.classList.add("hoveredOver");
  });

  allLi[i].addEventListener("mouseout", function() {
    this.classList.remove("hoveredOver");
  });
  allLi[i].addEventListener("click", function() {
    this.classList.toggle("crossout");
  })
}