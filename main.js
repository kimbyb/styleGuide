
let blockStyle =  document.querySelector(document.getElementsByClassName('color-block'));
let style = window.getComputedStyle(blockStyle);
blockStyle.textContent = 'Test test' + style.getPropertyValue('background-color');
