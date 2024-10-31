document.getElementById("trocarImagem").addEventListener("click", function(){
	let image2 = document.getElementById("imagem2");
	//alert(image2);
	let path = image2.getAttribute("src");
	//alert(path);
	document.getElementById("imagem1").setAttribute("src", path);
});