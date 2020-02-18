'use strict';

//Control blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "control_main",
    message0: "%{BKY_MAIN}",
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    colour: 60
}, {
    type: "control_if",
    message0: "%{BKY_IF} %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: null
    }],
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 60
}, {
    type: "control_elseif",
    message0: "%{BKY_ELSEIF} %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: null
    }],
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 60
}, {
    type: "control_else",
    message0: "%{BKY_ELSE}",
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 60
}, {
    type: "control_while",
    message0: "%{BKY_WHILE} %1",
    args0: [{
        type: "input_value",
        name: "WHILE",
        check: null
    }],
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 60
}, {
    type: "control_forever",
    message0: "%{BKY_FOREVER}",
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 60
}, {
    type: "control_time1",
    message0: "%{BKY_ELAPSED_TIME}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 100
}, {
    type: "control_time2",
    message0: "%{BKY_ELAPSED_TIME} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 100
}, {
    type: "control_wait",
    message0: "%{BKY_WAIT}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 230
}]);



//Operators blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "operator_add",
    message0: "+ %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_minus",
    message0: "- %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_mult",
    message0: "* %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_div",
    message0: "/ %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_eq",
    message0: "= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_booleq",
    message0: "== %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_sumeq",
    message0: "+= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_minuseq",
    message0: "-= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_multeq",
    message0: "*= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_diveq",
    message0: "/= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_true",
    message0: "%{BKY_TRUE}",
    output: null,
    colour: 230
}, {
    type: "operator_false",
    message0: "%{BKY_FALSE}",
    output: null,
    colour: 230
}, {
    type: "operator_lessthan",
    message0: "< %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_morethan",
    message0: "> %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_and",
    message0: "%{BKY_AND} %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_or",
    message0: "%{BKY_OR} %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_not",
    message0: "%{BKY_NOT} %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_parenthesisr",
    message0: ") %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}, {
    type: "operator_parenthesisl",
    message0: "( %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: null
    }],
    output: null,
    colour: 230
}]);



//Values blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "val_num1",
    message0: "%1",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: "Number",
    colour: 60
}, {
    type: "val_num2",
    message0: "%1 %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "VAL",
        check: null
    }],
    output: "Number",
    colour: 60
}, {
    type: "val_text1",
    message0: "%1",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "%{BKY_SAMPLE_TEXT}"
    }],
    output: "Text",
    colour: 60
}, {
    type: "val_text2",
    message0: "%1 %2",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "%{BKY_SAMPLE_TEXT}"
    }, {
        type: "input_value",
        name: "VAL",
        check: null
    }],
    output: "Text",
    colour: 60
}]);



//Variables blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "variables_set_dynamic",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    previousStatement: null,
    nextStatement: null,
    style: "variable_dynamic_blocks"
}, {
    type: "variables_get_dynamic",
    message0: "%1 %2",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VAR",
        check: null
    }],
    output: null,
    style: "variable_dynamic_blocks"
}, {
    type: "variables_get_dynamic2",
    message0: "%1",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }],
    output: null,
    style: "variable_dynamic_blocks"
}, {
    type: "variables_get_dynamic3",
    message0: "%1 %2",
    args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
    }, {
        type: "input_value",
        name: "VAR",
        check: null
    }],
    style: "variable_dynamic_blocks",
    previousStatement: null,
    nextStatement: null
}]);



