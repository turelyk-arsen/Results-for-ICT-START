function outputList(){
  var olOutput = document.getElementById("olOutput")
  var list = document.getElementById("selArticles")

  olOutput.innerHTML = ""
  for(var i=0; i<list.length; i++){
    olOutput.innerHTML += "<li>"+list.options[i].value+"</li>"
  }
}

function addList(){
  var input = document.getElementById("inArticle").value.trim()
  var list = document.getElementById("selArticles")
  list.innerHTML += "<option value='"+input+"'>"+input+"</option>"
}

function order(beverage, amount){
  alert("Here is your order: "+amount+"x "+beverage)
}
function setBorder(id, color){
  document.getElementById(id).style.border = "1px solid "+color
}
function removeBorder(id){
  document.getElementById(id).style.removeProperty("border")
}
function count(start,end, idDiv){
  document.getElementById(idDiv).innerHTML = "";
  if(start>end){ // avoid variable swap
      for(var i=start; i>=end; i--){
        document.getElementById(idDiv).innerHTML += i + "<br>"
      }
  }
  else{
    for(var i=start; i<=end; i++){
      document.getElementById(idDiv).innerHTML += i + "<br>"
    }
  }
}

function celsius2fahrenheit(degreesC, id){
  var celsiusF =  32 + degreesC * 9/5
  return celsiusF
}