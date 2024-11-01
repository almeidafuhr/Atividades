$(document).ready(function() {
    // Adicione seu código aqui
    $("#btnCriar").click(function () {
        var Sku = $("#sku").val();
        var Title = $("#title").val();
        var Description = $("#description").val();
        var Price = validarCampoNumerico($("#price").val());
        var Quantity = validarCampoNumerico($("#quantity").val());
        var Total = validarCampoNumerico($("#total").val());

        var myJSON = { 
            "sku": Sku, 
            "title": Title,
            "description": Description,
            "price": Price,
            "quantity": Quantity,
            "total": Total  
        }; myJSON;

        //var Envio = JSON.stringify({ myJSON });

        console.log(myJSON);


        /*$.post("https://open-souce.azurewebsites.net/api/product", { myJSON }, function(resposta) {
            console.log(resposta);
        });*/
        

        function validarCampoNumerico(valor) 
        {
            if(isNaN(valor)){
                alert("Campo é numérico");
                return valor;
            }
            else
                alert("Campo não é numérico");
        }
        
    });
    
    $("#btnAtualizar").click(function () {
        alert("Atualizar");
        $.get("https://open-souce.azurewebsites.net/api/product", function(data) {
            console.log(data);
        });
    });

    $("#btnExcluir").click(function () {
        alert("Excluir");
        
    });








    $(".texts").focusin(function() {
        $(this).css("background-color", "azure");
    });

    $(".texts").focusout(function() {
        $(this).css("background-color", "white");
    });
});