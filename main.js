function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');   
}

const ListaDeTeclas = document.querySelectorAll('.tecla')



for (contador = 0; contador < listaDeTecla.length; contador++){
    constInstrumento = ListaDeTeclas[contador].clssList[1];
    const tecla = ListaDeTeclas[contador];

    const idAudio = '#som_${instrumento}';
    tecla[contador].onclick = function(){
        tocaSom('#som_tecla_clap')
    };
    tecla.onkeydown = function(evento){
        if(evento.code === 'space'){

    tecla.classList.add('ativa');
 }
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
    }
}


ListaDeTeclas[1].onclick = tocaSomClap;
ListaDeTeclas[2].onclick = tocaSomTim;
ListaDeTeclas[3].onclick = tocaSomPuff;
