
      function putContent(elementId, contentFile){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML =
            this.responseText;
          }
        };
        xhttp.open("GET", contentFile, true);
        xhttp.send();
      }
