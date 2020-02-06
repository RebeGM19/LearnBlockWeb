var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['es'] = new Array();

// English content
arrLang['en']['bAddNumber'] = 'Add Number';
arrLang['en']['bAddText'] = 'Add Text';
arrLang['en']['bCreateBlock'] = 'Create New Block';
arrLang['en']['selectLang'] = 'Language';
arrLang['en']['blockTypes'] = 'Block Types';
arrLang['en']['bCont'] = 'Control';
arrLang['en']['bOp'] = 'Operators';
arrLang['en']['bVar'] = 'Variables';
arrLang['en']['bFunc'] = 'User functions';
arrLang['en']['bEmo'] = 'Emotions';
arrLang['en']['bSpe'] = 'Speaker';
arrLang['en']['bBase'] = 'Base';
arrLang['en']['bMot'] = 'Motor';
arrLang['en']['bCam'] = 'Camera';
arrLang['en']['bDis'] = 'Distances';
arrLang['en']['bGro'] = 'Ground';
arrLang['en']['bSear'] = 'Search';
arrLang['en']['lCont'] = 'List Control';
arrLang['en']['lOp'] = 'List Operators';
arrLang['en']['lVar'] = 'List Variables';
arrLang['en']['lFunc'] = 'List User functions';
arrLang['en']['lEmo'] = 'List Emotions';
arrLang['en']['lSpe'] = 'List Speaker';
arrLang['en']['lBase'] = 'List Base';
arrLang['en']['lMot'] = 'List Motor';
arrLang['en']['lCam'] = 'List Camera';
arrLang['en']['lDis'] = 'List Distances';
arrLang['en']['lGro'] = 'List Ground';
arrLang['en']['lSear'] = 'List Search';
arrLang['en']['bGenerate'] = 'Generate code';

// Spanish content
arrLang['es']['bAddNumber'] = 'Añadir Número';
arrLang['es']['bAddText'] = 'Añadir Texto';
arrLang['es']['bCreateBlock'] = 'Crear Nuevo Bloque';
arrLang['es']['selectLang'] = 'Idioma';
arrLang['es']['blockTypes'] = 'Tipos de bloques';
arrLang['es']['bCont'] = 'Control';
arrLang['es']['bOp'] = 'Operadores';
arrLang['es']['bVar'] = 'Variables';
arrLang['es']['bFunc'] = 'Funciones de usuario';
arrLang['es']['bEmo'] = 'Emociones';
arrLang['es']['bSpe'] = 'Speaker';
arrLang['es']['bBase'] = 'Base';
arrLang['es']['bMot'] = 'Motor';
arrLang['es']['bCam'] = 'Cámara';
arrLang['es']['bDis'] = 'Distancias';
arrLang['es']['bGro'] = 'Suelo';
arrLang['es']['bSear'] = 'Buscar';
arrLang['es']['lCont'] = 'Lista Control';
arrLang['es']['lOp'] = 'Lista Operadores';
arrLang['es']['lVar'] = 'Lista Variables';
arrLang['es']['lFunc'] = 'Lista Funciones de usuario';
arrLang['es']['lEmo'] = 'Lista Emociones';
arrLang['es']['lSpe'] = 'Lista Speaker';
arrLang['es']['lBase'] = 'Lista Base';
arrLang['es']['lMot'] = 'Lista Motor';
arrLang['es']['lCam'] = 'Lista Cámara';
arrLang['es']['lDis'] = 'Lista Distancias';
arrLang['es']['lGro'] = 'Lista Suelo';
arrLang['es']['lSear'] = 'Lista Buscar';
arrLang['es']['bGenerate'] = 'Generar código';

// Process translation
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');
        //var ifrm = document.getElementById('mainiframe').contentWindow.document;

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

