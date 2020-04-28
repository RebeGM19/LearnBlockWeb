'use strict';

//Messages
var MSG = {
    sup: "Upper Zone",
    newblock: "Create New Block",
    execute: "Execute"
};

//Blocks
function loadEnglish(languagesBlocks){
    if (languagesBlocks != null){
        for (var i=0; i<languagesBlocks.length; i++){
            LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][2];
        }
    }
}

//Utils
LearnBlock.Msg["DELETE_ALL_BLOCKS"] = "Delete all %1 blocks?";
LearnBlock.Msg["DELETE_BLOCK"] = "Delete Block";
LearnBlock.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicate";
LearnBlock.Msg["REDO"] = "Redo";
LearnBlock.Msg["UNDO"] = "Undo";

//Categories
LearnBlock.Msg["CONTROL"] = "Control";
LearnBlock.Msg["OPERATORS"] = "Operators";
LearnBlock.Msg["VALUES"] = "Values";
LearnBlock.Msg["VARIABLES"] = "Variables";
LearnBlock.Msg["FUNCTIONS"] = "Functions";
LearnBlock.Msg["EMOTIONS"] = "Emotions";
LearnBlock.Msg["SPEAKER"] = "Speaker";
LearnBlock.Msg["BASE"] = "Base";
LearnBlock.Msg["MOTOR"] = "Motor";
LearnBlock.Msg["CAMERA"] = "Camera";
LearnBlock.Msg["DISTANCES"] = "Distances";
LearnBlock.Msg["GROUND"] = "Ground";

//Operators
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

//Text Block
LearnBlock.Msg["SAMPLE_TEXT"] = "Hello_World";  //CHANGE XD

//Variables Block
LearnBlock.Msg["VARIABLES_SET"] = "set %1 to %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";
LearnBlock.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";

//Functions Blocks
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do_something";

//Camera Blocks
LearnBlock.Msg["IS_CENTER_RED_LINE"] = "is_center_red_line()";
LearnBlock.Msg["IS_LEFT_RED_LINE"] = "is_left_red_line()";
LearnBlock.Msg["IS_RIGHT_RED_LINE"] = "is_right_red_line()";
LearnBlock.Msg["IS_THERE_RED_LINE"] = "is_there_red_line()";
LearnBlock.Msg["IS_CENTER_BLACK_LINE"] = "is_center_black_line()";
LearnBlock.Msg["IS_LEFT_BLACK_LINE"] = "is_left_black_line()";
LearnBlock.Msg["IS_RIGHT_BLACK_LINE"] = "is_right_black_line()";
LearnBlock.Msg["IS_THERE_BLACK_LINE"] = "is_there_black_line()";
LearnBlock.Msg["IS_CENTER_BLUE_LINE"] = "is_center_blue_line()";
LearnBlock.Msg["IS_LEFT_BLUE_LINE"] = "is_left_blue_line()";
LearnBlock.Msg["IS_RIGHT_BLUE_LINE"] = "is_right_blue_line()";
LearnBlock.Msg["IS_THERE_BLUE_LINE"] = "is_there_blue_line()";

LearnBlock.Msg["IS_LEFT_FACE"] = "is_left_face()";
LearnBlock.Msg["IS_RIGHT_FACE"] = "is_right_face()";
LearnBlock.Msg["IS_UP_FACE"] = "is_up_face()";
LearnBlock.Msg["IS_DOWN_FACE"] = "is_down_face()";
LearnBlock.Msg["IS_CENTER_FACE"] = "is_center_face()";
LearnBlock.Msg["IS_THERE_FACE"] = "is_there_face()";
LearnBlock.Msg["IS_LINE_CROSSING"] = "is_line_crossing()";

LearnBlock.Msg["IS_ANY_FACE_HAPPY"] = "is_any_face_happy()";
LearnBlock.Msg["IS_ANY_FACE_ANGRY"] = "is_any_face_angry()";
LearnBlock.Msg["IS_ANY_FACE_NEUTRAL"] = "is_any_face_neutral()";
LearnBlock.Msg["IS_ANY_FACE_SAD"] = "is_any_face_sad()";
LearnBlock.Msg["IS_ANY_FACE_SURPRISED"] = "is_any_face_surprised()";

LearnBlock.Msg["IS_TAG"] = "is_tag(%1)";
LearnBlock.Msg["IS_ANY_TAG"] = "is_any_tag()";
LearnBlock.Msg["TAG_ON_THE_LEFT"] = "tag_on_the_left()";
LearnBlock.Msg["TAG_ON_THE_RIGHT"] = "tag_on_the_right()";
LearnBlock.Msg["TAG_ON_THE_CENTER"] = "tag_on_the_center(%1)";
LearnBlock.Msg["IS_IMAGE"] = "is_image(%1)";


//Distances Blocks
LearnBlock.Msg["IS_FRONT_OBSTACLE"] = "is_front_obstacle(%1)";
LearnBlock.Msg["IS_LEFT_OBSTACLE"] = "is_left_obstacle(%1)";
LearnBlock.Msg["IS_RIGHT_OBSTACLE"] = "is_right_obstacle(%1)";
LearnBlock.Msg["IS_OBSTACLE_FREE"] = "is_obstacle_free(%1)";
LearnBlock.Msg["GET_MIN_DISTANCE"] = "get_min_distance(%1, %2, %3)";

//Ground Blocks
LearnBlock.Msg["IS_THERE_GROUND"] = "is_there_ground()";
LearnBlock.Msg["IS_CENTER_GROUND_LINE"] = "is_center_ground_line()";
LearnBlock.Msg["IS_RIGHT_GROUND_LINE"] = "is_right_ground_line()";
LearnBlock.Msg["IS_LEFT_GROUND_LINE"] = "is_left_ground_line()";




