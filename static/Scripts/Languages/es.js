'use strict';

//Mensajes
var MSG = {
    tSelectRobot: "Robot: ",
    tSelectLang: "Idioma: ",
    execute: "Bloques a Texto",
    executeBT: "Block-Text a Python",
    home: "Página principal",
    guide: "Guía de uso",
    whatLB: "Sobre LearnBlock",
    whatLBW: "Sobre LearnBlockWeb",
    details: "Detalles",
    codeGenerated: "¡Código generado!",
    codePyNotGenerated: "No se pudo generar el código Python",
    codeBTNotGenerated: "No se pudo generar el código Block-Text",
    copyCodeBT: "Copiar código",
    copyCodePY: "Copiar código",
    saveCodeBT: "Descargar código",
    saveCodePY: "Descargar código",
    programPY: "Programa Python",
    programBT: "Programa Block-Text",
    programLB: "Programa LearnBlock",

    titleHowTo: "Guía de uso",
    titleAboutLB: "¿Qué es LearnBlock?",
    titleAboutLBW: "¿Qué es LearnBlockWeb?",
    titleDetails: "Detalles de la web",

    HT1: "Comienza cogiendo los bloques de la parte izquierda de la página y arrástralos hacia la zona gris. Verás que algunos bloques encajan con otros como si fueran un puzzle. Cada bloque equivale a una estructura o una función de los lenguajes de programación profesionales, y están divididos en diferentes categorías según lo que representan.",
    HT2: "¡Prueba a unir los bloques según las formas que tengan y construye un programa tú mismo!",
    HT3: "Cuando tengas tu programa terminado, haz click en el botón \"Bloques a Texto\" para generar el código equivalente. Si haces click en las pestañas \"Block-Text\" y \"Python\" verás el código generado, y si haces click en \"LearnBlock\" volverás a la interfaz de los bloques.",
    HT4: "Si alguno de los dos códigos no se genera, es porque hay algún fallo en tu programa. ¡Dale una vuelta! Cambia bloques de sitio, borra algunos o añade otros nuevos. Pista: Todos los programas deben tener un único bloque principal (main).",
    HT5: "Si entiendes y has aprendido el código Block-Text, puedes escribirlo tú mismo en la pestaña \"Block-Text\" y generar el código Python equivalente haciendo click en el botón \"Block-Text a Python\".",
    HT6: "Manejo LearnBlock:",
    HT7: "Click izquierdo mantenido sobre un bloque: Arrastrar bloque",
    HT8: "Click izquierdo mantenido sobre la zona gris: Desplazarse por la zona gris",
    HT9: "Click izquierdo sobre la zona resaltada de un bloque: Editar parámetros del bloque",
    HT10: "Click derecho sobre un bloque: Borrar bloque, duplicar bloque",
    HT11: "Click derecho sobre la zona gris: Borrar todos los bloques, deshacer acción, rehacer acción",

    aLB1: "LearnBlock es una herramienta educacional de programación que proporciona un lenguaje visual de bloques a través del cual los usuarios pueden programar de forma intuitiva los comportamientos de un robot y trabajar con diferentes plataformas robóticas. Junto a LearnBlock, se ha construido un robot llamado EBO. Ambos, LearnBlock y EBO, son proyectos abiertos.",
    aLB2: "LearnBlock proporciona una interfaz de usuario gráfica con las opciones necesarias para crear un programa utilizando elementos gráficos (bloques). Así, el usuario puede construir un programa seleccionando y conectando diferentes bloques relacionados con el control del programa, acciones e información sensorial, entre otros. Además, el conjunto de bloques a usar puede ser configurado desde la propia herramienta para permitir al usuario seleccionar los tipos de bloques visibles más apropiados para un problema particular. Los bloques también pueden ser creados apartir de otros bloques para encapsular y reutilizar ciertas piezas del código.",
    aLB3: "Todas estas características están disponibles en la mayoría de herramientas ya existentes, pero LearnBlock también soporta la creación de bloques individuales desde código. En LearnBlock, el usuario puede escribir directamente el código en el lenguaje final, especificando las partes que deben ser ejecutadas cuando el flujo del programa llega hasta ese punto.",
    aLB4: "Respecto a la generación de código, LearnBlock genera código Python desde una representación textual del programa visual (programa basado en bloques). El código generado puede ser visto y modificado. De esta manera, el usuario puede elegir cuándo crear un programa desde los bloques, desde la representación textual de bloques, o directamente codificar en Python. Desde una perspectiva educacional, LearnBlock proporciona un entorno integrado para aprender a programar donde se introducen conceptos más complejos de forma incremental, avanzando así de forma progresiva hasta un lenguaje de programación profesional.",
    aLB5: "LearnBlock permite que el mismo código sea utilizado para programar diferentes robots. La novedad en este sentido es que esta propiedad se garantiza no sólo para el código visual, sino también para el generado.",
    aLB6: "Entre otras características, LearnBlock incluye lo siguiente:",
    aLB7: "Disponible para distintos robots físicos (EBO, Cozmo, Thymio y EV3) y simulados (EBO bajo RCIS y EV3 bajo V-REP).",
    aLB8: "Los robots pueden ser programados usando diferentes lenguajes: lenguaje visual, Block-Text (representación textual del lenguaje visual) y Python.",
    aLB9: "Se pueden crear nuevos bloques a partir de código (Python) usando la propia herramienta o herramientas externas.",
    aLB10: "Un programa puede ser ejecutado y detenido en cualquier momento. Cuando el programa es interrumpido, el robot se detiene y se desconecta.",
    aLB11: "Artículo de Investigación LearnBlock",
    aLB12: "Repositorio Git de LearnBlock",

    aLBW1: "LearnBlockWeb es una versión online del proyecto LearnBlock. Ha sido diseñada para que la idea del proyecto LearnBlock tenga un mayor alcance y parte de su funcionalidad pueda ser utilizada por cualquier persona, independientemente de las características y potencia de su equipo o del sistema operativo que tenga instalado en él. Lo único que necesita es tener acceso a internet.",
    aLBW2: "LearnBlock presenta tres funcionalidades principales: Programación en bloques, generación de código y ejecución del código. De esas tres, LearnBlockWeb abarca las dos primeras.",
    aLBW3: "Con estas dos funcionalidades se cubre la parte de aprendizaje de programación progresivo. De esta manera, el usuario comienza programando prácticamente de forma intuitiva con un lenguaje de programación visual (bloques), pasa por la representación textual equivalente (Block-Text) y termina en un lenguaje de programación profesional comunmente utilizado hoy en día (Python).",
    aLBW4: "LearnBlockWeb está en desarrollo.",
    aLBW5: "Repositorio Git de LearnBlockWeb",

    det1: "Estructurado y diseñado con HTML, CSS y JavaScript",
    det2: "Utilización de la biblioteca Bootstrap",
    det3: "Uso de la librería Blockly para la interacción del lenguaje visual (bloques)",
    det4: "Desarrollado en Python 3",
    det5: "Ejecutado con Flask",
    det6: "Uso del propio código de LearnBlock para la generación de código",
    det7: "Carga de bloques con la sintaxis de LearnBlock"
};

