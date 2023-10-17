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
}


ListaDeTeclas[1].onclick = tocaSomClap;
ListaDeTeclas[2].onclick = tocaSomTim;
ListaDeTeclas[3].onclick = tocaSomPuff;
