# Calculator
Android/iOS calculator


 input.addEventListener("keydown", validateOperator);
 
 function calculate() {
        const operator = input.value.charAt(input.value.length - 1);
        const isValid = operators.includes(operator);
        if (isValid) { return; }

        const result = eval(input.value);
        input.value = result;
    }

    function validateOperator(op) {
        let value = input.value;
        const operator = value.charAt(value.length - 1);
        const isValid = operators.includes(operator);
        const isValidOp = operators.includes(op.key);
        if (isValid && isValidOp) {
            input.value = value.substring(0, value.length - 1);
        }
    }
