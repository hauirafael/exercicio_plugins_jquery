
$(document).ready(function(){
    // Aplicar máscara de CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});
    
    // Aplicar máscara de telefone
    $('#telefone').mask('(00) 0000-0000');
    
    // Aplicar máscara de CEP
    $('#cep').mask('00000-000');
});

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            endereco: {
                required:true,
                endereco:true
            },
            telefone: {
                required:true
            },
            cep:{
                required:true
            },
            cpf:{
                required:true,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    