
const getContrast = (r,g,b) => 
    (r * 299 + g * 587 + b * 114) / 1000 > 125 ? 'black' : 'white'


//setting up the background colors 
document.getElementById("color1").style.backgroundColor = 'rgb(21, 30, 63)';
document.getElementById("color1").style.color = getContrast('{21, 30, 63}');

document.getElementById("color2").style.backgroundColor = 'rgb(3, 0, 39)';
document.getElementById("color2").style.color = getContrast('rgb(3, 0, 39)');

document.getElementById("color3").style.backgroundColor = 'rgb(242, 243, 217)';
document.getElementById("color3").style.color = getContrast('rgb(242, 243, 217)');

document.getElementById("color4").style.backgroundColor = 'rgb(220, 158, 130)';
document.getElementById("color4").style.color = getContrast('rgb(220, 158, 130)');

document.getElementById("color5").style.backgroundColor = 'rgb(193, 110, 112)';
document.getElementById("color5").style.color = getContrast('rgb(193, 110, 112)');
