'use strict';

var Code = {};
//Languages
Code.LANGUAGE_NAME = {
    'es': 'Español',
    'en': 'English'
};
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
    document.getElementById('tSelectRobot').textContent = MSG['tSelectRobot'];
    document.getElementById('tSelectLang').textContent = MSG['tSelectLang'];
    document.getElementById('execute').textContent = MSG['execute'];
    document.getElementById('executeBT').textContent = MSG['executeBT'];
    document.getElementById('bHome').textContent = MSG['home'];
    document.getElementById('bGuide').textContent = MSG['guide'];
    document.getElementById('bWhatLB').textContent = MSG['whatLB'];
    document.getElementById('bWhatLBW').textContent = MSG['whatLBW'];
    document.getElementById('bDetails').textContent = MSG['details'];
    document.getElementById('bCopyBT').textContent = MSG['copyCodeBT'];
    document.getElementById('bCopyPY').textContent = MSG['copyCodePY'];
    document.getElementById('bSaveBT').textContent = MSG['saveCodeBT'];
    document.getElementById('bSavePY').textContent = MSG['saveCodePY'];
    document.getElementById('programPY').textContent = MSG['programPY'];
    document.getElementById('programBT').textContent = MSG['programBT'];
    document.getElementById('programLB').textContent = MSG['programLB'];


    document.getElementById('titleHowTo').textContent = MSG['titleHowTo'];
    document.getElementById('titleAboutLB').textContent = MSG['titleAboutLB'];
    document.getElementById('titleAboutLBW').textContent = MSG['titleAboutLBW'];
    document.getElementById('titleDetails').textContent = MSG['titleDetails'];

    document.getElementById('HT1').textContent = MSG['HT1'];
    document.getElementById('HT2').textContent = MSG['HT2'];
    document.getElementById('HT3').textContent = MSG['HT3'];
    document.getElementById('HT4').textContent = MSG['HT4'];
    document.getElementById('HT5').textContent = MSG['HT5'];
    document.getElementById('HT6').textContent = MSG['HT6'];
    document.getElementById('HT7').textContent = MSG['HT7'];
    document.getElementById('HT8').textContent = MSG['HT8'];
    document.getElementById('HT9').textContent = MSG['HT9'];
    document.getElementById('HT10').textContent = MSG['HT10'];
    document.getElementById('HT11').textContent = MSG['HT11'];

    document.getElementById('aLB1').textContent = MSG['aLB1'];
    document.getElementById('aLB2').textContent = MSG['aLB2'];
    document.getElementById('aLB3').textContent = MSG['aLB3'];
    document.getElementById('aLB4').textContent = MSG['aLB4'];
    document.getElementById('aLB5').textContent = MSG['aLB5'];
    document.getElementById('aLB6').textContent = MSG['aLB6'];
    document.getElementById('aLB7').textContent = MSG['aLB7'];
    document.getElementById('aLB8').textContent = MSG['aLB8'];
    document.getElementById('aLB9').textContent = MSG['aLB9'];
    document.getElementById('aLB10').textContent = MSG['aLB10'];
    document.getElementById('aLB11').textContent = MSG['aLB11'];
    document.getElementById('aLB12').textContent = MSG['aLB12'];

    document.getElementById('aLBW1').textContent = MSG['aLBW1'];
    document.getElementById('aLBW2').textContent = MSG['aLBW2'];
    document.getElementById('aLBW3').textContent = MSG['aLBW3'];
    document.getElementById('aLBW4').textContent = MSG['aLBW4'];
    document.getElementById('aLBW5').textContent = MSG['aLBW5'];

    document.getElementById('det1').textContent = MSG['det1'];
    document.getElementById('det2').textContent = MSG['det2'];
    document.getElementById('det3').textContent = MSG['det3'];
    document.getElementById('det4').textContent = MSG['det4'];
    document.getElementById('det5').textContent = MSG['det5'];
    document.getElementById('det6').textContent = MSG['det6'];
    document.getElementById('det7').textContent = MSG['det7'];

};
document.write('<script src="static/Scripts/Languages/' + Code.LANG + '.js"></script>\n');
window.addEventListener('load', Code.init);
