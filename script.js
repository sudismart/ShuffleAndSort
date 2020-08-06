function shuffle() {
  var parent = document.getElementById("shuffle-container");
  var divs = Array.from(parent.children);
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
}

function sort() {
  var parent = document.getElementById("shuffle-container");
  var toSort = Array.from(parent.children);

  toSort.sort(function(a, b) {
    var aord = a.id.split("-")[1];
    var bord = +b.id.split("-")[1];
    return aord > bord ? 1 : -1;
  });
  parent.innerHTML = "";
  for (var i = 0, l = toSort.length; i < l; i++) {
    parent.appendChild(toSort[i]);
  }
}
