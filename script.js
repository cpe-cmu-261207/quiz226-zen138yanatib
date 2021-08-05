const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
// define more constants and variables here

search.onclick = () => {
  var text = document.getElementById("text").innerHTML;
  var length = document.getElementById("length").value;
  var color = document.getElementById("color").value;
  const myArr = text.split(" ");
  var stringOut = "";
  for(let i=0;i<myArr.length;i++){
    if(myArr[i].length >= length){
      stringOut += myArr[i].fontcolor(color) + " ";
    }else{
      stringOut += myArr[i] + " ";
    }
  }
  document.getElementById("text").innerHTML = stringOut; 
}

btn_toggle.onclick  = () => {
  const x = "630612097 YANATIB BHOOSAWANG";
  const y = 630612097 + parseInt(length.value)
  if(btn_toggle.innerHTML == "Show Calculation"){
    author.innerHTML = y;
    btn_toggle.innerHTML = "Show Author";
  }else{
    author.innerHTML = x;
    btn_toggle.innerHTML = "Show Calculation";
  }
}

reset.onclick = () => {
  var text = document.getElementById("text").innerHTML;
  var length = document.getElementById("length").value;
  const myArr = text.split(" ");
  var stringOut = "";
  for(let i=0;i<myArr.length;i++){
    stringOut += myArr[i].fontcolor("black") + " ";
  }
  document.getElementById("text").innerHTML = stringOut; 
}


// more codes for Search and Reset buttons here
