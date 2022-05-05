var itemList = document.querySelector('#insert');
let albumInsert = document.querySelector('#insert2');
var textInput = document.querySelector('#textinput');
console.log(textInput);

var titleArray = [
  "<li class='blooditem'>secrets are secrets for a reason</li>",
  "<li class='blooditem'>our toll</li>",
  "<li class='blooditem'>ophanim</li>",
  "<li class='blooditem'>the lines between</li>",
  "<li class='blooditem'>the ever infinite nothing</li>",
  "<li class='blooditem claw'>clawatmyskindigatmyfaceripoutmyhair</li>",
];

var urlArray = [
  "<a href ='./p/sasfar.html'>",
  "<a href ='./p/toll.html'>",
  "<a href ='./p/ophanim.html'>",
  "<a href ='./p/lines.html'>",
  "<a href ='./p/nothing.html'>",
  "<a href ='./p/erase.html'>",
];
//var list = "<ul>\n    <li><a href='./pages/01.html'> 00</a></li>\n    <li class='blooditem'>Secrets Are Secrets For A Reason</li>\n    <li class='blooditem'>Our Toll</li>\n    <li class='blooditem'>Ophanim</li>\n    <li class='blooditem'>The Lines Between</li>\n    <li class='blooditem'>The Ever Infinite Nothing</li>\n</ul>";

var titleList = '<ul>';

function populateTitleList() {
  titleList = '<ul>';
  titleList += "<li><a href='./p/01.html'> 00</a></li>";

  for (let i = 0; i < titleArray.length; i++) {
    titleList += titleArray[i];
  }

  titleList += '</ul>';
  itemList.innerHTML = titleList;
}

function toggleTitleStyle(titleIndex) {
  if (titleIndex === 5) {
    titleArray[titleIndex] = titleArray[titleIndex].replace(
      " class='blooditem claw'",
      ''
    );

    titleArray[titleIndex] = titleArray[titleIndex].replace(
      '<li>',
      '<li>' + urlArray[titleIndex]
    );

    populateTitleList();
  } else {
    titleArray[titleIndex] = titleArray[titleIndex].replace(
      " class='blooditem'",
      ''
    );

    titleArray[titleIndex] = titleArray[titleIndex].replace(
      '<li>',
      '<li>' + urlArray[titleIndex]
    );
    titleArray[titleIndex] = titleArray[titleIndex].replace(
      '</li>',
      '</a></li>'
    );
    populateTitleList();
  }
}

populateTitleList();

itemList.innerHTML = titleList;

textInput.addEventListener('keyup', checkInput);

function checkInput() {
  var textInputValue = (<HTMLInputElement>document.querySelector('#textinput'))
    .value;
  console.log(textInputValue);

  if (textInputValue === 'secrets are secrets for a reason') {
    window.localStorage.setItem('secrets are secrets for a reason', 'true');
    toggleTitleStyle(0);
  }
  if (textInputValue === 'our toll') {
    window.localStorage.setItem('our toll', 'true');
    toggleTitleStyle(1);
  }
  if (textInputValue === 'ophanim') {
    window.localStorage.setItem('ophanim', 'true');
    toggleTitleStyle(2);
  }
  if (textInputValue === 'the lines between') {
    window.localStorage.setItem('the lines between', 'true');
    toggleTitleStyle(3);
  }
  if (textInputValue === 'the ever infinite nothing') {
    window.localStorage.setItem('the ever infinite nothing', 'true');
    toggleTitleStyle(4);
  }
  if (textInputValue === 'clawatmyskindigatmyfaceripoutmyhair') {
    window.localStorage.setItem('clawatmyskindigatmyfaceripoutmyhair', 'true');
    toggleTitleStyle(5);
  }

  if (
    window.localStorage.getItem('the ever infinite nothing') &&
    window.localStorage.getItem('the lines between') &&
    window.localStorage.getItem('ophanim') &&
    window.localStorage.getItem('our toll') &&
    window.localStorage.getItem('secrets are secrets for a reason')
  ) {
    console.log('all titles found');
    albumInsert.innerHTML = `<a href='https://null00.bandcamp.com/album/secrets-are-secrets-for-a-reason' target=”_blank”><img class='album' src='../content/img/secrets.jpg'></img>
    <p>we're all human -  even if some say otherwise</p></a>`;
  }

  if (window.localStorage.getItem('clawatmyskindigatmyfaceripoutmyhair')) {
    albumInsert.innerHTML = `<a href='https://null00.bandcamp.com/album/secrets-are-secrets-for-a-reason' target=”_blank”><img class='album' src='../content/img/secrets.jpg'></img>
    <p>we're all human -  even if some say otherwise</p></a>`;
  }
}

// localStorage.setItem('void', '1');

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

var disableselect = function (e) {
  return false;
};

/* document.onselectstart = disableselect;
document.onmousedown = disableselect; */

// sourceMappingURL=index.js.map

document.onkeydown = function (e) {
  /*  if (event.keyCode == 123) {
    return false;
  } */
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
};