//Emotions blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "emotion_neutral",
    message0: "%{BKY_EXPRESS_NEUTRAL}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_joy",
    message0: "%{BKY_EXPRESS_JOY}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_fear",
    message0: "%{BKY_EXPRESS_FEAR}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_sadness",
    message0: "%{BKY_EXPRESS_SADNESS}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_anger",
    message0: "%{BKY_EXPRESS_ANGER}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_disgust",
    message0: "%{BKY_EXPRESS_DISGUST}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_surprise",
    message0: "%{BKY_EXPRESS_SURPRISE}",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_isNeutral1",
    message0: "%{BKY_IS_NEUTRAL}",
    output: null,
    colour: 300
}, {
    type: "emotion_isNeutral2",
    message0: "%{BKY_IS_NEUTRAL} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isJoy1",
    message0: "%{BKY_IS_JOY}",
    output: null,
    colour: 300
}, {
    type: "emotion_isJoy2",
    message0: "%{BKY_IS_JOY} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isScared1",
    message0: "%{BKY_IS_FEAR}",
    output: null,
    colour: 300
}, {
    type: "emotion_isScared2",
    message0: "%{BKY_IS_FEAR} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isSad1",
    message0: "%{BKY_IS_SADNESS}",
    output: null,
    colour: 300
}, {
    type: "emotion_isSad2",
    message0: "%{BKY_IS_SADNESS} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isAngry1",
    message0: "%{BKY_IS_ANGER}",
    output: null,
    colour: 300
}, {
    type: "emotion_isAngry2",
    message0: "%{BKY_IS_ANGER} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isDisgust1",
    message0: "%{BKY_IS_DISGUST}",
    output: null,
    colour: 300
}, {
    type: "emotion_isDisgust2",
    message0: "%{BKY_IS_DISGUST} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isSurprised1",
    message0: "%{BKY_IS_SURPRISE}",
    output: null,
    colour: 300
}, {
    type: "emotion_isSurprised2",
    message0: "%{BKY_IS_SURPRISE} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}]);



//Speaker blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "speaker_text",
    message0: "%{BKY_SAY_SOMETHING}",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "%{BKY_SAMPLE_TEXT}"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "blue"
}]);



//Base blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "base_slowdown",
    message0: "%{BKY_SLOW_DOWN}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnright",
    message0: "%{BKY_TURN_RIGHT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnleft",
    message0: "%{BKY_TURN_LEFT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnback",
    message0: "%{BKY_TURN_BACK}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turn",
    message0: "%{BKY_TURN}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_setorientation",
    message0: "%{BKY_SET_ORIENTATION}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_resetorientation",
    message0: "%{BKY_RESET_ORIENTATION}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_stopbot",
    message0: "%{BKY_STOP_BOT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_setmove",
    message0: "%{BKY_SET_MOVE}",
    args0: [{
        type: "field_number",
        name: "NUM1",
        value: 0
    }, {
        type: "field_number",
        name: "NUM2",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_movestraight",
    message0: "%{BKY_MOVE_STRAIGHT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveright",
    message0: "%{BKY_MOVE_RIGHT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveleft",
    message0: "%{BKY_MOVE_LEFT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveleft1",
    message0: "%{BKY_IS_MOVING_LEFT}",
    output: null,
    colour: "red"
}, {
    type: "base_moveleft2",
    message0: "%{BKY_IS_MOVING_LEFT} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_moveright1",
    message0: "%{BKY_IS_MOVING_RIGHT}",
    output: null,
    colour: "red"
}, {
    type: "base_moveright2",
    message0: "%{BKY_IS_MOVING_RIGHT} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_movestraight1",
    message0: "%{BKY_IS_MOVING_STRAIGHT}",
    output: null,
    colour: "red"
}, {
    type: "base_movestraight2",
    message0: "%{BKY_IS_MOVING_STRAIGHT} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turnleft1",
    message0: "%{BKY_IS_TURNING_LEFT}",
    output: null,
    colour: "red"
}, {
    type: "base_turnleft2",
    message0: "%{BKY_IS_TURNING_LEFT} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turnright1",
    message0: "%{BKY_IS_TURNING_RIGHT}",
    output: null,
    colour: "red"
}, {
    type: "base_turnright2",
    message0: "%{BKY_IS_TURNING_RIGHT} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turn1",
    message0: "%{BKY_IS_TURNING}",
    output: null,
    colour: "red"
}, {
    type: "base_turn2",
    message0: "%{BKY_IS_TURNING} %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}]);



//Motor blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "motor_floor",
    message0: "%{BKY_LOOK_FLOOR}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_up",
    message0: "%{BKY_LOOK_UP}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_front",
    message0: "%{BKY_LOOK_FRONT}",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_anglecamera",
    message0: "%{BKY_SET_ANGLE_CAMERA}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_anglemotor",
    message0: "%{BKY_SET_ANGLE_MOTOR}",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "key"
    }, {
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}]);



