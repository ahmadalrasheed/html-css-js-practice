// this module is for creating html tags using js
'use strict';

// getting the main din in the html to build html tags inside of it by using js

let mainDiv = document.getElementById('root')

let p1 = document.createElement('p')
p1.textContent = "this is displayed from js"
mainDiv.appendChild(p1)

// creating the table and all the rows and their values
// create table
let tableEl = document.createElement('table')
// create tr that hold the headings of the table
let trhEl = document.createElement('tr')
let tdh1 = document.createElement('th')
let tdh2 = document.createElement('th')
tdh1.textContent = 'Names'
tdh2.textContent = 'location'
trhEl.appendChild(tdh1)
trhEl.appendChild(tdh2)
mainDiv.appendChild(trhEl)

// create tr that hold the info related to the headings
let trEl = document.createElement('tr')
let trd1 = document.createElement('td')
let trd2 = document.createElement('td')
trd1.textContent = 'ahmad'
trd2.textContent = 'jordan'
trEl.appendChild(trd1)
trEl.appendChild(trd2)
mainDiv.appendChild(trEl)

// create tr that hold the info related to the headings

let trEl2 = document.createElement('tr')
let trd12 = document.createElement('td')
let trd22 = document.createElement('td')
trd12.textContent = 'morad'
trd22.textContent = 'spain'
trEl2.appendChild(trd12)
trEl2.appendChild(trd22)
mainDiv.appendChild(trEl2)

// all activities for the button and all expected actions after clicking
let buttonEl = document.getElementById('mybutton')

// from line 50-57, it works exactly like componentdidMount in reactjs
let localStorageItems = JSON.parse(localStorage.getItem('after click'));
if (localStorageItems !== null) {
    for (let i = 0; i < localStorageItems.length; i++) {
        let pElement = document.createElement('p')
        pElement.textContent = localStorageItems[i].name
        mainDiv.appendChild(pElement)
    }
}

// listener for any click on the button
buttonEl.addEventListener('click', () => {

    let pEl_after_click = document.createElement('p');
    pEl_after_click.textContent = 'after the click!!!!!!!!!!'
    let myObject = { 'name': pEl_after_click.textContent }
    // console.log(localStorage.getItem('after click'));
    if (localStorage.getItem('after click') == null) {
        let arrayOfObjetcs = [];
        arrayOfObjetcs = [myObject];
        localStorage.setItem('after click', JSON.stringify(arrayOfObjetcs));
        let pElement = document.createElement('p')
        pElement.textContent = myObject.name
        mainDiv.appendChild(pElement)

        // console.log('firts interaction with local storage');
    } else {
        let localStorageItems = JSON.parse(localStorage.getItem('after click'));
        // console.log('items gotten from local storage',localStorageItems);

        localStorageItems.push(myObject);
        localStorage.setItem('after click', JSON.stringify(localStorageItems));
        let pElement = document.createElement('p')
        pElement.textContent = myObject.name
        mainDiv.appendChild(pElement)
        // console.log('if there is NO item in local storage ');

    }
})