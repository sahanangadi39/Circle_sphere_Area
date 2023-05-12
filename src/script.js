//Area of circle

function returnText(){
    let radius = document.getElementById("radius_input").value
    let area = 3.14*radius*radius;
    document.getElementById("output-1").innerHTML = area;
    

}

//trigger enter button for circle

var input = document.getElementById("radius_input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});



//Area of Sphere

function returnsphere(){
    let radius = document.getElementById("sphere_input").value
    let area = 4*3.14*radius*radius;
    document.getElementById("output-2").innerHTML = area;
    

}

//trigger enter button for sphere

var input_2 = document.getElementById("sphere_input");
input_2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button-2").click();
  }
});