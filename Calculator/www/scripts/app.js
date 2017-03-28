(function () {
    "use strict";

    const input = document.getElementById("inCalculator");

    const not = document.getElementById("not");
    const zero = document.getElementById("0");
    const dot = document.getElementById("dot");
    const equal = document.getElementById("equal");

    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const plus = document.getElementById("plus");

    const four = document.getElementById("4");
    const five = document.getElementById("5");
    const six = document.getElementById("6");
    const minus = document.getElementById("minus");

    const seven = document.getElementById("7");
    const eight = document.getElementById("8");
    const nine = document.getElementById("9");
    const multiply = document.getElementById("multiply");

    const CE = document.getElementById("CE");
    const C = document.getElementById("C");
    const remove = document.getElementById("delete");
    const devide = document.getElementById("devide");

    input.addEventListener("keyup", checkIfValid);

    zero.addEventListener("click", function () { input.value += 0; });
    dot.addEventListener("click", function () { input.value += '.'; });
    equal.addEventListener("click", calculate);
    one.addEventListener("click", function () { input.value += 1; });
    two.addEventListener("click", function () { input.value += 2; });
    three.addEventListener("click", function () { input.value += 3; });
    plus.addEventListener("click", function () { input.value += "+"; });

    four.addEventListener("click", function () { input.value += 4; });
    five.addEventListener("click", function () { input.value += 5; });
    six.addEventListener("click", function () { input.value += 6; });
    minus.addEventListener("click", function () { input.value += "-"; });

    seven.addEventListener("click", function () { input.value += 7; });
    eight.addEventListener("click", function () { input.value += 8; });
    nine.addEventListener("click", function () { input.value += 9; });
    multiply.addEventListener("click", function () { input.value += "*"; });

    CE.addEventListener("click", function () { input.value = "" });
    C.addEventListener("click", function () { input.value = "" });
    remove.addEventListener("click", function () { input.value = input.value.slice(0, input.value.length - 1); });
    devide.addEventListener("click", function () { input.value += "/" });


    function calculate() {

    }

    function checkIfValid() {
        let value = input.value;
        let isValid = value.match(/[zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP]/g);
        if (isValid) {
            console.log(`is invalid ${value.slice(value.length - 1)}`);
        }
        else {
            console.log('isValid');
        }
    }

}());