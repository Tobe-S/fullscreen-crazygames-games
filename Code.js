// ==UserScript==
// @name         CrazyGames Fullscreen Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a fullscreen button to CrazyGames games
// @author       Tobe-S
// @match        *://*.crazygames.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const addFullscreenButton = () => {
        const button = document.createElement('button');
        button.innerText = 'Fullscreen';
        button.style.position = 'absolute';
        button.style.zIndex = '9999';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.padding = '10px';
        button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        button.style.color = 'purple';
        button.style.border = 'none';
        button.style.cursor = 'pointer';

        button.onclick = () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        };

        document.body.appendChild(button);
    };

    window.addEventListener('load', addFullscreenButton);
})();
