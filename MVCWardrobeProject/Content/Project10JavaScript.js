//styling for button
function overBtn(x) {
    x.style.fontSize = "20px";
    x.style.backgroundColor = "white";
    x.style.color = "black";
}

function outBtn(x) {
    x.style.fontSize = "14px";
    x.style.backgroundColor = "#474e5d";
    x.style.color = "white";
}
function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    var myArray = [
        "img src=/Content/images/ LDquote.jpg", "<img src=/Content/images/ LDquote.jpg >"
        //"Apples",
        //"Bananas",
        //"Pears"
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    alert(randomItem);
    if (userResponse) {
        var win = window.open("http://www.imdb.com/name/nm0000233/", '_blank');
        win.focus();
    }
}

/*styling for drop down*/

//* @param {any} inobj
//*/
function selectMovie(inobj) {
    switch (inobj) {
        case "0":
            document.getElementById("movielist").innerHTML = "<p id='display2'><big><b>Choose a movie</b></big></p>";
            break;
        case "1":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/3collage.jpg />"
            break;
        case "2":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/KBquote.jpg>"
            break;
        case "3":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/LDquote.jpg>"
            break;
        case "4":
            document.getElementById("movielist").innerHTML = "<img src=/Content/images/SBquote.jpg>"
            break;
    }
}