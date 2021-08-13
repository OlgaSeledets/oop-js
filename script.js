'use strict'

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createDiv = function() {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.appendChild(p);

    p.textContent = 'Olga';

    p.style.cssText=`padding-top: 50px`;

    if (this.selector.substr(0, 1) === '.') {
        div.classList.add(this.selector.substr(1));
    } else if (this.selector.substr(0, 1) === '#') {
        div.id = this.selector.substr(1);
    }

    div.style.cssText=`width: ${this.width}px;
    height: ${this.height}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
    color: white;
    margin: 0 auto;
    text-align: center;
    border-radius: 30px;`;

    document.body.appendChild(div);
}

const displayDom = new DomElement('.block', 200, 200, '#5599FF', 60);

document.addEventListener('DOMContentLoaded', () => {
    displayDom.createDiv();
})