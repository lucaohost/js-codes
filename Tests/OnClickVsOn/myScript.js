$(function() {
	$("#myButton").click(function(){
		let myOtherButton = $("<button></button>").attr("id","myOtherButton");
		$("#myDiv").append(myOtherButton.html("Try me Bitch"));
	});

	/*
	 * Problem: Add event in non existent html element in the first load of js
	 */

	/*===============JQuery===============*/
	// $("#myOtherButton").click(function(){
	// 	alert("Yeap, isn't working")
	// });

	// $("#myOtherButton").on("click",function(){
	// 	alert("Nope, neither this one");
	// });
	/*====================================*/

	/*===============VanillaJS===============*/
	// document.querySelector("#myOtherButton").onclick = function(){
	// 	alert("Yeap, isn't working")
	// };

	// document.querySelector("#myOtherButton").addEventListener("click",function(){
	// 	alert("Nope, neither this one");
	// });
	/*====================================*/

	/*===============Solution===============*/
	//VanillaJS
	// document.addEventListener("click", function(event) {
	// 	if (event.target.id == "myOtherButton"){
	// 		alert("This one works");
	// 	}
	// });

	//JQuery
	$(document).on("click", "#myOtherButton", function(){
		alert("This one works too");
	});
	/*======================================*/
	
});
