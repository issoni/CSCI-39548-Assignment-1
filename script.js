"use strict";

function changeColor() {
    let color = document.body.style.color;
    if (color === 'salmon') {
        document.body.style.color = 'crimson';
    } else if (color === 'crimson') {
        document.body.style.color = 'maroon';
    } else {
        document.body.style.color = 'salmon';
    }
}