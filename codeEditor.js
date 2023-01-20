const html  = document.getElementById('html');
const css  = document.getElementById('css');
const js  = document.getElementById('js');
const style = document.querySelector('style')
const testJs = document.getElementById('testJs')
const tester = document.getElementById('tester')
let characterCount = 0;

html.value = localStorage.getItem('html');
css.value = localStorage.getItem('css');
js.value = localStorage.getItem('js');

html.addEventListener("keyup", getHtml);
css.addEventListener("keyup", getCss);
js.addEventListener("keyup", getJs);

function getHtml() {
    tester.innerHTML = html.value;
    localStorage.setItem('html' , html.value);
    characterCount = html.value.length;
    document.getElementById('character').innerText = characterCount+ '/250';
}

function getCss() {
    style.innerText = css.value;
    localStorage.setItem('css' , css.value);
}

function getJs() {
    testJs.innerText = js.value;
    console.log(js.value);
    localStorage.setItem('js' , js.value);
}
function run(){
    new Function(js.value)();
}