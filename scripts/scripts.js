function addContent(elementId, contentFile){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementId).innerHTML += this.responseText;
      document.getElementById(elementId).innerHTML += '<div class="grid_12" style="border-bottom: 1px solid"><div>';
    }
  };
  xhttp.open("GET", contentFile, true);
  xhttp.send();
}
function putContents(elementId, contentFiles){
  divs = "";
  for (i=0; i<contentFiles.length; i++) {
    divs += "<div id='"+elementId+i+"'></div>";
  }
  document.getElementById(elementId).innerHTML = divs;
  for (i=0; i<contentFiles.length; i++) {
    putContent(""+elementId+i, contentFiles[i]);
  }
}
function putContent(elementId, contentFile){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementId).innerHTML +=
      this.responseText;
    }
  };
  xhttp.open("GET", contentFile, true);
  xhttp.send();
}
