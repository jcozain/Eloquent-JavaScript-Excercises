var i = 0;
function loadDoc() {
 i += 1;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        postMessage(this.responseText);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/"+i, true);
  xhttp.send();
  setTimeout("loadDoc()",500);
}
loadDoc();