'use strict';

//Bloques control
LearnBlock.defineBlocksWithJsonArray([{
    type: "control_main",
    message0: "main",
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    colour: 60
}, {
    type: "control_if",
    message0: "if %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: "Boolean"
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
    message0: "else if %1",
    args0: [{
        type: "input_value",
        name: "IF",
        check: "Boolean"
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
    message0: "else",
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
    message0: "while %1",
    args0: [{
        type: "input_value",
        name: "WHILE",
        check: "Boolean"
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
    message0: "forever",
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
    message0: "elapsed_Time(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 100
}, {
    type: "control_time2",
    message0: "elapsed_Time(%1) %2",
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
    message0: "wait(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    previousStatement: null,
    nextStatement: null,
    colour: 230
}]);



//Bloques operadores
LearnBlock.defineBlocksWithJsonArray([{
    type: "operator_add",
    message0: "+ %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_minus",
    message0: "- %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_mult",
    message0: "* %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_div",
    message0: "/ %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_eq",
    message0: "= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_booleq",
    message0: "== %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_sumeq",
    message0: "+= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_minuseq",
    message0: "-= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_multeq",
    message0: "*= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_diveq",
    message0: "/= %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_true",
    message0: "true",
    output: "Boolean",
    colour: 230
}, {
    type: "operator_false",
    message0: "false",
    output: "Boolean",
    style: "math_blocks"
}, {
    type: "operator_lessthan",
    message0: "< %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_morethan",
    message0: "> %1",
    args0: [{
        type: "input_value",
        name: "NUM",
        check: "Number"
    }],
    output: "Number",
    colour: 230
}, {
    type: "operator_and",
    message0: "and %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    output: "Boolean",
    colour: 230
}, {
    type: "operator_or",
    message0: "or %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    output: "Boolean",
    colour: 230
}, {
    type: "operator_not",
    message0: "not %1",
    args0: [{
        type: "input_value",
        name: "BOOL",
        check: "Boolean"
    }],
    output: "Boolean",
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



//Bloques valores
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
        text: "Hello World!"
    }],
    output: "Text",
    colour: 60
}, {
    type: "val_text2",
    message0: "%1 %2",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "Hello World!"
    }, {
        type: "input_value",
        name: "VAL",
        check: null
    }],
    output: "Text",
    colour: 60
}]);



//Bloques variables
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



//Bloques emociones
LearnBlock.defineBlocksWithJsonArray([{
    type: "emotion_neutral",
    message0: "express_Neutral()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_joy",
    message0: "express_Joy()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_fear",
    message0: "express_Fear()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_sadness",
    message0: "express_Sadness()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_anger",
    message0: "express_Anger()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_disgust",
    message0: "express_Disgust()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_surprise",
    message0: "express_Surprise()",
    previousStatement: null,
    nextStatement: null,
    colour: 0
}, {
    type: "emotion_isNeutral1",
    message0: "is_Neutral()",
    output: null,
    colour: 300
}, {
    type: "emotion_isNeutral2",
    message0: "is_Neutral() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isJoy1",
    message0: "is_Joy()",
    output: null,
    colour: 300
}, {
    type: "emotion_isJoy2",
    message0: "is_Joy() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isScared1",
    message0: "is_Scared()",
    output: null,
    colour: 300
}, {
    type: "emotion_isScared2",
    message0: "is_Scared() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isSad1",
    message0: "is_Sad()",
    output: null,
    colour: 300
}, {
    type: "emotion_isSad2",
    message0: "is_Sad() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isAngry1",
    message0: "is_Angry()",
    output: null,
    colour: 300
}, {
    type: "emotion_isAngry2",
    message0: "is_Angry() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isDisgust1",
    message0: "is_Disgust()",
    output: null,
    colour: 300
}, {
    type: "emotion_isDisgust2",
    message0: "is_Disgust() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}, {
    type: "emotion_isSurprised1",
    message0: "is_Surprised()",
    output: null,
    colour: 300
}, {
    type: "emotion_isSurprised2",
    message0: "is_Surprised() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: 300
}]);



//Bloques speaker
LearnBlock.defineBlocksWithJsonArray([{
    type: "speaker_text",
    message0: "say_text(%1)",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "Hello World!"
    }],
    previousStatement: null,
    nextStatement: null,
    colour: "blue"
}]);



