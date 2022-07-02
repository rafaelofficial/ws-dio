function compareNumbers(number1, number2) {
    if (!number1 || !number2) return "Define two numbers.";

    const firstPhase = createFirstPhrase(number1, number2);
    const secondPhase = createSecondPhrase(number1, number2);

    return `${firstPhase} ${secondPhase}`;
}

function createFirstPhrase(number1, number2) {
    let isEquals = '';
    if (number1 !== number2) {
        isEquals = "not";
    }

    return `The numbers ${number1} and ${number2} ${isEquals} are equals.`;
}

function createSecondPhrase(number1, number2) {
    const sum = number1 + number2;

    let result10 = 'smaller';
    let result20 = 'smaller';

    const compare10 = sum > 10;
    const compare20 = sum > 20;

    if (compare10) {
        result10 = 'larger';
    }

    if (compare20) {
        result20 = 'larger';
    }

    return `Your sum is ${sum}, than is ${result10} than 10 and ${result20} than 20.`
}


console.log(compareNumbers(20, 20));