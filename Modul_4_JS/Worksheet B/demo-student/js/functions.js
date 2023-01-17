function outputList(x, y){
  var olOutput = document.getElementById(x)
  var list = document.getElementById(y)

  olOutput.innerHTML = ""
  for(var i=0; i<list.length; i++){
    olOutput.innerHTML += "<li>"+list.options[i].value+"</li>"
  }
}

function addList(x, y){
  var input = document.getElementById(x).value.trim()
  var list = document.getElementById(y)
  list.innerHTML += "<option value='"+input+"'>"+input+"</option>"
}
