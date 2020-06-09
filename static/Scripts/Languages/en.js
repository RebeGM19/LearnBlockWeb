'use strict';

//Messages
var MSG = {
    tSelectLang: "Language: ",
    execute: "Blocks to Text",
    executeBT: "Block-Text to Python",
    home: "Home Page",
    guide: "How to use",
    whatLB: "About LearnBlock",
    whatLBW: "About LearnBlockWeb",
    details: "Details",
    codeGenerated: "Code generated!",
    codePyNotGenerated: "Could not generate Python code",
    codeBTNotGenerated: "Could not generate Block-Text code",
    copyCodeBT: "Copy code",
    copyCodePY: "Copy code",
    programPY: "Program Python",
    programBT: "Program Block-Text",
    programLB: "Program LearnBlock",

    titleHowTo: "How to use",
    titleAboutLB: "What's LearnBlock?",
    titleAboutLBW: "What's LearnBlockWeb?",
    titleDetails: "Web Details",

    HT1: "Start by grabbing a block from the left side of the page and drag it to the grey zone. You'll see that some of the blocks fit with other blocks as if it was a puzzle. Each block is equivalent to an structure or a function in a professional programming language, and are classified in different categories according to what they represent.",
    HT2: "Try to join some blocks and create a program by yourself!",
    HT3: "When you finish to build your program, click on the \"Blocks to Text\" button to create the equivalent code. If you click on the \"Block-Text\" and \"Python\" tabs, you'll see the code, and if you click on \"LearnBlock\" you'll be back to the blocks interface.",
    HT4: "If some of the two codes is not generated, it's because there's a failure in your program. Try again! Switch blocks, delete some of them or add new blocks. Tip: Every program must have one and only one main block.",
    HT5: "If you understand and you have learnt the Block-Text code, you can write it by yourself in the \"Block-Text\" tab and generate the equivalent Python code by clicking in \"Block-Text to Python\" button.",
    HT6: "LearnBlock Control:",
    HT7: "Left click (hold) on a block: Drag block",
    HT8: "Left click (hold) on the grey zone: Drag the grey zone",
    HT9: "Left click on a highlighted zone in a block: Edit block's parameters",
    HT10: "Right click on a block: Delete block, duplicate block",
    HT11: "Right click on the grey zone: Delete all blocks, undo action, redo action",

    aLB1: "LearnBlock is an educational programming tool that provides a block-based language through which users can intuitively program robot behaviours and work with different robotic platforms. Alongside LearnBlock, a robot called EBO has been built. Both, LearnBlock and EBO, are open developments.",
    aLB2: "LearnBlock provides a graphical user interface with the options to create a program using graphical elements (blocks). Thus, the user can build a program by selecting and connecting different blocks related to program control, actions and sensory information, among others. In addition, the set of blocks to be used can be conﬁgured from the tool itself to let the user select the more appropriate types of visible blocks for a particular problem. Blocks can also be created from other blocks to encapsulate and reuse certain pieces of code.",
    aLB3: "All the above features are available in most of the existing tools, but LearnBlock also supports the creation of individual blocks from code. In LearnBlock the user can directly write the code in the target language, specifying the statements that must be executed when the program ﬂow reaches that point.",
    aLB4: "Regarding code generation, LearnBlock generates Python code from the textual representation of a visual program (block-based program). The generated code can be viewed and modiﬁed. Thus, the user can choose whether to create a program from blocks, from the textual representation of blocks or directly coding in Python. From the educational perspective, LearnBlock provides an integrated environment for learning programming where more complex concepts can be increasingly introduced, moving progressively towards a professional programming language.",
    aLB5: "LearnBlock is robot-agnostic, i.e., the same code can be used to program different robots. The novelty in this sense is that the robot-agnostic property is guaranteed not only for the visual code, but also for the generated one.",
    aLB6: "Among other features, LearnBlock includes the following:",
    aLB7: "Available for different physical robots (EBO, Cozmo, Thymio and EV3) and simulated ones (EBO under RCIS and EV3 under V-REP).",
    aLB8: "Robots can be programmed using different languages: visual language, Block-Text (textual representation of the visual language) and Python.",
    aLB9: "New blocks can be created from code (Python) using the tool itself or external tools.",
    aLB10: "A program can be run and stopped at any moment. When a program is interrupted the robot is properly stopped and disconnected.",
    aLB11: "LearnBlock Research Publication",
    aLB12: "LearnBlock Git Repository",

    aLBW1: "LearnBlockWeb is a LearnBlock online version. The objective here is to create a way for LearnBlock to have a bigger scope, so any person can use part of its features, regardless of the computer he has or the operating system it has installed. The only thing needed is internet connection.",
    aLBW2: "LearnBlock has three main features: Block programming, code generation and code execution. Among these three, LearnBlockWeb includes the first two.",
    aLBW3: "With these two features, the progressive programming learning part is covered. Thus, the user starts intuitively programming with a visual language (blocks), going through its equivalent textual representation (Block-Text), and ends with a professional programming language that it's used nowadays (Python).",
    aLBW4: "LearnBlockWeb is in development.",
    aLBW5: "LearnBlockWeb Git Repository",

    det1: "Structured and designed with HTML, CSS and JavaScript",
    det2: "Use of the Bootstrap framework",
    det3: "Use of the Blockly framework for the visual language (blocks)",
    det4: "Developed with Python 3",
    det5: "Executed with Flask",
    det6: "Use of the LearnBlock code itself for the code generation",
    det7: "Blocks loaded with LearnBlock syntax"
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
LearnBlock.Msg["DELETE_VARIABLE"] = "Delete variable...";

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
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Delete %1 uses of the '%2' variable?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Delete %1 Blocks";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicate";
LearnBlock.Msg["REDO"] = "Redo";
LearnBlock.Msg["UNDO"] = "Undo";
