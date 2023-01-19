function liter2gallons(liters) {
  var gallons = liters * 0.2641722;
  return gallons;
}

function showBorder(id, color) {
  document.getElementById(id).style.border = "1px solid " + color;
}

function removeBorder(id) {
  document.getElementById(id).style.removeProperty("border");
}

function getRandomNumber(minNumber, maxNumber) {
  var id = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return id;
}
