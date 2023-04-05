var myButton = document.querySelector("button");

myButton.addEventListener("click",function(){
    alert("Buttona basıldı.");
})
myButton.addEventListener("mouseover",function(){
    myButton.style.backgroundColor = "blue";
})
myButton.addEventListener('mouseout', function() {
    myButton.style.backgroundColor = 'red';
});