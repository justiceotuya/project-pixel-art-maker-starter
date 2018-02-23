// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Select size input
var gridHeight = document.getElementById("inputHeight");
gridHeight.addEventListener("change paste keyup", function (e) {});

var gridWidth = document.getElementById("inputWeight");
gridWidth.addEventListener("change paste keyup", function (e) {});

var submit = document.querySelector("input#submit");
submit.addEventListener("click", function () {
  gridHeightValue = gridHeight.value;
  gridWidthValue = gridWidth.value;
  colorValue = color.value;
  console.log("Grid Height : " + gridHeightValue);
  console.log("Grid Weight : " + gridWidthValue);
  console.log(colorValue);
  makeGrid();
});

//select color input
var color = document.getElementById("colorPicker");
color.addEventListener("change", function () {});

//make grid
function makeGrid() {
  var table = document.querySelector("table");

  for (var i = 0; i < gridHeight.value; i++) {
    var tr = document.createElement("tr");
    tr = table.insertRow(-1);

    for (var j = 0; j < gridWidth.value; j++) {
      var td = document.createElement("td");
      td = tr.insertCell(-1);
    }
  }
}

// clear grid
var reset = document.querySelector("#reset");
$('#reset').on('click', function (event) {
  event.preventDefault();
  alert("aa");
  $('tr').remove();
  return false;
});