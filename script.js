let text;
function myFunction() {
  
  var copyText = document.getElementById("dynamicText");

 
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); 

  text=copyText.value;
  navigator.clipboard.writeText(copyText.value);
  
 
  alert("Copied the text: " + copyText.value);
}
function myFunction2(){
  //   var pasteText=document.getElementById("dynamicText");
  //   pasteText.select();
  // pasteText.setSelectionRange(0, 99999); 
  //text=navigator.clipboard.readText();
  document.getElementById("Mine").value=""+text;
}
