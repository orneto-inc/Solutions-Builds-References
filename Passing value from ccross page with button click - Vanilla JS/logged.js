//Using ParamSearch
window.addEventListener("load", ()=>{
  const params = (new URL(window.location)).searchParams;
  const name = params.get("username"); 
  console.log(params);
  document.getElementById("username-display").innerHTML = name;

})

//=============Comment One Solution at a Time================

//  Passing Varaible value from local storage to HTML ELement
window.addEventListener("load", ()=>{
  const displayName = document.getElementById("username-display");
  const display_val =  localStorage.getItem("NAME");  
  displayName.innerHTML = display_val;
});

