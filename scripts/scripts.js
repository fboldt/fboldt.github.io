/*
function putContents(elementId, contentFiles){
  divs = "";
  for (i=0; i<contentFiles.length; i++) {
    divs += "<div id='"+elementId+i+"'></div>";
  }
  document.getElementById(elementId).innerHTML = divs;
  for (i=0; i<contentFiles.length; i++) {
    putContent(""+elementId+i, contentFiles[i]);
  }
}*/
function putContent(contentFile, classes=""){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      text = "<div class='"+classes+"'>"+this.responseText+"</div>";
      document.getElementById("main").innerHTML += text;
    }
  };
  xhttp.open("GET", contentFile, false);
  xhttp.send();
}
