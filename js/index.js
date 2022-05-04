var listItems = document.querySelectorAll('li');
var itemList = document.querySelector('#insert');
var textInput = document.querySelector('#textinput');
console.log(textInput);
var list = "<ul>\n    <li><a href='../pages/01.html'> 00</a></li>\n    <li class='blooditem'>Secrets Are Secrets For A Reason</li>\n    <li class='blooditem'>Our Toll</li>\n    <li class='blooditem'>Ophanim</li>\n    <li class='blooditem'>The Lines Between</li>\n    <li class='blooditem'>The Ever Infinite Nothing</li>\n</ul>";
itemList.innerHTML = list;
textInput.addEventListener('keyup', checkInput);
function checkInput() {
    var textInputValue = (document.querySelector('#textinput')).value;
    console.log(textInputValue);
    if (textInputValue === 'Ophanim') {
        window.localStorage.setItem('ophanim', 'true');
        console.log('ophanim is true');
    }
}
if (localStorage.getItem('ophanim')) {
}
localStorage.setItem('void', '1');
/* document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}); */
var disableselect = function (e) {
    return false;
};
/* document.onselectstart = disableselect;
document.onmousedown = disableselect;
 */
//# sourceMappingURL=index.js.map