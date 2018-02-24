//Select Height input
var gridHeight = document.getElementById("inputHeight");
gridHeight.addEventListener("change paste keyup", function (e) {});

//Select Height input
var gridWidth = document.getElementById("inputWeight");
gridWidth.addEventListener("change paste keyup", function (e) {});

//User clicks on Submit, it sets the values to user inputed value
var submit = document.querySelector("input#submit");
submit.addEventListener("click", function () {
  gridHeightValue = gridHeight.value;
  gridWidthValue = gridWidth.value;

  //conditional statement to limit the number of rows and columns user can input
  if (gridHeightValue > 100 || gridWidthValue > 70 || gridHeightValue <= 0 || gridWidthValue <= 0) {
    alert("Please enter a valid number between 1 and 100 for grid height and 1 - 70 for grid width ");
  } else

    //function to make the grid  
    makeGrid();
});



//make grid
function makeGrid() {
  //selects table
  var table = document.querySelector("table");

  //dynamically create row
  for (var i = 0; i < gridHeight.value; i++) {
    var tr = document.createElement("tr");
    tr = table.insertRow(-1);

    //dynamically create cell
    for (var j = 0; j < gridWidth.value; j++) {
      var td = document.createElement("td");
      td = tr.insertCell(-1);
    }
  }
}


// button to clear grid
if (gridHeight.value > 0 || gridWidth > 0) {
  var reset = document.querySelector("#reset");
  $('input').on('change', function (event) {
    gridHeight.value = 0;
    gridWidth.value = 0;
    event.preventDefault();

    //dynamically remove table
    $('tr').remove();
    return false;
  });

}


//make table clickable and add color
$("table").delegate("td", "click change", function () {

  $("td").each(element => {
    var color = document.getElementById("colorPicker");
    color.addEventListener("change", function () {});
    $(this).css("background-color", color.value);

  });
});