$(document).ready(function(){
    init();
    
    function init(){
        carregarDisciplinas();
        carregarSolicitacao();
        carregarCalendario();
        logar();
    }
function logar(){
    $('#btn-login').click(function(){
        $.ajax({
            url: "http://www.felipemaciel.com.br/sys/fatec/appFatec/logar.php",
            data: {
                ra: $('#ra').val(),
                senha: $('#senha').val()
            },
            success: function(resposta){
                if(resposta == "Erro!"){
                    alert("RA/Senha inválidos")  
                }else{
                    idAluno = resposta;
                    window.location.href="index.html"
            carregarCalendario(idAluno);
                   
                }
            },
            error: function(erro){
                alert('erro');
            }
        });
    });
}

function carregarCalendario(idAluno){
    var conteudo;
         $.getJSON('http://www.felipemaciel.com.br/sys/fatec/appFatec/getCalendario.php?idAluno=1',
                 function(data){
                 $.each(data, function(chave, valor){
                conteudo =  '<div class="card">';
                conteudo += '<h4 class="card-title"> '+valor.dataEntrega+'</h4>';
                conteudo += '<h6 class="text-muted card-subtitle mb-2">'+valor.tipo+'</h6>';
                conteudo += '<p class="card-text">'+valor.disciplina+'</p>';
                conteudo += '<div class="card"></div>';
                $('#tab-1').append(conteudo);

              });
        
          });
        }
function carregarDisciplinas(idAluno){
    var conteudo;
         $.getJSON('http://www.felipemaciel.com.br/sys/fatec/appFatec/getCalendario.php?idAluno='+idAluno,
                 function(data){
                 $.each(data, function(chave, valor){
                conteudo =  '<div class="card">';
                conteudo += '<h4 class="card-title">'+valor.dataEntrega+'</h4>';
                conteudo += '<h6 class="text-muted card-subtitle mb-2">'+valor.tipo+'</h6>';
                conteudo += ' <p class="card-text">'+valor.disciplina+'</p>';
                conteudo += '<div class="card"></div>';
                $('#tab-2').append(conteudo);

              });
        
          });
        }


function carregarSolicitacao(idAluno){
    var conteudo;
         $.getJSON('http://www.felipemaciel.com.br/sys/fatec/appFatec/getCalendario.php?idAluno='+idAluno,
                 function(data){
                 $.each(data, function(chave, valor){
                conteudo =  '<div class="card-body">';
                conteudo += '<h4 class="card-title">'+valor.solicitacao+'</h4>';
                conteudo += '<h6 class="text-muted card-subtitle mb-2">'+valor.numeroProtocolo+'</h6>';
                conteudo += ' <p class="card-text">'+valor.situacao+'</p>';
                conteudo += '<div class="card"></div>';
                $('#tab-3').append(conteudo);

              });
        
          });
        }


});