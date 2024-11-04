$(document).ready(function() {
    // Adicione seu código aqui
    
    $("#btnCriar").click(function () {
        var Sku = $("#sku").val();
        var Title = $("#title").val();
        var Description = $("#description").val();
        var Price = validarCampoNumerico($("#price").val());
        var Quantity = validarCampoNumerico($("#quantity").val());
        var Total = validarCampoNumerico($("#total").val());
        var Id = $("#inputRemover").val(); 

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
                "total": Total  
            }),
            
            success: function(data) {
                session = data.session;
            }
            
        });

        /*
        var request = new XMLHttpRequest();

        request.open('POST', 'https://private-anon-c21263861e-sauceapi1.apiary-mock.com/product');

        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authentication', '');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            }
        };

        var body = {
            "sku": Sku,
            "title": Title,
            "description": Description,
            "price": Price,
            "quantity": Quantity,
            "total": Total
        };

        request.send(JSON.stringify(body));
        */         
    });
    
    $("#btnAtualizar").click(function () {
        var Sku = $("#sku").val();
        var Title = $("#title").val();
        var Description = $("#description").val();
        var Price = validarCampoNumerico($("#price").val());
        var Quantity = validarCampoNumerico($("#quantity").val());
        var Total = validarCampoNumerico($("#total").val());
        var Id = $("#inputRemover").val(); 

        var request = new XMLHttpRequest();
        request.open('PUT', "https://private-anon-c21263861e-sauceapi1.apiary-mock.com/product/" + Id);

        request.setRequestHeader('Accept', 'text/plain');
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('authentication', '');

        request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
        };

        var body = {
            "sku": Sku, 
            "title": Title,
            "description": Description,
            "price": Price,
            "quantity": Quantity,
            "total": Total  
        };

        request.send(JSON.stringify(body));
        
        /*alert("Atualizar");
        data = $.get("https://open-souce.azurewebsites.net/api/product");
        console.log(data);
        */
    });

    $("#btnExcluir").click(function () { 
        var request = new XMLHttpRequest();
        request.open('DELETE', "https://private-anon-c21263861e-sauceapi1.apiary-mock.com/product?productId=" + id);
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            }
        };
        request.send();
    });



    //Alterar fundo dos input texts
    $(".texts").focusin(function() {
        $(this).css("background-color", "azure");
    });

    $(".texts").focusout(function() {
        $(this).css("background-color", "white");
    });

    //Validar campos numéricos
    function validarCampoNumerico(valor) 
        {
            if(isNaN(valor) || valor === "")
                console.log("Campo não é numérico ou não foi preenchido");
            else{
                console.log("Campo é numérico " + valor);
                return valor;
            }  
        }
});