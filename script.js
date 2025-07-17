const darkModeButton = document.getElementById("dark mode");
darkModeButton.addEventListener("click", toggleMode);

function toggleMode(){
  if (darkModeButton.textContent === "Dark Mode"){
    darkModeButton.textContent = "Light Mode"
    document.body.style.backgroundColor = `rgb(99, 99, 99)`;
  }
  else{
    darkModeButton.textContent = "Dark Mode"
    document.body.style.backgroundColor = "white";
  }
}