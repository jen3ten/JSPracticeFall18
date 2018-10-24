// Make h1 in header have different text
document.getElementsByTagName('h1')[0].onclick = function () {
    this.innerText = 'this is different text';
}

// Make nav ul li elements get larger when you hover over them
var liObj = document.querySelectorAll('nav ul li');
for (var index in liObj) {
        liObj[index].onmouseover = function () {
        this.style.fontSize = '30px';}
}
document.querySelectorAll('nav ul li').forEach(
    function (listItem) {
        listItem.onmouseleave = function () {
            this.style.fontSize = '10px';
        }
    })

// Add another element to the main element

// Dynamically change the color of the background on the footer when the user hovers over it

// Change the font size of the paragraphs in the main element when the user clicks them

// Change the text in the footer when the user clicks it

// Remove the h1 element in the header

// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax

