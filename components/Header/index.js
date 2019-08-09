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

let head = document.querySelector('.header-container');

function Header() {

    let headDiv = document.createElement('div');
    headDiv.classList.add('header');

    let headDateSpan = document.createElement('span');
    headDateSpan.classList.add('date');
    headDateSpan.textContent = "SMARCH 28, 2019";

    let headH1 = document.createElement('h1');
    headH1.textContent = "Lambda Times";

    let headTemperatureSpan = document.createElement('span');
    headTemperatureSpan.classList.add('temp');
    headTemperatureSpan.textContent = "98°";

    
    headDiv.appendChild(headDateSpan);
    headDiv.appendChild(headH1);
    headDiv.appendChild(headTemperatureSpan);

    
    return headDiv;
}

let newHeader = Header();
head.appendChild(newHeader);