//Bloques base
LearnBlock.defineBlocksWithJsonArray([{
    type: "base_slowdown",
    message0: "slow_down()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnright",
    message0: "turn_right()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnleft",
    message0: "turn_left()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turnback",
    message0: "turn_back()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_turn",
    message0: "turn(%1)",
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
    message0: "set_orientation(%1)",
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
    message0: "reset_orientation()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_stopbot",
    message0: "stop_bot()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_setmove",
    message0: "set_move(%1, %2)",
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
    message0: "move_straight()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveright",
    message0: "move_right()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveleft",
    message0: "move_left()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "base_moveleft1",
    message0: "is_moving_left()",
    output: null,
    colour: "red"
}, {
    type: "base_moveleft2",
    message0: "is_moving_left() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_moveright1",
    message0: "is_moving_right()",
    output: null,
    colour: "red"
}, {
    type: "base_moveright2",
    message0: "is_moving_right() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_movestraight1",
    message0: "is_moving_straight()",
    output: null,
    colour: "red"
}, {
    type: "base_movestraight2",
    message0: "is_moving_straight() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turnleft1",
    message0: "is_turning_left()",
    output: null,
    colour: "red"
}, {
    type: "base_turnleft2",
    message0: "is_turning_left() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turnright1",
    message0: "is_turning_left()",
    output: null,
    colour: "red"
}, {
    type: "base_turnright2",
    message0: "is_turning_left() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}, {
    type: "base_turn1",
    message0: "is_turning()",
    output: null,
    colour: "red"
}, {
    type: "base_turn2",
    message0: "is_turning() %1",
    args0: [{
        type: "input_value",
        name: "EMOTION",
        check: null
    }],
    output: null,
    colour: "red"
}]);



