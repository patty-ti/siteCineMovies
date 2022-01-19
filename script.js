//<![CDATA[
    $(window).on('load', function () {
        $('.preloader .inner').fadeOut();
        $('.preloader').delay(290).fadeOut('slow'); 
        $('body').delay(295).css({'overflow': 'visible'});
    })
    //]]>

//Menu Hamburguer
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");
});

//Config Slider
$(document).ready(function(){
    let slids = $(".slider [type=radio]"); // busca os radios na div
    let slids_len = slids.length; // conta o número de radios
    let intervalo = 3; // intervalo em segundos
    
    function rodar(){
        let slids_ativo = $(".slider [type=radio]:checked")
        .attr("id")
        .match(/\d+/)[0]; // pega o valor numérico do id do radio checado

       if(slids_ativo == slids_len) slids_ativo = 0; //se estiver no último slide, volta pro primeiro

       slids.eq(slids_ativo).prop("checked", true); // checa o radio da vez
    }
    
    let tempo = setInterval(rodar, intervalo*1000); // inicia o temporizador
    
    $(".slider").hover(
       function(){ // função quando entra o mouse
          clearInterval(tempo); // cancela o temporizador
        },
       function(){ // função quando retira o mouse
          tempo = setInterval(rodar, intervalo*1000); // reinicia o temporizador
        }
    );
    
});

//Config Cards slideshow
let slideShow = 1;
showCards (slideShow);

function playShow(n) {
    showCards(slideShow += n);
}

function showCards(n) {
    let i;
    let x = document.querySelector(".cardspop");
    if (n > x.length) {
        slideShow = 1
    } if (n < 1) {
        slideShow = 1
    } for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";        
    }
    x [slideShow - 1]. style.display = "block";

}

//Configuração formulário de contato
function validaForm(frm) {
    if (frm.nome.value == "" || 
        frm.nome.value == null || 
        frm.nome.value.lenght < 3) {
            alert("Por favor, indique o seu nome!");
            frm.nome.focus();
            return false;
    } if (frm.email.value.indexOf("@" , ".") == "" ||        
        frm.email.value == "" ||
        frm.email.value == null) {
            alert("Por favor, indique um e-mail válido!");
            frm.email.focus();
            return false;
    } if (frm.msg.value == "" || 
        frm.msg.value == null) {
            alert("Por favor, conte-nos como podemos te ajudar!");
            frm.msg.focus();
            return false;
    }
}  