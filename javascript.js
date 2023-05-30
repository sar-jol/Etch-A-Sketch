let container = document.querySelector('.container');

    for (let i = 0; i < 256; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell);}

function changeColor(event) {
    const pixel = event.target;
    const randomColor = getRandomColor();
    pixel.style.backgroundColor = randomColor;
    setTimeout(function() {
        pixel.style.backgroundColor = '';
      }, 1000);
}
    
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
        