//Bloques motor
LearnBlock.defineBlocksWithJsonArray([{
    type: "motor_floor",
    message0: "look_floor()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_up",
    message0: "look_up()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_front",
    message0: "look_front()",
    previousStatement: null,
    nextStatement: null,
    colour: "green"
}, {
    type: "motor_anglecamera",
    message0: "setAngleCamera(%1)",
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
    message0: "setAngleMotor(%1, %2)",
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



//Bloques camara
LearnBlock.defineBlocksWithJsonArray([{
    type: "cam_centerred1",
    message0: "is_center_red_line()",
    output: null,
    colour: 0
}, {
    type: "cam_centerred2",
    message0: "is_center_red_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftred1",
    message0: "is_left_red_line()",
    output: null,
    colour: 0
}, {
    type: "cam_leftred2",
    message0: "is_left_red_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightred1",
    message0: "is_right_red_line()",
    output: null,
    colour: 0
}, {
    type: "cam_rightred2",
    message0: "is_right_red_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isred1",
    message0: "is_there_red_line()",
    output: null,
    colour: 0
}, {
    type: "cam_isred2",
    message0: "is_there_red_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_centerblack1",
    message0: "is_center_black_line()",
    output: null,
    colour: 0
}, {
    type: "cam_centerblack2",
    message0: "is_center_black_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftblack1",
    message0: "is_left_black_line()",
    output: null,
    colour: 0
}, {
    type: "cam_leftblack2",
    message0: "is_left_black_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightblack1",
    message0: "is_right_black_line()",
    output: null,
    colour: 0
}, {
    type: "cam_rightblack2",
    message0: "is_right_black_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isblack1",
    message0: "is_there_black_line()",
    output: null,
    colour: 0
}, {
    type: "cam_isblack2",
    message0: "is_there_black_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_centerblue1",
    message0: "is_center_blue_line()",
    output: null,
    colour: 0
}, {
    type: "cam_centerblue2",
    message0: "is_center_blue_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_leftblue1",
    message0: "is_left_blue_line()",
    output: null,
    colour: 0
}, {
    type: "cam_leftblue2",
    message0: "is_left_blue_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_rightblue1",
    message0: "is_right_blue_line()",
    output: null,
    colour: 0
}, {
    type: "cam_rightblue2",
    message0: "is_right_blue_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isblue1",
    message0: "is_there_blue_line()",
    output: null,
    colour: 0
}, {
    type: "cam_isblue2",
    message0: "is_there_blue_line() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceleft1",
    message0: "is_left_face()",
    output: null,
    colour: 0
}, {
    type: "cam_faceleft2",
    message0: "is_left_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceright1",
    message0: "is_right_face()",
    output: null,
    colour: 0
}, {
    type: "cam_faceright2",
    message0: "is_right_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceup1",
    message0: "is_up_face()",
    output: null,
    colour: 0
}, {
    type: "cam_faceup2",
    message0: "is_up_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facedown1",
    message0: "is_down_face()",
    output: null,
    colour: 0
}, {
    type: "cam_facedown2",
    message0: "is_down_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facecenter1",
    message0: "is_center_face()",
    output: null,
    colour: 0
}, {
    type: "cam_facecenter2",
    message0: "is_center_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_isface1",
    message0: "is_there_face()",
    output: null,
    colour: 0
}, {
    type: "cam_isface2",
    message0: "is_there_face() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_linecross1",
    message0: "is_line_crossing()",
    output: null,
    colour: 0
}, {
    type: "cam_linecross2",
    message0: "is_line_crossing() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facehappy1",
    message0: "is_any_face_happy()",
    output: null,
    colour: 0
}, {
    type: "cam_facehappy2",
    message0: "is_any_face_happy() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceangry1",
    message0: "is_any_face_angry()",
    output: null,
    colour: 0
}, {
    type: "cam_faceangry2",
    message0: "is_any_face_angry() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_faceneutral1",
    message0: "is_any_face_neutral()",
    output: null,
    colour: 0
}, {
    type: "cam_faceneutral2",
    message0: "is_any_face_neutral() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facesad1",
    message0: "is_any_face_sad()",
    output: null,
    colour: 0
}, {
    type: "cam_facesad2",
    message0: "is_any_face_sad() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_facesurprised1",
    message0: "is_any_face_surprised()",
    output: null,
    colour: 0
}, {
    type: "cam_facesurprised2",
    message0: "is_any_face_surprised() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_istag1",
    message0: "is_tag(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 0
}, {
    type: "cam_istag2",
    message0: "is_tag(%1) %2",
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
    message0: "is_any_tag()",
    output: null,
    colour: 0
}, {
    type: "cam_isanytag2",
    message0: "is_any_tag() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagleft1",
    message0: "tag_on_the_left()",
    output: null,
    colour: 0
}, {
    type: "cam_tagleft2",
    message0: "tag_on_the_left() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagright1",
    message0: "tag_on_the_right()",
    output: null,
    colour: 0
}, {
    type: "cam_tagright2",
    message0: "tag_on_the_right() %1",
    args0: [{
        type: "input_value",
        name: "CAM",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagcenter1",
    message0: "tag_on_the_center(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: 0
}, {
    type: "cam_tagcenter2",
    message0: "tag_on_the_center(%1) %2",
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
    message0: "is_image(%1)",
    args0: [{
        type: "field_input",
        name: "TEXT",
        text: "img"
    }],
    output: null,
    colour: 0
}, {
    type: "cam_image2",
    message0: "is_image(%1) %2",
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



//Bloques distancia
LearnBlock.defineBlocksWithJsonArray([{
    type: "dist_front1",
    message0: "is_front_obstacle(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_front2",
    message0: "is_front_obstacle(%1) %2",
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
    message0: "is_left_obstacle(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_left2",
    message0: "is_left_obstacle(%1) %2",
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
    message0: "is_right_obstacle(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_right2",
    message0: "is_right_obstacle(%1) %2",
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
    message0: "is_obstacle_free(%1)",
    args0: [{
        type: "field_number",
        name: "NUM",
        value: 0
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_free2",
    message0: "is_obstacle_free(%1) %2",
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
    message0: "get_min_distance(%1, %2, %3)",
    args0: [{
        type: "field_dropdown",
        name: "BOOL0",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL1",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL2",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }],
    output: null,
    colour: "blue"
}, {
    type: "dist_mindist2",
    message0: "get_min_distance(%1, %2, %3) %4",
    args0: [{
        type: "field_dropdown",
        name: "BOOL0",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL1",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }, {
        type: "field_dropdown",
        name: "BOOL2",
        options: [["true", "TRUE"], ["false", "FALSE"]]
    }, {
        type: "input_value",
        name: "DIST",
        check: null
    }],
    output: null,
    colour: "blue"
}]);



//Bloques suelo
LearnBlock.defineBlocksWithJsonArray([{
    type: "ground_thereis1",
    message0: "is_there_ground()",
    output: null,
    colour: 0
}, {
    type: "ground_thereis2",
    message0: "is_there_ground() %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_center1",
    message0: "is_center_ground_line()",
    output: null,
    colour: 0
}, {
    type: "ground_center2",
    message0: "is_center_ground_line() %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_right1",
    message0: "is_right_ground_line()",
    output: null,
    colour: 0
}, {
    type: "ground_right2",
    message0: "is_right_ground_line() %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}, {
    type: "ground_left1",
    message0: "is_left_ground_line()",
    output: null,
    colour: 0
}, {
    type: "ground_left2",
    message0: "is_left_ground_line() %1",
    args0: [{
        type: "input_value",
        name: "GROUND",
        check: null
    }],
    output: null,
    colour: 0
}]);



//Funciones procedimientos
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
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(LearnBlock.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ =
            a)
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
        LearnBlock.Names.equals(a,
            this.getProcedureCall()) && (this.setFieldValue(b, "NAME"), this.setTooltip((this.outputConnection ? LearnBlock.Msg.PROCEDURES_CALLRETURN_TOOLTIP : LearnBlock.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)))
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