//Camera blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "cam_centerred1",
    message0: "%{BKY_IS_CENTER_RED_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_centerred2",
    message0: "%{BKY_IS_CENTER_RED_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftred1",
    message0: "%{BKY_IS_LEFT_RED_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_leftred2",
    message0: "%{BKY_IS_LEFT_RED_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightred1",
    message0: "%{BKY_IS_RIGHT_RED_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_rightred2",
    message0: "%{BKY_IS_RIGHT_RED_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isred1",
    message0: "%{BKY_IS_THERE_RED_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_isred2",
    message0: "%{BKY_IS_THERE_RED_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_centerblack1",
    message0: "%{BKY_IS_CENTER_BLACK_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_centerblack2",
    message0: "%{BKY_IS_CENTER_BLACK_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftblack1",
    message0: "%{BKY_IS_LEFT_BLACK_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_leftblack2",
    message0: "%{BKY_IS_LEFT_BLACK_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightblack1",
    message0: "%{BKY_IS_RIGHT_BLACK_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_rightblack2",
    message0: "%{BKY_IS_RIGHT_BLACK_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isblack1",
    message0: "%{BKY_IS_THERE_BLACK_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_isblack2",
    message0: "%{BKY_IS_THERE_BLACK_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_centerblue1",
    message0: "%{BKY_IS_CENTER_BLUE_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_centerblue2",
    message0: "%{BKY_IS_CENTER_BLUE_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftblue1",
    message0: "%{BKY_IS_LEFT_BLUE_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_leftblue2",
    message0: "%{BKY_IS_LEFT_BLUE_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightblue1",
    message0: "%{BKY_IS_RIGHT_BLUE_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_rightblue2",
    message0: "%{BKY_IS_RIGHT_BLUE_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isblue1",
    message0: "%{BKY_IS_THERE_BLUE_LINE}",
    output: null,
    colour: 0
}, {
    type: "cam_isblue2",
    message0: "%{BKY_IS_THERE_BLUE_LINE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceleft1",
    message0: "%{BKY_IS_LEFT_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_faceleft2",
    message0: "%{BKY_IS_LEFT_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceright1",
    message0: "%{BKY_IS_RIGHT_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_faceright2",
    message0: "%{BKY_IS_RIGHT_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceup1",
    message0: "%{BKY_IS_UP_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_faceup2",
    message0: "%{BKY_IS_UP_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facedown1",
    message0: "%{BKY_IS_DOWN_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_facedown2",
    message0: "%{BKY_IS_DOWN_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facecenter1",
    message0: "%{BKY_IS_CENTER_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_facecenter2",
    message0: "%{BKY_IS_CENTER_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isface1",
    message0: "%{BKY_IS_THERE_FACE}",
    output: null,
    colour: 0
}, {
    type: "cam_isface2",
    message0: "%{BKY_IS_THERE_FACE} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_linecross1",
    message0: "%{BKY_IS_LINE_CROSSING}",
    output: null,
    colour: 0
}, {
    type: "cam_linecross2",
    message0: "%{BKY_IS_LINE_CROSSING} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facehappy1",
    message0: "%{BKY_IS_ANY_FACE_HAPPY}",
    output: null,
    colour: 0
}, {
    type: "cam_facehappy2",
    message0: "%{BKY_IS_ANY_FACE_HAPPY} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceangry1",
    message0: "%{BKY_IS_ANY_FACE_ANGRY}",
    output: null,
    colour: 0
}, {
    type: "cam_faceangry2",
    message0: "%{BKY_IS_ANY_FACE_ANGRY} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceneutral1",
    message0: "%{BKY_IS_ANY_FACE_NEUTRAL}",
    output: null,
    colour: 0
}, {
    type: "cam_faceneutral2",
    message0: "%{BKY_IS_ANY_FACE_NEUTRAL} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facesad1",
    message0: "%{BKY_IS_ANY_FACE_SAD}",
    output: null,
    colour: 0
}, {
    type: "cam_facesad2",
    message0: "%{BKY_IS_ANY_FACE_SAD} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facesurprised1",
    message0: "%{BKY_IS_ANY_FACE_SURPRISED}",
    output: null,
    colour: 0
}, {
    type: "cam_facesurprised2",
    message0: "%{BKY_IS_ANY_FACE_SURPRISED} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_istag1",
    message0: "%{BKY_IS_TAG}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 0
}, {
    type: "cam_istag2",
    message0: "%{BKY_IS_TAG} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isanytag1",
    message0: "%{BKY_IS_ANY_TAG}",
    output: null,
    colour: 0
}, {
    type: "cam_isanytag2",
    message0: "%{BKY_IS_ANY_TAG} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagleft1",
    message0: "%{BKY_TAG_ON_THE_LEFT}",
    output: null,
    colour: 0
}, {
    type: "cam_tagleft2",
    message0: "%{BKY_TAG_ON_THE_LEFT} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagright1",
    message0: "%{BKY_TAG_ON_THE_RIGHT}",
    output: null,
    colour: 0
}, {
    type: "cam_tagright2",
    message0: "%{BKY_TAG_ON_THE_RIGHT} %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagcenter1",
    message0: "%{BKY_TAG_ON_THE_CENTER}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagcenter2",
    message0: "%{BKY_TAG_ON_THE_CENTER} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_image1",
    message0: "%{BKY_IS_IMAGE}",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "img"
    }],
    output: null,
    colour: 0
}, {
    type: "cam_image2",
    message0: "%{BKY_IS_IMAGE} %2",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "img"
    }, {
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}]);



