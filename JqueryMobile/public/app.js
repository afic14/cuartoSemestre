let fondoOscuro = false
$(document).ready(function () {
    $('#btnModoOscuro').click(function (e) { 
        console.log('hola')        
        if(fondoOscuro == false){
            $('#bodyHtml').removeClass('bg-white').addClass('bg-black');
            $('#bodyHtml').removeClass('text-gray-600').addClass('text-white');
            fondoOscuro = true
        }else{
             $('#bodyHtml').removeClass('bg-black').addClass('bg-white');
             $('#bodyHtml').removeClass('text-white').addClass('text-gray-600');
            fondoOscuro = false
        }           
    });
});