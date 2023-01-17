function callAlert(x, y) {
  alert("Here is your order: " + x + y);
}

function setBorder(id, color) {
  document.getElementById(id).style.border = "1px solid " + color;
}

function colorBAck(id, col) {
  document.getElementById(id).style.color = col;
}

function border(id1, id2) {
  document.getElementById(id1).style.border = "1px solid red";
  document.getElementById(id2).style.border = "1px solid red";
}

function removeBorder(id) {
  document.getElementById(id).style.removeProperty("border");
}

function count(firstNumber, secondNumber, output) {
  if (firstNumber > secondNumber) {
    for (var i = firstNumber; i >= secondNumber; i--) {
      output.innerHTML += i + "<br />";
    }
  } else {
    for (var i = firstNumber; i <= secondNumber; i++) {
      output.innerHTML += i + "<br />";
    }
  }
}

function cellClicked(n) {
  var div = document.getElementById("cell_"+n);
  if(div.innerHTML == ""){
  div.innerHTML = player;
  if(player=="X") player="O";
  else player = "X";
}
}

