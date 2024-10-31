document.getElementById("vermelho").addEventListener("click", function() {
	//alert("Funcionando Vermelho");
	let body = document.body;
	body.style.background = "red";
});

document.getElementById("verde").addEventListener("click", function() {
	//alert("Funcionando verde");
	let body = document.body;
	body.style.background = "green";	
});

document.getElementById("azul").addEventListener("click", function() {
	//alert("Funcionando azul");
	let body = document.body;
	body.style.background = "blue";
	document.querySelector("blue").setAttribute("width", "200px");
	
});