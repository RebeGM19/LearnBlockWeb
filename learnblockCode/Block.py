from __future__ import print_function, absolute_import
import copy

import cv2
import numpy as np

TOP = 0
BOTTOM = 1
BOTTOMIN = -1
RIGHT = 3
LEFT = 4

SIMPLEBLOCK = 1
COMPLEXBLOCK = 2

OPERATOR = 0
CONTROL = 1
FUNTION = 2
VARIABLE = 3
USERFUNCTION = 4
WHEN = 5
LIBRARY = 6
