function getRandomSymbol(string) {
    return string[Math.floor(Math.random() * string.length)];
}

function getRandomSequence(N) {
    if (N < 6) {
        return 'Недопустимая длина последовательности!';
    }

    let sequence = '';
    let count = -1;
    let modulo;

    for (let i=0; i<N; i++) {
        count += 1;
        modulo = count % 6;

        if (modulo == 0) {
            sequence += getRandomSymbol('АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ');
            continue;
        }

        if (modulo == 1) {
            sequence += getRandomSymbol('абвгдеёжзийклмнопрстуфхцчшщъыьэюя');
            continue;
        }

        if (modulo == 2) {
            sequence += getRandomSymbol('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            continue;
        }

        if (modulo == 3) {
            sequence += getRandomSymbol('abcdefghijklmnopqrstuvwxyz');
            continue;
        }

        if (modulo == 4) {
            sequence += getRandomSymbol('0123456789');
            continue;
        }

        if (modulo == 5) {
            sequence += getRandomSymbol('!?,.:;#$&*+-%/@~^_()[]{}');
        }
    }

    return sequence;
}

console.log(getRandomSequence(5), '\n');
console.log(getRandomSequence(6), '\n');
console.log(getRandomSequence(8), '\n');
console.log(getRandomSequence(12), '\n');
console.log(getRandomSequence(14), '\n');
console.log(getRandomSequence(18), '\n');
console.log(getRandomSequence(50), '\n');
