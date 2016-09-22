window.onload = function () {

    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");

    // for 4X4

    var btn41 = document.getElementById("btn41");
    var btn42 = document.getElementById("btn42");
    var btn43 = document.getElementById("btn43");
    var btn44 = document.getElementById("btn44");
    var btn45 = document.getElementById("btn45");
    var btn46 = document.getElementById("btn46");
    var btn41 = document.getElementById("btn47");
    var btn41 = document.getElementById("btn48");
    var btn41 = document.getElementById("btn49");
    var btn41 = document.getElementById("btn410");
    var btn41 = document.getElementById("btn411");
    var btn41 = document.getElementById("btn412");
    var btn41 = document.getElementById("btn413");
    var btn41 = document.getElementById("btn414");
    var btn41 = document.getElementById("btn415");
    var btn41 = document.getElementById("btn416");

    // for 5X5
    var btn51 = document.getElementById("btn51");
    var btn52 = document.getElementById("btn52");
    var btn53 = document.getElementById("btn53");
    var btn54 = document.getElementById("btn54");
    var btn55 = document.getElementById("btn55");
    var btn56 = document.getElementById("btn56");
    var btn57 = document.getElementById("btn57");
    var btn58 = document.getElementById("btn58");
    var btn59 = document.getElementById("btn59");
    var btn510 = document.getElementById("btn510");
    var btn511 = document.getElementById("btn511");
    var btn512 = document.getElementById("btn512");
    var btn513 = document.getElementById("btn513");
    var btn514 = document.getElementById("btn514");
    var btn515 = document.getElementById("btn515");
    var btn516 = document.getElementById("btn516");
    var btn517 = document.getElementById("btn517");
    var btn518 = document.getElementById("btn518");
    var btn519 = document.getElementById("btn519");
    var btn520 = document.getElementById("btn520");
    var btn521 = document.getElementById("btn521");
    var btn522 = document.getElementById("btn522");
    var btn523 = document.getElementById("btn523");
    var btn524 = document.getElementById("btn524");
    var btn525 = document.getElementById("btn525");


}

function ValidateButtonAround(b1, b2) {
    if (b2.value == "") {
        b2.value = b1.value;
        b1.value = "";
    }
}

function btn1ClickEvent() {
    ValidateButtonAround(btn1, btn2);
    ValidateButtonAround(btn1, btn4);
    declare3X3Winner();
}

function btn2ClickEvent() {
    ValidateButtonAround(btn2, btn1);
    ValidateButtonAround(btn2, btn5);
    ValidateButtonAround(btn2, btn3);
    declare3X3Winner();
}

function btn3ClickEvent() {
    ValidateButtonAround(btn3, btn2);
    ValidateButtonAround(btn3, btn6);
    declare3X3Winner();
}

function btn4ClickEvent() {
    ValidateButtonAround(btn4, btn1);
    ValidateButtonAround(btn4, btn5);
    ValidateButtonAround(btn4, btn7);
    declare3X3Winner();
}

function btn5ClickEvent() {
    ValidateButtonAround(btn5, btn2);
    ValidateButtonAround(btn5, btn4);
    ValidateButtonAround(btn5, btn8);
    ValidateButtonAround(btn5, btn6);
    declare3X3Winner();
}

function btn6ClickEvent() {
    ValidateButtonAround(btn6, btn3);
    ValidateButtonAround(btn6, btn5);
    ValidateButtonAround(btn6, btn9);
    declare3X3Winner();
}

function btn7ClickEvent() {
    ValidateButtonAround(btn7, btn4);
    ValidateButtonAround(btn7, btn8);
    declare3X3Winner();
}

function btn8ClickEvent() {
    ValidateButtonAround(btn8, btn7);
    ValidateButtonAround(btn8, btn5);
    ValidateButtonAround(btn8, btn9);
    declare3X3Winner();
}


function btn9ClickEvent() {
    ValidateButtonAround(btn9, btn6);
    ValidateButtonAround(btn9.btn8);
    declare3X3Winner();
}

