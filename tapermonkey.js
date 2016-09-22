// ==UserScript==
// @name         Steam Community Chat Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fixes the steam community chat to always scroll to the bottom on new messages.
// @author       BoinKlasik
// @match        https://steamcommunity.com/chat
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("loading community scroll script");
    CWebChatDialog.prototype.AppendChatMessage = (function() {
        var old = CWebChatDialog.prototype.AppendChatMessage;
        return function() {
            var result = old.apply(this, arguments);
            var messages = document.getElementsByClassName('chat_message');
            var last = messages[messages.length - 1];
            last.scrollIntoView();
            return result;
        };
    })();
})();