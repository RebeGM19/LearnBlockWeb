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
//Loads blocks saved on App Engine Storage or in session/local storage
Code.loadBlocks = function (defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        delete window.sessionStorage.loadOnceBlocks;
        var xml = LearnBlock.Xml.textToDom(loadOnce);
        console.log(xml);
        LearnBlock.Xml.domToWorkspace(xml, workspace);
    } else if (defaultXml) {
        var xml = LearnBlock.Xml.textToDom(defaultXml);
        LearnBlock.Xml.domToWorkspace(xml, workspace);
    } else if ('BlocklyStorage' in window) {
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
//User's language
Code.LANG = Code.getLang();
//Initializes LearnBlock.  Called on page load
Code.init = function () {
    Code.initLanguage();
    Code.workspace = workspace;
    Code.loadBlocks('');
    if ('BlocklyStorage' in window) {
        BlocklyStorage.backupOnUnload(Code.workspace);
    }
};
//Initializes the page language
Code.initLanguage = function () {
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
    document.getElementById('sup').textContent = MSG['sup'];
    document.getElementById('newblock').textContent = MSG['newblock'];
    document.getElementById('execute').textContent = MSG['execute'];
};
document.write('<script src="static/Scripts/Languages/' + Code.LANG + '.js"></script>\n');
window.addEventListener('load', Code.init);
