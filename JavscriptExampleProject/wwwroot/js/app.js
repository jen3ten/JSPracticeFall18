//// Make h1 in header have different text
//ES5
//document.getElementsByTagName('h1')[0].onclick = function () {
//    this.innerText = 'this is different text';
//};

//ES6
const headerOne = document.getElementsByTagName('h1')[0];
headerOne.onclick = () => headerOne.innerText = 'this is ES6 text';

//// Make nav ul li elements get larger when you hover over them
//ES5
//var liObj = document.querySelectorAll('nav ul li');
//for (var index in liObj) {
//        liObj[index].onmouseover = function () {
//        this.style.fontSize = '30px';}
//}
//document.querySelectorAll('nav ul li').forEach(
//    function (listItem) {
//        listItem.onmouseleave = function () {
//            this.style.fontSize = '10px';
//        }
//    })

//ES6
const listObjects = document.querySelectorAll('nav ul li');
for (let index in listObjects) {
    listObjects[index].onmouseover = () => listObjects[index].style.fontSize = '30px';
}

listObjects.forEach(
    function (listItem) {
        listItem.onmouseleave = () => listItem.style.fontSize = '10px';
    }
)

//// Add another element to the main element
//ES5
//var newElement = document.createElement('h3');
//var newText = document.createTextNode('This is a new header');
//newElement.appendChild(newText);

//var pElement = document.querySelector('main p');
//document.querySelector('main').insertBefore(newElement, pElement);

//ES6
const newMainElement = document.createElement('h3');
const newMainElementText = document.createTextNode('This is a new ES6 header');
newMainElement.appendChild(newMainElementText);

// Dynamically change the color of the background on the footer when the user hovers over it
document.querySelector('footer').onmouseover = function(){
    this.style.backgroundColor = 'red';
}

// Change the font size of the paragraphs in the main element when the user clicks them
var pElements = document.querySelectorAll('main p');
for (var index in pElements){
    pElements[index].onclick = function (){
        this.style.fontSize = '2rem';
    } 
}

// Change the text in the footer when the user clicks it
document.querySelector('footer').onclick = function(){
    document.querySelector('footer p').innerText = 'I changed this';
}

// Remove the h1 element in the header
//ES5
//document.querySelector('header h1').remove();

// Put something in the place of the h1 in the header
//ES5
//var headerElem = document.createElement('button');
//var buttonText = document.createTextNode('I\'m new!');
//headerElem.appendChild(buttonText);

//var navElement = document.querySelector('header nav');
//document.querySelector('header').insertBefore(headerElem, navElement); 

// Change the text in one of the paragraph tags in the main element
document.querySelectorAll('main p')[1].innerText = "Lorem, lorem, blah, blah, blah...";

// Change the size of the header element to 200px using grid syntax
document.querySelector('header').onclick = function(){
    document.querySelector('.container').style.gridTemplateRows = '200px';
}

