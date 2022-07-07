// example of var and let
var firstName = 'João';
var lastName = 'Sousa';

if (firstName === 'João') {
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva';

    console.log(lastName);
}

console.log(firstName, lastName);

// example of const
const FIRST_NAME = 'Rafael';

console.log(FIRST_NAME);