//Distance blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "dist_front1",
    message0: "%{BKY_IS_FRONT_OBSTACLE}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_front2",
    message0: "%{BKY_IS_FRONT_OBSTACLE} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_left1",
    message0: "%{BKY_IS_LEFT_OBSTACLE}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_left2",
    message0: "%{BKY_IS_LEFT_OBSTACLE} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_right1",
    message0: "%{BKY_IS_RIGHT_OBSTACLE}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_right2",
    message0: "%{BKY_IS_RIGHT_OBSTACLE} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_free1",
    message0: "%{BKY_IS_OBSTACLE_FREE}",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_free2",
    message0: "%{BKY_IS_OBSTACLE_FREE} %2",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_mindist1",
    message0: "%{BKY_GET_MIN_DISTANCE}",
    args0: [{
        type: "field_dropdown",
        name: "BOOL0",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL1",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL2",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_mindist2",
    message0: "%{BKY_GET_MIN_DISTANCE} %4",
    args0: [{
        type: "field_dropdown",
        name: "BOOL0",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL1",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL2",
        options: [["%{BKY_TRUE}", "TRUE"], ["%{BKY_FALSE}", "FALSE"]]
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}]);



//Ground blocks
LearnBlock.defineBlocksWithJsonArray([{
    type: "ground_thereis1",
    message0: "%{BKY_IS_THERE_GROUND}",
    output: null,
    colour: 0
}, {
    type: "ground_thereis2",
    message0: "%{BKY_IS_THERE_GROUND} %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_center1",
    message0: "%{BKY_IS_CENTER_GROUND_LINE}",
    output: null,
    colour: 0
}, {
    type: "ground_center2",
    message0: "%{BKY_IS_CENTER_GROUND_LINE} %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_right1",
    message0: "%{BKY_IS_RIGHT_GROUND_LINE}",
    output: null,
    colour: 0
}, {
    type: "ground_right2",
    message0: "%{BKY_IS_RIGHT_GROUND_LINE} %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_left1",
    message0: "%{BKY_IS_LEFT_GROUND_LINE}",
    output: null,
    colour: 0
}, {
    type: "ground_left2",
    message0: "%{BKY_IS_LEFT_GROUND_LINE} %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}]);



//Procedures functions
LearnBlock.Blocks.procedures = {};
LearnBlock.Blocks.procedures_defnoreturn = {
    init: function () {
        var a = new LearnBlock.FieldTextInput("", LearnBlock.Procedures.rename);
        this.appendDummyInput().appendField("Function").appendField(a, "NAME").appendField("", "PARAMS");
        this.setStyle("procedure_blocks");
        this.setStatements_(!0);
        this.statementConnection_ = null;
    },
    setStatements_: function (a) {
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(LearnBlock.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = a)
    },
    getProcedureDef: function () {
        return [this.getFieldValue("NAME"), !1]
    },
    callType_: "procedures_callnoreturn"
};
LearnBlock.Blocks.procedures_callnoreturn = {
    init: function () {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setStyle("procedure_blocks");
    },
    getProcedureCall: function () {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function (a, b) {
        LearnBlock.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, "NAME"))
    },
    mutationToDom: function () {
        var a = LearnBlock.utils.xml.createElement("mutation");
        a.setAttribute("name", this.getProcedureCall());
        return a
    },
    domToMutation: function (a) {
        var b = a.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), b);
    },
    onchange: function (a) {
        if (this.workspace &&
            !this.workspace.isFlyout && a.recordUndo)
            if (a.type == LearnBlock.Events.BLOCK_CREATE && -1 != a.ids.indexOf(this.id)) {
                var b = this.getProcedureCall();
                b = LearnBlock.Procedures.getDefinition(b, this.workspace);
                !b || b.type == this.defType_ && JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_) || (b = null);
                if (!b) {
                    LearnBlock.Events.setGroup(a.group);
                    a = LearnBlock.utils.xml.createElement("xml");
                    b = LearnBlock.utils.xml.createElement("block");
                    b.setAttribute("type", this.defType_);
                    var c = this.getRelativeToSurfaceXY(),
                        d = c.y + 2 * LearnBlock.SNAP_RADIUS;
                    b.setAttribute("x", c.x + LearnBlock.SNAP_RADIUS * (this.RTL ? -1 : 1));
                    b.setAttribute("y", d);
                    c = this.mutationToDom();
                    b.appendChild(c);
                    c = LearnBlock.utils.xml.createElement("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(LearnBlock.utils.xml.createTextNode(this.getProcedureCall()));
                    b.appendChild(c);
                    a.appendChild(b);
                    LearnBlock.Xml.domToWorkspace(a, this.workspace);
                    LearnBlock.Events.setGroup(!1)
                }
            } else a.type == LearnBlock.Events.BLOCK_DELETE ? (b = this.getProcedureCall(), b = LearnBlock.Procedures.getDefinition(b, this.workspace), b || (LearnBlock.Events.setGroup(a.group),
                this.dispose(!0, !1), LearnBlock.Events.setGroup(!1))) : a.type == LearnBlock.Events.CHANGE && "disabled" == a.element && (b = this.getProcedureCall(), (b = LearnBlock.Procedures.getDefinition(b, this.workspace)) && b.id == a.blockId && ((b = LearnBlock.Events.getGroup()) && console.log("Saw an existing group while responding to a definition change"), LearnBlock.Events.setGroup(a.group), a.newValue ? (this.previousEnabledState_ = this.isEnabled(), this.setEnabled(!1)) : this.setEnabled(this.previousEnabledState_), LearnBlock.Events.setGroup(b)))
    },
    defType_: "procedures_defnoreturn"
};
