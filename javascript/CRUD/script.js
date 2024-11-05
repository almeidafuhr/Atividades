$(document).ready(function() {
    // Adicione seu código aqui
    
    $("#btnCriar").click(function () {
        var Sku = $("#sku").val();
        var Title = $("#title").val();
        var Description = $("#description").val();
        var Price = validarCampoNumerico($("#price").val());
        var Quantity = validarCampoNumerico($("#quantity").val());

        $.ajax({
            url: "https://open-souce.azurewebsites.net/api/product",
            type: 'POST',
            contentType: 'apllication/json',
            data : JSON.stringify({ 
                "sku": Sku, 
                "title": Title,
                "description": Description,
                "price": Price,
                "quantity": Quantity,
            }),
            
            success: function(data) {
                session = data.session;
            }
            
        });
    });
    
    $("#btnAtualizar").click(function () {
        var Sku = $("#sku").val();
        var Title = $("#title").val();
        var Description = $("#description").val();
        var Price = validarCampoNumerico($("#price").val());
        var Quantity = validarCampoNumerico($("#quantity").val());
        var Id = $("#inputRemover").val(); 

        $.ajax({
            url: "https://open-souce.azurewebsites.net/api/product/" + Id,
            type: 'PUT',
            contentType: "apllication/json",
            data : JSON.stringify({ 
                "sku": Sku, 
                "title": Title,
                "description": Description,
                "price": Price,
                "quantity": Quantity,

            }),
            
        });
    });

    $("#btnExcluir").click(function () {
        var Id = $("#inputRemover").val();
        $.ajax({
            url: 'https://open-souce.azurewebsites.net/api/product?productId=' + Id,
            type: 'DELETE',
            contentType: 'apllication/json',
        });
    });

    //Alterar fundo dos input texts
    $(".texts").focusin(function() {
        $(this).css("background-color", "azure");
    });

    $(".texts").focusout(function() {
        $(this).css("background-color", "white");
    });

    //Validar campos numéricos
    function validarCampoNumerico(valor) {
            if(isNaN(valor) || valor === "")
                console.log("Campo não é numérico. Foi preenchido?");
            else{
                console.log("Campo é numérico " + valor);
                return valor;
            }  
    }

    (function() {
        $("#labelRemover").hide();
        $("#inputRemover").hide();
    })();
    
    //Apresentar campo label e campo de id
    $("#btnExcluir").hover(function() {
        $("#labelRemover").show();
        $("#inputRemover").show();
    });

    //Apresentar campo label e campo de id
    $("#btnAtualizar").hover(function() {
        $("#labelRemover").show();
        $("#inputRemover").show();
    });

});