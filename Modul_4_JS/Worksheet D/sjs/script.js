function fillList(arr, idList) {
  list.innerHTML = "";
  for (var idList = 0; idList < arr.length; idList++) {
    list.innerHTML +=
      "<option value=" + idList + ">" + arr[idList] + "</option>";
    numberList.innerHTML = "Numbers of elements: " + arr.length;
    // var numberOfList = idList +1
  }
}

function showBorder(id, color) {
  document.getElementById(id).style.border = "1px solid " + color;
}

function findIndex(arrayMy, value) {
   for (var i = 0; i < arrayMy.length; i++) {
          if (arrayMy[i] == value) {
            return i
          } else {
            return -1
          }
        }
}
