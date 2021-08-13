'use strict'
const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createSquare = function() {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.appendChild(p);

    p.textContent = 'Olga';

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
    text-align: center;
    position: absolute;`;

    document.body.appendChild(div);
}

const mySquare = (event) => {
    const square = document.querySelector('.block');

    const styles = getComputedStyle(square);

    let left = parseInt(styles.left);
    let top = parseInt(styles.top);

    switch(event.key){
        case "ArrowLeft":
            if ( left > 0) {
                square.style.left = left - 10 + "px";
            }
            break;
        case "ArrowUp":
            if (top > 0) {
                square.style.top = top -10 + "px";
            }
            break;
        case "ArrowRight":
            square.style.left = left + 10 + "px";
            break;
        case "ArrowDown":
            square.style.top = top + 10 + "px";
            break;
    }
}

const displayDom = new DomElement('.block', 100, 100, '#5599FF', 30);

document.addEventListener('DOMContentLoaded', () => {
    displayDom.createSquare();
    addEventListener('keydown', mySquare);
})