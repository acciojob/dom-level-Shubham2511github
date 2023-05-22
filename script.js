//your JS code here. If required.
window.onload = function () {
const itemLvL = document.getElementById("level");
let lvlcount = 0;
while(itemLvL !== document){
	itemLvL = itemLvL.parentNode;
	lvlcount++;
}
alert("The level of the element is: "+ lvlcount)
};