function declare3X3Winner() {
    if (btn1.value == 1 && btn2.value == 2 && btn3.value == 3 && btn4.value == 4 && btn5.value == 5 && btn6.value == 6 && btn7.value == 7 && btn8.value == 8) {
        alert("CONGRATS YOU ARE A WINNER")
    }
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function newGameFor3X3() {
    var btnName3x3 = new Array();
    var totBtn3X3 = 9;
    var reorder3X3 = new Array();
    for (var i = 1; i <= totBtn3X3; i++) {
        btnName3x3[i] = document.getElementById("btn" + i).value;
    }
    reorder3X3 = shuffle(btnName3x3);

    for (var i = 1; i <= totBtn3X3; i++) {
        if (reorder3X3[i] != undefined) {
            document.getElementById("btn" + i).value = reorder3X3[i];
        }
    }

}

function btn41ClickEvent() {
    ValidateButtonAround(btn41, btn42);
    ValidateButtonAround(btn41, btn45);
    declare4X4Winner();
}

function btn42ClickEvent() {
    ValidateButtonAround(btn42, btn41);
    ValidateButtonAround(btn42, btn43);
    ValidateButtonAround(btn42, btn46);
    declare4X4Winner();
}

function btn43ClickEvent() {
    ValidateButtonAround(btn43, btn42);
    ValidateButtonAround(btn43, btn47);
    ValidateButtonAround(btn43, btn44);
    declare4X4Winner();
}

function btn44ClickEvent() {
    ValidateButtonAround(btn44, btn43);
    ValidateButtonAround(btn44, btn48);
    declare4X4Winner();
}

function btn45ClickEvent() {
    ValidateButtonAround(btn45, btn41);
    ValidateButtonAround(btn45, btn46);
    ValidateButtonAround(btn45, btn49);
    declare4X4Winner();
}

function btn46ClickEvent() {
    ValidateButtonAround(btn46, btn42);
    ValidateButtonAround(btn46, btn45);
    ValidateButtonAround(btn46, btn47);
    ValidateButtonAround(btn46, btn410);
    declare4X4Winner();
}

function btn47ClickEvent() {
    ValidateButtonAround(btn47, btn43);
    ValidateButtonAround(btn47, btn46);
    ValidateButtonAround(btn47, btn48);
    ValidateButtonAround(btn47, btn411);
    declare4X4Winner();
}

function btn48ClickEvent() {
    ValidateButtonAround(btn48, btn47);
    ValidateButtonAround(btn48, btn44);
    ValidateButtonAround(btn48, btn412);
    declare4X4Winner();
}


function btn49ClickEvent() {
    ValidateButtonAround(btn49, btn45);
    ValidateButtonAround(btn49.btn413);
    ValidateButtonAround(btn49.btn410);
    declare4X4Winner();
}

function btn410ClickEvent() {
    ValidateButtonAround(btn410, btn49);
    ValidateButtonAround(btn410, btn46);
    ValidateButtonAround(btn410, btn411);
    ValidateButtonAround(btn410, btn414);
    declare4X4Winner();
}

function btn411ClickEvent() {
    ValidateButtonAround(btn411, btn47);
    ValidateButtonAround(btn411, btn410);
    ValidateButtonAround(btn411, btn412);
    ValidateButtonAround(btn411, btn415);
    declare4X4Winner();
}

function btn412ClickEvent() {
    ValidateButtonAround(btn412, btn48);
    ValidateButtonAround(btn412, btn411);
    ValidateButtonAround(btn412, btn416);
    declare4X4Winner();
}

function btn413ClickEvent() {
    ValidateButtonAround(btn413, btn49);
    ValidateButtonAround(btn413, btn414);
    declare4X4Winner();
}

function btn414ClickEvent() {
    ValidateButtonAround(btn414, btn413);
    ValidateButtonAround(btn414, btn410);
    ValidateButtonAround(btn414, btn415);
    declare4X4Winner();
}

function btn415ClickEvent() {
    ValidateButtonAround(btn415, btn411);
    ValidateButtonAround(btn415, btn414);
    ValidateButtonAround(btn415, btn416);
    declare4X4Winner();
}

function btn416ClickEvent() {
    ValidateButtonAround(btn416, btn412);
    ValidateButtonAround(btn416, btn415);
    declare4X4Winner();
}

function declare4X4Winner() {
    if (btn1.value == 1 && btn2.value == 2 && btn3.value == 3 && btn4.value == 4 && btn5.value == 5 && btn6.value == 6
        && btn7.value == 7 && btn8.value == 8 && btn9.value == 9 && btn10.value == 10 && btn11.value == 11 && btn12.value == 12
        && btn13.value == 13 && btn14.value == 14 && btn15.value == 15) {
        alert("CONGRATS YOU ARE A WINNER")
    }
}

function newGameFor4X4() {
    var btnName4X4 = new Array();
    var totBtn4X4 = 16;
    var reorder4X4 = new Array();
    for (var i = 1; i <= totBtn4X4; i++) {
        btnName4X4[i] = document.getElementById("btn4" + i).value;
    }
    reorder4X4 = shuffle(btnName4X4);

    for (var i = 1; i <= totBtn4X4; i++) {
        if (reorder4X4[i] != undefined) {
            document.getElementById("btn4" + i).value = reorder4X4[i];
        }
    }

}

function btn51ClickEvent() {
    ValidateButtonAround(btn51, btn52);
    ValidateButtonAround(btn51, btn56);
    declare5X5Winner();
}

function btn52ClickEvent() {
    ValidateButtonAround(btn52, btn51);
    ValidateButtonAround(btn52, btn57);
    ValidateButtonAround(btn52, btn53);
    declare5X5Winner();
}

function btn53ClickEvent() {
    ValidateButtonAround(btn53, btn52);
    ValidateButtonAround(btn53, btn54);
    ValidateButtonAround(btn53, btn58);
    declare5X5Winner();
}

function btn54ClickEvent() {
    ValidateButtonAround(btn54, btn53);
    ValidateButtonAround(btn54, btn59);
    ValidateButtonAround(btn54, btn55);
    declare5X5Winner();
}

function btn55ClickEvent() {
    ValidateButtonAround(btn55, btn54);
    ValidateButtonAround(btn55, btn510);
    declare5X5Winner();
}

function btn56ClickEvent() {
    ValidateButtonAround(btn56, btn51);
    ValidateButtonAround(btn56, btn57);
    ValidateButtonAround(btn56, btn511);
    declare5X5Winner();
}

function btn57ClickEvent() {
    ValidateButtonAround(btn57, btn52);
    ValidateButtonAround(btn57, btn56);
    ValidateButtonAround(btn57, btn58);
    ValidateButtonAround(btn57, btn512);
    declare5X5Winner();
}

function btn58ClickEvent() {
    ValidateButtonAround(btn58, btn53);
    ValidateButtonAround(btn58, btn57);
    ValidateButtonAround(btn58, btn59);
    ValidateButtonAround(btn58, btn513);
    declare5X5Winner();
}

function btn59ClickEvent() {
    ValidateButtonAround(btn59, btn54);
    ValidateButtonAround(btn59, btn58);
    ValidateButtonAround(btn59, btn514);
    ValidateButtonAround(btn59, btn510);
    declare5X5Winner();
}

function btn510ClickEvent() {
    ValidateButtonAround(btn510, btn55);
    ValidateButtonAround(btn510, btn59);
    ValidateButtonAround(btn510, btn515);
    declare5X5Winner();
}

function btn511ClickEvent() {
    ValidateButtonAround(btn511, btn512);
    ValidateButtonAround(btn511, btn56);
    ValidateButtonAround(btn511, btn516);
    declare5X5Winner();
}

function btn512ClickEvent() {
    ValidateButtonAround(btn512, btn57);
    ValidateButtonAround(btn512, btn511);
    ValidateButtonAround(btn512, btn517);
    ValidateButtonAround(btn512, btn513);
    declare5X5Winner();
}

function btn513ClickEvent() {
    ValidateButtonAround(btn513, btn512);
    ValidateButtonAround(btn513, btn58);
    ValidateButtonAround(btn513, btn518);
    ValidateButtonAround(btn513, btn514);
    declare5X5Winner();
}

function btn514ClickEvent() {
    ValidateButtonAround(btn514, btn59);
    ValidateButtonAround(btn514, btn513);
    ValidateButtonAround(btn514, btn519);
    ValidateButtonAround(btn514, btn515);
    declare5X5Winner();
}

function btn515ClickEvent() {
    ValidateButtonAround(btn515, btn510);
    ValidateButtonAround(btn515, btn514);
    ValidateButtonAround(btn515, btn520);
    declare5X5Winner();
}

function btn516ClickEvent() {
    ValidateButtonAround(btn516, btn511);
    ValidateButtonAround(btn516, btn517);
    ValidateButtonAround(btn516, btn521);
    declare5X5Winner();
}

function btn517ClickEvent() {
    ValidateButtonAround(btn517, btn512);
    ValidateButtonAround(btn517, btn516);
    ValidateButtonAround(btn517, btn518);
    ValidateButtonAround(btn517, btn522);
    declare5X5Winner();
}

function btn519ClickEvent() {
    ValidateButtonAround(btn519, btn515);
    ValidateButtonAround(btn519, btn519);
    ValidateButtonAround(btn519, btn525);
    declare5X5Winner();
}

function btn518ClickEvent() {
    ValidateButtonAround(btn518, btn513);
    ValidateButtonAround(btn518, btn517);
    ValidateButtonAround(btn518, btn523);
    ValidateButtonAround(btn518, btn519);
    declare5X5Winner();
}

function btn520ClickEvent() {
    ValidateButtonAround(btn520, btn515);
    ValidateButtonAround(btn520, btn519);
    ValidateButtonAround(btn520, btn525);
    declare5X5Winner();
}

function btn521ClickEvent() {
    ValidateButtonAround(btn521, btn516);
    ValidateButtonAround(btn521, btn522);
    declare5X5Winner();
}

function btn522ClickEvent() {
    ValidateButtonAround(btn522, btn521);
    ValidateButtonAround(btn522, btn517);
    ValidateButtonAround(btn522, btn523);
    declare5X5Winner();
}

function btn523ClickEvent() {
    ValidateButtonAround(btn523, btn522);
    ValidateButtonAround(btn523, btn518);
    ValidateButtonAround(btn523, btn524);
    declare5X5Winner();
}

function btn524ClickEvent() {
    ValidateButtonAround(btn524, btn523);
    ValidateButtonAround(btn524, btn519);
    ValidateButtonAround(btn524, btn525);
    declare5X5Winner();
}

function btn525ClickEvent() {
    ValidateButtonAround(btn525, btn520);
    ValidateButtonAround(btn525, btn524);
    declare5X5Winner();
}

function declare5X5Winner() {
    if (btn1.value == 1 && btn2.value == 2 && btn3.value == 3 && btn4.value == 4 && btn5.value == 5 && btn6.value == 6
        && btn7.value == 7 && btn8.value == 8 && btn9.value == 9 && btn10.value == 10 && btn11.value == 11 && btn12.value == 12
        && btn13.value == 13 && btn14.value == 14 && btn15.value == 15 && btn16.value == 16 && btn17.value == 17 && btn18.value == 18
        && btn19.value == 19 && btn20.value == 20 && btn21.value == 21 && btn22.value == 22 && btn23.value == 23 && btn24.value == 24) {
        alert("CONGRATS YOU ARE A WINNER")
    }
}

function newGameFor5X5() {
    var btnName5X5 = new Array();
    var totBtn5X5 = 25;
    var reorder5X5 = new Array();
    for (var i = 1; i <= totBtn5X5; i++) {
        btnName5X5[i] = document.getElementById("btn5" + i).value;
    }

    reorder5X5 = shuffle(btnName5X5);

    for (var i = 1; i <= totBtn5X5; i++) {
        if (reorder5X5[i] != undefined) {
            document.getElementById("btn5" + i).value = reorder5X5[i];
        }
    }

}