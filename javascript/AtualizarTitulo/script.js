document.getElementById("atualizarTitulo").addEventListener("click", function() {
    let tituloNovo = document.getElementById("tituloInput").value;
	if(tituloNovo != ""){
		//alert("Título foi alterado para: " + tituloNovo);
		document.title = tituloNovo;
		document.getElementById("mensagem").textContent = "Novo Título: " + tituloNovo;
	}
	else{
		document.getElementById("mensagem").textContent = "Deve digitar um novo título";
		//alert("Deve digitar um novo título");
	}
    
});