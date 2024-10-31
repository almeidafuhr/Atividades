document.getElementById("formulario").addEventListener("submit", function() {
	let nome = document.getElementById("nomeInput").value;
	if(nome == ""){
		alert("Erro: O campo está vazio!");
	}
	else{
		//alert("Sucesso: " + nome);
		document.getElementById("mensagem").innerHTML = "Sucesso: " + nome;
	}
});