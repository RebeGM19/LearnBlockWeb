'use strict';

//Mensajes
var MSG = {
    sup: "Zona Superior",
    newblock: "Crear Nuevo Bloque",
    execute: "Ejecutar"
};

//Bloques
function loadSpanish(languagesBlocks){
    for (var i=0; i<languagesBlocks.length; i++){
        LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][1];
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

//Bloques Operadores
LearnBlock.Msg["TRUE"] = "verdad";
LearnBlock.Msg["FALSE"] = "falso";
LearnBlock.Msg["AND"] = "Y";
LearnBlock.Msg["OR"] = "O";
LearnBlock.Msg["NOT"] = "No";

//Bloque Textp
LearnBlock.Msg["SAMPLE_TEXT"] = "Hola_Mundo";

//Bloques Variables
LearnBlock.Msg["VARIABLES_SET"] = "poner %1 a %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_NUMBER_VARIABLE"] = "Crear variable número...";
LearnBlock.Msg["NEW_STRING_VARIABLE"] = "Crear variable texto...";

//Bloques Funciones
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "hacer_algo";

//Bloques Emociones
LearnBlock.Msg["EXPRESS_NEUTRAL"] = "no_expresar_nada()";
LearnBlock.Msg["EXPRESS_JOY"] = "expresar_alegria()";
LearnBlock.Msg["EXPRESS_FEAR"] = "expresar_miedo()";
LearnBlock.Msg["EXPRESS_SADNESS"] = "expresar_tristeza()";
LearnBlock.Msg["EXPRESS_ANGER"] = "expresar_ira()";
LearnBlock.Msg["EXPRESS_DISGUST"] = "expresar_asco()";
LearnBlock.Msg["EXPRESS_SURPRISE"] = "expresar_sorpresa()";
LearnBlock.Msg["IS_NEUTRAL"] = "estoy_neutral()";
LearnBlock.Msg["IS_JOY"] = "estoy_alegre()";
LearnBlock.Msg["IS_FEAR"] = "estoy_asustado()";
LearnBlock.Msg["IS_SADNESS"] = "estoy_triste()";
LearnBlock.Msg["IS_ANGER"] = "estoy_enfadado()";
LearnBlock.Msg["IS_DISGUST"] = "estoy_disgustado()";
LearnBlock.Msg["IS_SURPRISE"] = "estoy_sorprendido()";

//Bloque Speaker
LearnBlock.Msg["SAY_SOMETHING"] = "decir_texto(%1)";

//Bloques Base
LearnBlock.Msg["SLOW_DOWN"] = "mas_despacio()";
LearnBlock.Msg["TURN_RIGHT"] = "girar_derecha()";
LearnBlock.Msg["TURN_LEFT"] = "girar_izquierda()";
LearnBlock.Msg["TURN_BACK"] = "girar_atras()";
LearnBlock.Msg["TURN"] = "girar(%1)";
LearnBlock.Msg["SET_ORIENTATION"] = "pon_orientacion(%1)";
LearnBlock.Msg["RESET_ORIENTATION"] = "orientacion_a_cero()";
LearnBlock.Msg["STOP_BOT"] = "parar()";
LearnBlock.Msg["SET_MOVE"] = "poner_movimiento(%1, %2)";
LearnBlock.Msg["MOVE_STRAIGHT"] = "mover_recto()";
LearnBlock.Msg["MOVE_RIGHT"] = "mover_derecha()";
LearnBlock.Msg["MOVE_LEFT"] = "mover_izquierda()";
LearnBlock.Msg["IS_MOVING_LEFT"] = "estoy_moviendo_izquierda()";
LearnBlock.Msg["IS_MOVING_RIGHT"] = "estoy_moviendo_derecha()";
LearnBlock.Msg["IS_MOVING_STRAIGHT"] = "estoy_moviendo_recto()";
LearnBlock.Msg["IS_TURNING_LEFT"] = "estoy_girando_izquierda()";
LearnBlock.Msg["IS_TURNING_RIGHT"] = "estoy_girando_derecha()";
LearnBlock.Msg["IS_TURNING"] = "estoy_girando()";

//Bloques Motor
LearnBlock.Msg["LOOK_FLOOR"] = "mirar_suelo()";
LearnBlock.Msg["LOOK_UP"] = "mirar_arriba()";
LearnBlock.Msg["LOOK_FRONT"] = "mirar_frente()";
LearnBlock.Msg["SET_ANGLE_CAMERA"] = "ponerAnguloCamara(%1)";
LearnBlock.Msg["SET_ANGLE_MOTOR"] = "ponerAnguloMotor(%1, %2)";

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


