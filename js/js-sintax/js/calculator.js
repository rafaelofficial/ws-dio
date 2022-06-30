function calculator() {
    const operator = Number(prompt('Enter a option:\n 1 - Sum (+)\n 2 - Subtract (-)\n 3 - Multiply (*)\n 4 - Real Divide (/)\n 5 - Integer Divide (%)\n 6 - Potentiation (**)'));

    if (!operator || operator >= 7) {
        alert('ERROR - Operation invalid');
        calculator();
    } else {
        let entryOne = Number(prompt('Enter first value:'));
        let entryTwo = Number(prompt('Enter last value:'));
        let result;

        if (!entryOne || !entryTwo) {
            alert('ERROR - Parameter invalid');
            calculator();
        } else {
            function sum() {
                result = entryOne + entryTwo;
                alert(`Result: ${entryOne} + ${entryTwo} = ${result}`);
                newOption();
            }
    
            function subtract() {
                result = entryOne - entryTwo;
                alert(`Result: ${entryOne} - ${entryTwo} = ${result}`);
                newOption();
            }
    
            function multiply() {
                result = entryOne * entryTwo;
                alert(`Result: ${entryOne} * ${entryTwo} = ${result}`);
                newOption();
            }
    
            function realDivide() {
                result = entryOne / entryTwo;
                alert(`Result: ${entryOne} / ${entryTwo} = ${result}`);
                newOption();
            }
    
            function integerDivide() {
                result = entryOne % entryTwo;
                alert(`Result: ${entryOne} % ${entryTwo} = ${result}`);
                newOption();
            }
    
            function potentiation() {
                result = entryOne ** entryTwo;
                alert(`Result: ${entryOne} ** ${entryTwo} = ${result}`);
                newOption();
            }
    
            function newOption() {
                let option = prompt('Would to do new operation?\n 1 - Yes\n 2 - No');
    
                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert('Bye!');
                } else {
                    alert('Enter with option valid');
                    newOption();
                }
            }
        }

        switch (operator) {
            case 1:
                sum();
                break;
            case 2:
                subtract();
                break;
            case 3:
                multiply();
                break;
            case 4:
                realDivide();
                break;
            case 5:
                integerDivide();
                break;
            case 6:
                potentiation();
                break;
            default:
                break;
        }
    }
}

calculator();