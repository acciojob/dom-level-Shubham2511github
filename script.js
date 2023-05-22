//your JS code here. If required.
window.onload = function () {
var element = document.getElementById("level");
let count = 0;
while(element !== document){
	element = element.parentNode;
	count++;
}
alert("The level of the element is: "+ count)
};