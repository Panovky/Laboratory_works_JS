function getSequence(N) {
    if (N < 6) {
        return 'Недопустимая длина последовательности!';
    }

    let sequence = '';
    let count = -1;
    let string;

    for (let i=0; i<N; i++) {

        count += 1;
        switch (count % 6) {
            case 0:
                string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
                break;
            case 1:
                string = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
                break;
            case 2:
                string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case 3:
                string = 'abcdefghijklmnopqrstuvwxyz';
                break;
            case 4:
                string = '0123456789';
                break;
            case 5:
                string = '!?,.:;#$&*+-%/@~^_()[]{}';
                break;
        }

        sequence += string[Math.floor(Math.random() * string.length)];
    }
    return sequence;
}

console.log(getSequence(5), '\n');
console.log(getSequence(6), '\n');
console.log(getSequence(8), '\n');
console.log(getSequence(12), '\n');
console.log(getSequence(14), '\n');
console.log(getSequence(18), '\n');
console.log(getSequence(50), '\n');
