document.getElementById("formulario").addEventListener("click", function(e) {
	e.preventDefault();
	let nome = document.getElementById("nomeInput").value;
	if(nome == ""){
		document.getElementById("mensagem").textContent = "Campo está vazio!" ;
		//alert("Erro: O campo está vazio!");
	}
	else{
		//alert("Sucesso: " + nome);
		document.getElementById("mensagem").innerHTML = "Sucesso: " + nome;
	}
});