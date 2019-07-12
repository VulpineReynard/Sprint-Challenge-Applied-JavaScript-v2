// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container');
const dateText = 'SMARCH 28, 2019';
const headerTitle = 'Lambda Times';
const headerTemp = '98°';
// console.log(headerContainer);
headerContainer.appendChild(Header(dateText, headerTitle, headerTemp));

function Header(dateText, headerTitleText, headerTempText) {
  const theHeader = document.createElement('div');
  const date = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  theHeader.appendChild(date);
  theHeader.appendChild(date);
  theHeader.appendChild(headerTitle);
  theHeader.appendChild(headerTemp);

  headerTemp.classList.add('temp');
  theHeader.classList.add('header');
  date.classList.add('date');

  date.textContent = dateText;
  headerTitle.textContent = headerTitleText;
  headerTemp.textContent = headerTempText;

  return theHeader;
}