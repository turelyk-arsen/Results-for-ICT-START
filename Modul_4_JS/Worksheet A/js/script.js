function outPut () {
    var olOutput = document.getElementById("olOutput")
    var list = document.getElementById("selArticles")

    for(var i=0; i<list.length; i++){
        olOutput.innerHTML += "<li>"+list.options[i].value+"</li>"
      }
}
function addList () {
    var input = document.getElementById("inArticle").value.trim()
    var list = document.getElementById("selArticles")
    list.innerHTML += "<option value='"+input+"'>"+input+"</option>"
}