//Using ParamSearch



// Storing Variable(User Input) Value in Local Storage
function storeValue(){
  var userInput = document.getElementById("user-input").value;
  localStorage.setItem("NAME", userInput);
  return;
}
