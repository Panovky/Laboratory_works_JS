let words = [];

let words = ["one", "two", "three", "+four", "=five", "%six", "$seven", "&eight", "/nine", "eleven"];

let words = ["Alice", "Ostin", "Esme", "Olivia", "Isabella", "Ethan", "Eva", "Oskar", "Abigail", "Emma"];

let words = ["Jessica", "Sarah", "Leo", "Sophia", "Mya", "Thomas", "Jack", "Lily", "Theodore", "Matthew"];

*/

let vowels = new Map();
let consonants = new Map();

for (let word of words) {
    if (97 <= word.toLowerCase().charCodeAt(0) && word.toLowerCase().charCodeAt(0) <= 122) {
        if ("eyuioa".includes(word[0].toLowerCase())) {
            if (!vowels.has(word.length)) {
                vowels.set(word.length, [word]);
            }
            else {
                vowels.set(word.length, vowels.get(word.length).concat(word));
            }
        }
        else {
            if (!consonants.has(word.length)) {
                consonants.set(word.length, [word]);
            }
            else {
                consonants.set(word.length, consonants.get(word.length).concat(word));
            }
        }
    }
}

let result = {
    vowels: [],
    consonants: []
};

for (let key of Array.from(vowels.keys()).sort( (a, b) => a - b) ) {
    result.vowels = result.vowels.concat(vowels.get(key));
}

for (let key of Array.from(consonants.keys()).sort((a, b) => (a - b))) {
    result.consonants = result.consonants.concat(consonants.get(key));
}

console.log("Итоговый объект =", result);