const html  = document.getElementById('html');
const css  = document.getElementById('css');
const js  = document.getElementById('js');
const style = document.querySelector('style')
const testJs = document.getElementById('testJs')
const tester = document.getElementById('tester')
const progress = document.getElementById('progress')
let characterCount = 0;
const characterLenght = 250;

html.value = localStorage.getItem('html');
css.value = localStorage.getItem('css');
js.value = localStorage.getItem('js');

html.addEventListener("keyup", getHtml);
css.addEventListener("keyup", getCss);
js.addEventListener("keyup", getJs);
html.addEventListener("mouseover", showGif);
html.addEventListener("mouseout", hideGif);


function getHtml() {
    tester.innerHTML = html.value;
    localStorage.setItem('html' , html.value);
    characterCount = html.value.length;
    progress.innerText = characterCount+ '/' + characterLenght;
    progress.style.width = characterCount*100/characterLenght + '%'
}

function getCss() {
    style.innerText = '#tester ' + css.value ;
    localStorage.setItem('css' , css.value);
}

function getJs() {
    testJs.innerText = js.value;
    localStorage.setItem('js' , js.value);
}
function run(){
    new Function(js.value)();
}
function showGif() {
    document.getElementById('gif').style.visibility = 'visible';
}
function hideGif() {
    document.getElementById('gif').style.visibility = 'hidden';
}