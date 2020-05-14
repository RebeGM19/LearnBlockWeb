'use strict';

//Messages
var MSG = {
    sup: "LearnBlockWeb",
    execute: "Execute",
    introParagraph: "Welcome to LearnBlockWeb! Begin to drag and connect the blocks and start programming.",
    home: "Home Page",
    guide: "How to use",
    whatLB: "What is LearnBlock?",
    whatLBW: "What is LearnBlockWeb?",
    details: "Details",
    codeGenerated: "Code generated!",
    codePyNotGenerated: "Could not generate Python code",
    codeBTNotGenerated: "Could not generate Block-Text code"
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
LearnBlock.Msg["SAMPLE_TEXT"] = "text";

//Variables Block
LearnBlock.Msg["VARIABLES_SET"] = "set %1 to %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_VARIABLE"] = "Create variable...";

//Functions Blocks
LearnBlock.Msg["PROCEDURES_FUNCTION"] = "Function";
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
LearnBlock.Msg["NEW_VARIABLE_TITLE"] = "Variable name";
LearnBlock.Msg["RENAME_VARIABLE"] = "Rename variable";
LearnBlock.Msg["RENAME_VARIABLE_TITLE"] = "Rename variable";
LearnBlock.Msg["DELETE_VARIABLE"] = "Delete the '%1' variable";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicate";
LearnBlock.Msg["REDO"] = "Redo";
LearnBlock.Msg["UNDO"] = "Undo";
