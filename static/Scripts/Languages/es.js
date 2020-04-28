'use strict';

//Mensajes
var MSG = {
    sup: "Zona Superior",
    newblock: "Crear Nuevo Bloque",
    execute: "Ejecutar"
};

//Bloques
function loadSpanish(languagesBlocks){
    if (languagesBlocks != null){
        for (var i=0; i<languagesBlocks.length; i++){
            LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][1];
        }
    }
}

//Utils
LearnBlock.Msg["DELETE_ALL_BLOCKS"] = "¿Borrar %1 bloques?";
LearnBlock.Msg["DELETE_BLOCK"] = "Borrar bloque";
LearnBlock.Msg["DELETE_VARIABLE"] = "Borrar variable '%1'";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "¿Borrar %1 usos de la variable '%2'?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Borrar %1 bloques";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicar bloque";
LearnBlock.Msg["REDO"] = "Rehacer";
LearnBlock.Msg["UNDO"] = "Deshacer";

//Categorias
LearnBlock.Msg["CONTROL"] = "Control";
LearnBlock.Msg["OPERATORS"] = "Operadores";
LearnBlock.Msg["VALUES"] = "Valores";
LearnBlock.Msg["VARIABLES"] = "Variables";
LearnBlock.Msg["FUNCTIONS"] = "Funnciones";
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

//Bloque Texto
LearnBlock.Msg["SAMPLE_TEXT"] = "Hola_Mundo";  //CAMBIAR XD

//Bloques Variables
LearnBlock.Msg["VARIABLES_SET"] = "poner %1 a %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_NUMBER_VARIABLE"] = "Crear variable número...";
LearnBlock.Msg["NEW_STRING_VARIABLE"] = "Crear variable texto...";

//Bloques Funciones
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "hacer_algo";

//Bloques Camara
LearnBlock.Msg["IS_CENTER_RED_LINE"] = "linea_roja_centro()";
LearnBlock.Msg["IS_LEFT_RED_LINE"] = "linea_roja_izquierda()";
LearnBlock.Msg["IS_RIGHT_RED_LINE"] = "linea_roja_derecha()";
LearnBlock.Msg["IS_THERE_RED_LINE"] = "hay_linea_roja()";
LearnBlock.Msg["IS_CENTER_BLACK_LINE"] = "linea_negra_centro()";
LearnBlock.Msg["IS_LEFT_BLACK_LINE"] = "linea_negra_izquierda()";
LearnBlock.Msg["IS_RIGHT_BLACK_LINE"] = "linea_negra_derecha()";
LearnBlock.Msg["IS_THERE_BLACK_LINE"] = "hay_linea_negra()";
LearnBlock.Msg["IS_CENTER_BLUE_LINE"] = "linea_azul_centro()";
LearnBlock.Msg["IS_LEFT_BLUE_LINE"] = "linea_azul_izquierda()";
LearnBlock.Msg["IS_RIGHT_BLUE_LINE"] = "linea_azul_derecha()";
LearnBlock.Msg["IS_THERE_BLUE_LINE"] = "hay_linea_azul()";

LearnBlock.Msg["IS_LEFT_FACE"] = "cara_a_la_izquierda()";
LearnBlock.Msg["IS_RIGHT_FACE"] = "cara_a_la_derecha()";
LearnBlock.Msg["IS_UP_FACE"] = "cara_arriba()";
LearnBlock.Msg["IS_DOWN_FACE"] = "cara_abajo()";
LearnBlock.Msg["IS_CENTER_FACE"] = "cara_en_el_centro()";
LearnBlock.Msg["IS_THERE_FACE"] = "hay_cara()";
LearnBlock.Msg["IS_LINE_CROSSING"] = "hay_cruce()";

LearnBlock.Msg["IS_ANY_FACE_HAPPY"] = "hay_alguien_alegre()";
LearnBlock.Msg["IS_ANY_FACE_ANGRY"] = "hay_alguien_enfadado()";
LearnBlock.Msg["IS_ANY_FACE_NEUTRAL"] = "hay_alguien_neutral()";
LearnBlock.Msg["IS_ANY_FACE_SAD"] = "hay_alguien_triste()";
LearnBlock.Msg["IS_ANY_FACE_SURPRISED"] = "hay_alguien_sorprendido()";

LearnBlock.Msg["IS_TAG"] = "veo_el_tag(%1)";
LearnBlock.Msg["IS_ANY_TAG"] = "veo_algun_tag()";
LearnBlock.Msg["TAG_ON_THE_LEFT"] = "tag_a_la_izquierda()";
LearnBlock.Msg["TAG_ON_THE_RIGHT"] = "tag_a_la_derecha()";
LearnBlock.Msg["TAG_ON_THE_CENTER"] = "tag_en_el_centro(%1)";
LearnBlock.Msg["IS_IMAGE"] = "esta_la_imagen(%1)";


//Bloques Distancias
LearnBlock.Msg["IS_FRONT_OBSTACLE"] = "hay_algo_delante(%1)";
LearnBlock.Msg["IS_LEFT_OBSTACLE"] = "hay_algo_izquierda(%1)";
LearnBlock.Msg["IS_RIGHT_OBSTACLE"] = "hay_algo_derecha(%1)";
LearnBlock.Msg["IS_OBSTACLE_FREE"] = "no_hay_obstaculos(%1)";
LearnBlock.Msg["GET_MIN_DISTANCE"] = "obtener_distancia(%1, %2, %3)";

//Bloques Suelo
LearnBlock.Msg["IS_THERE_GROUND"] = "hay_suelo()";
LearnBlock.Msg["IS_CENTER_GROUND_LINE"] = "linea_central_en_suelo()";
LearnBlock.Msg["IS_RIGHT_GROUND_LINE"] = "linea_derecha_en_suelo()";
LearnBlock.Msg["IS_LEFT_GROUND_LINE"] = "linea_izquierda_en_suelo()";


