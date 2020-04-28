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

//Text Block
LearnBlock.Msg["SAMPLE_TEXT"] = "Hello_World";  //CHANGE XD

//Variables Block
LearnBlock.Msg["VARIABLES_SET"] = "set %1 to %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";
LearnBlock.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";

//Functions Blocks
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do_something";

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

//Utils
LearnBlock.Msg["DELETE_ALL_BLOCKS"] = "Delete all %1 blocks?";
LearnBlock.Msg["DELETE_BLOCK"] = "Delete Block";
LearnBlock.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicate";
LearnBlock.Msg["REDO"] = "Redo";
LearnBlock.Msg["UNDO"] = "Undo";
