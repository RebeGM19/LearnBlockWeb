'use strict';

//Messages
var MSG = {
    sup: "Upper Zone",
    newblock: "Create New Block",
    execute: "Execute"
};

//Blocks
function loadEnglish(languagesBlocks){
    for (var i=0; i<languagesBlocks.length; i++){
        LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][2];
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


//Operator Blocks
LearnBlock.Msg["TRUE"] = "true";
LearnBlock.Msg["FALSE"] = "false";
LearnBlock.Msg["AND"] = "and";
LearnBlock.Msg["OR"] = "or";
LearnBlock.Msg["NOT"] = "not";

//Text Block
LearnBlock.Msg["SAMPLE_TEXT"] = "Hello_World";

//Variables Block
LearnBlock.Msg["VARIABLES_SET"] = "set %1 to %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_NUMBER_VARIABLE"] = "Create number variable...";
LearnBlock.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";

//Functions Blocks
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "do_something";

//Emotions Blocks
LearnBlock.Msg["EXPRESS_NEUTRAL"] = "express_Neutral()";
LearnBlock.Msg["EXPRESS_JOY"] = "express_Joy()";
LearnBlock.Msg["EXPRESS_FEAR"] = "express_Fear()";
LearnBlock.Msg["EXPRESS_SADNESS"] = "express_Sadness()";
LearnBlock.Msg["EXPRESS_ANGER"] = "express_Anger()";
LearnBlock.Msg["EXPRESS_DISGUST"] = "express_Disgust()";
LearnBlock.Msg["EXPRESS_SURPRISE"] = "express_Surprise()";
LearnBlock.Msg["IS_NEUTRAL"] = "is_Neutral()";
LearnBlock.Msg["IS_JOY"] = "is_Joy()";
LearnBlock.Msg["IS_FEAR"] = "is_Scared()";
LearnBlock.Msg["IS_SADNESS"] = "is_Sad()";
LearnBlock.Msg["IS_ANGER"] = "is_Angry()";
LearnBlock.Msg["IS_DISGUST"] = "is_Disgust()";
LearnBlock.Msg["IS_SURPRISE"] = "is_Surprised()";

//Speaker Block
LearnBlock.Msg["SAY_SOMETHING"] = "say_text(%1)";

//Base Blocks
LearnBlock.Msg["SLOW_DOWN"] = "slow_down()";
LearnBlock.Msg["TURN_RIGHT"] = "turn_right()";
LearnBlock.Msg["TURN_LEFT"] = "turn_left()";
LearnBlock.Msg["TURN_BACK"] = "turn_back()";
LearnBlock.Msg["TURN"] = "turn(%1)";
LearnBlock.Msg["SET_ORIENTATION"] = "set_orientation(%1)";
LearnBlock.Msg["RESET_ORIENTATION"] = "reset_orientation()";
LearnBlock.Msg["STOP_BOT"] = "stop_bot()";
LearnBlock.Msg["SET_MOVE"] = "set_move(%1, %2)";
LearnBlock.Msg["MOVE_STRAIGHT"] = "move_straight()";
LearnBlock.Msg["MOVE_RIGHT"] = "move_right()";
LearnBlock.Msg["MOVE_LEFT"] = "move_left()";
LearnBlock.Msg["IS_MOVING_LEFT"] = "is_moving_left()";
LearnBlock.Msg["IS_MOVING_RIGHT"] = "is_moving_right()";
LearnBlock.Msg["IS_MOVING_STRAIGHT"] = "is_moving_straight()";
LearnBlock.Msg["IS_TURNING_LEFT"] = "is_turning_left()";
LearnBlock.Msg["IS_TURNING_RIGHT"] = "is_turning_right()";
LearnBlock.Msg["IS_TURNING"] = "is_turning()";

//Motor Blocks
LearnBlock.Msg["LOOK_FLOOR"] = "look_floor()";
LearnBlock.Msg["LOOK_UP"] = "look_up()";
LearnBlock.Msg["LOOK_FRONT"] = "look_front()";
LearnBlock.Msg["SET_ANGLE_CAMERA"] = "setAngleCamera(%1)";
LearnBlock.Msg["SET_ANGLE_MOTOR"] = "setAngleMotor(%1, %2)";

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




