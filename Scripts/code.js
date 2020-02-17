'use strict';

var Code = {};
//Languages
Code.LANGUAGE_NAME = {
    'es': 'Español',
    'en': 'English'
};
//List of RTL languages.
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];
//Main workspace
Code.workspace = null;
//Extracts a parameter from the URL
Code.getStringParamFromUrl = function (name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};
//Gets the language of this user from the URL
Code.getLang = function () {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to Spanish
        lang = 'es';
    }
    return lang;
};
//Is the current language an RTL language?
Code.isRtl = function () {
    return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};
//Loads blocks saved on App Engine Storage or in session/local storage
Code.loadBlocks = function (defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage
        // Restarting Firefox fixes this, so it looks like a bug
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        // An href with #key trigers an AJAX call to retrieve saved blocks
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        // Language switching stores the blocks during the reload
        delete window.sessionStorage.loadOnceBlocks;
        var xml = LearnBlock.Xml.textToDom(loadOnce);
        LearnBlock.Xml.domToWorkspace(xml, Code.workspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks
        var xml = LearnBlock.Xml.textToDom(defaultXml);
        LearnBlock.Xml.domToWorkspace(xml, Code.workspace);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};
//Saves the blocks and reloads with a different language
Code.changeLanguage = function () {
    if (window.sessionStorage) {
        var xml = LearnBlock.Xml.workspaceToDom(Code.workspace);
        var text = LearnBlock.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
        languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }
    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};
//Computes the absolute coordinates and dimensions of an HTML element
Code.getBBox_ = function (element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};
//User's language
Code.LANG = Code.getLang();
//List of tab names
Code.TABS_ = ['blocks', 'javascript', 'php', 'python', 'dart', 'lua', 'xml'];
Code.selected = 'blocks';
//Initializes LearnBlock.  Called on page load
Code.init = function () {
    Code.initLanguage();
    var rtl = Code.isRtl();
    var container = document.getElementById('content_area');
    var onresize = function (e) {
        var bBox = Code.getBBox_(container);
    };
    window.addEventListener('resize', onresize, false);
    for (var messageKey in MSG) {
        if (messageKey.indexOf('cat') == 0) {
            LearnBlock.Msg[messageKey.toUpperCase()] = MSG[messageKey];
        }
    }
    var toolboxText = document.getElementById('toolbox').outerHTML;
    toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
        function (m, p1, p2) {
            return p1 + MSG[p2];
        });
    var toolboxXml = LearnBlock.Xml.textToDom(toolboxText);
    Code.workspace = LearnBlock.inject('learnblockDiv', {
        toolbox: document.getElementById('toolbox'),
        horizontalLayout: false,
        scrollbars: true
    });
    Code.loadBlocks('');
    if ('BlocklyStorage' in window) {
        BlocklyStorage.backupOnUnload(Code.workspace);
    }
};
//Initializes the page language
Code.initLanguage = function () {
    var rtl = Code.isRtl();
    document.dir = rtl ? 'rtl' : 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);
    var languages = [];
    for (var lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function (a, b) {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    };
    languages.sort(comp);
    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
        var tuple = languages[i];
        var lang = tuple[tuple.length - 1];
        var option = new Option(tuple[0], lang);
        if (lang == Code.LANG) {
            option.selected = true;
        }
        languageMenu.options.add(option);
    }
    languageMenu.addEventListener('change', Code.changeLanguage, true);
    document.getElementById('sup').textContent = MSG['title'];
};
document.write('<script src="Scripts/Languages/' + Code.LANG + '.js"></script>\n');
window.addEventListener('load', Code.init);
