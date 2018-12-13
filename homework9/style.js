function HTMLElement() {
    var divNumber = document.getElementsByTagName('div').length;
    var pNumber = document.getElementsByTagName('p').length;
    var h1Number = document.getElementsByTagName('h1').length;

    alert("There are " +
        divNum + " div elements, " +
        pNum + " p elements, and " +
        h1Num + " h1 elements on the page."
    )
}

function idOne() {
    var divOne = document.getElementById("one-div");
    var numThings = divOne.getElementsByTagName('*').length;
    alert(numThings);
}

function idTwo() {
    var divTwo = document.getElementById("two-div");
    var numThings = divTwo.getElementsByTagName('*').length;
    alert(numThings);
}