//Bloques
function loadSpanish(languagesBlocks){
    if (languagesBlocks != null){
        for (var i=0; i<languagesBlocks.length; i++){
            LearnBlock.Msg[languagesBlocks[i][0]] = languagesBlocks[i][1];
        }
    }
}

//Bloque Texto
LearnBlock.Msg["SAMPLE_TEXT"] = "texto";

//Bloques Variables
LearnBlock.Msg["VARIABLES_SET"] = "poner %1 a %2";
LearnBlock.Msg["VARIABLES_DEFAULT_NAME"] = "item";
LearnBlock.Msg["NEW_VARIABLE"] = "Crear variable...";
LearnBlock.Msg["DELETE_VARIABLE"] = "Borrar variable...";

//Bloques Funciones
LearnBlock.Msg["PROCEDURES_FUNCTION"] = "Función";
LearnBlock.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "hacer_algo";

//Categorias
LearnBlock.Msg["CONTROL"] = "Control";
LearnBlock.Msg["OPERATORS"] = "Operadores";
LearnBlock.Msg["VALUES"] = "Valores";
LearnBlock.Msg["VARIABLES"] = "Variables";
LearnBlock.Msg["FUNCTIONS"] = "Funciones";
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

//Utils
LearnBlock.Msg["DELETE_ALL_BLOCKS"] = "¿Borrar %1 bloques?";
LearnBlock.Msg["DELETE_BLOCK"] = "Borrar bloque";
LearnBlock.Msg["NEW_VARIABLE_TITLE"] = "Nombre de la variable";
LearnBlock.Msg["RENAME_VARIABLE"] = "Renombrar variable";
LearnBlock.Msg["RENAME_VARIABLE_TITLE"] = "Renombrar variable";
LearnBlock.Msg["DELETE_VARIABLE_CONFIRMATION"] = "¿Borrar %1 usos de la variable '%2'?";
LearnBlock.Msg["DELETE_X_BLOCKS"] = "Borrar %1 bloques";
LearnBlock.Msg["DUPLICATE_BLOCK"] = "Duplicar bloque";
LearnBlock.Msg["REDO"] = "Rehacer";
LearnBlock.Msg["UNDO"] = "Deshacer";
