'use strict';

//Mensajes
var MSG = {
    sup: "LearnBlockWeb",
    execute: "Ejecutar",
    introParagraph: "¡Bienvenido a LearnBlockWeb!",
    home: "Página principal",
    guide: "Guía de uso",
    whatLB: "¿Qué es LearnBlock?",
    whatLBW: "¿Qué es LearnBlockWeb?",
    details: "Detalles"
};

//Bloques
function loadSpanish(languagesBlocks){
    if (languagesBlocks != null){
        for (var i=0; i<languagesBlocks.length; i++){
            LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][1];
        }
    }
}

//Bloque Texto
LearnBlock.Msg["SAMPLE_TEXT"] = "texto";

//Bloques Variables
LearnBlock.Msg["VARIABLES_SET"] = "poner %1 a %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_VARIABLE"] = "Crear variable...";

//Bloques Funciones
LearnBlock.Msg["PROCEDURES_FUNCTION"] = "Función";
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "hacer_algo";

//Categorias
LearnBlock.Msg["CONTROL"] = "Control";
LearnBlock.Msg["OPERATORS"] = "Operadores";
LearnBlock.Msg["VALUES"] = "Valores";
LearnBlock.Msg["VARIABLES"] = "Variables";
LearnBlock.Msg["FUNCTIONS"] = "Funciones";
LearnBlock.Msg["EMOTIONS"] = "Emociones";
LearnBlock.Msg["SPEAKER"] = "Speaker";
LearnBlock.Msg["BASE"] = "Base";
LearnBlock.Msg["MOTOR"] = "Motor";
LearnBlock.Msg["CAMERA"] = "Cámara";
LearnBlock.Msg["DISTANCES"] = "Distancias";
LearnBlock.Msg["GROUND"] = "Suelo";

//Operadores
LearnBlock.Msg["+"] = "+";
LearnBlock.Msg["-"] = "-";
LearnBlock.Msg["*"] = "*";
LearnBlock.Msg["/"] = "/";
LearnBlock.Msg["="] = "=";
LearnBlock.Msg["=="] = "==";
LearnBlock.Msg["+="] = "+=";
LearnBlock.Msg["-="] = "-=";
LearnBlock.Msg["*="] = "*=";
LearnBlock.Msg["/="] = "/=";
LearnBlock.Msg["<"] = "<";
LearnBlock.Msg[">"] = ">";

//Utils
LearnBlock.Msg["DELETE_ALL_BLOCKS"] = "¿Borrar %1 bloques?";
LearnBlock.Msg["DELETE_BLOCK"] = "Borrar bloque";
LearnBlock.Msg["NEW_VARIABLE_TITLE"] = "Nombre de la variable";
LearnBlock.Msg["RENAME_VARIABLE"] = "Renombrar variable";
LearnBlock.Msg["RENAME_VARIABLE_TITLE"] = "Renombrar variable";
LearnBlock.Msg["DELETE_VARIABLE"] = "Borrar variable '%1'";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "¿Borrar %1 usos de la variable '%2'?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Borrar %1 bloques";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicar bloque";
LearnBlock.Msg["REDO"] = "Rehacer";
LearnBlock.Msg["UNDO"] = "Deshacer";
