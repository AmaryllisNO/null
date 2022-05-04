const listItems = document.querySelectorAll('li');
const itemList = document.querySelector('#insert');

const textInput = document.querySelector('#textinput');
console.log(textInput);

let list = `<ul>
    <li><a href='../pages/01.html'> 00</a></li>
    <li class='blooditem'>Secrets Are Secrets For A Reason</li>
    <li class='blooditem'>Our Toll</li>
    <li class='blooditem'>Ophanim</li>
    <li class='blooditem'>The Lines Between</li>
    <li class='blooditem'>The Ever Infinite Nothing</li>
</ul>`;

itemList.innerHTML = list;

textInput.addEventListener('keyup', checkInput);

function checkInput() {
  const textInputValue = (<HTMLInputElement>(
    document.querySelector('#textinput')
  )).value;
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

const disableselect = (e) => {
  return false;
};

/* document.onselectstart = disableselect;
document.onmousedown = disableselect;
 */
