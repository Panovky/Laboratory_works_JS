let numbers = {
    firstNum: 2,
    secondNum: 10,

    getSumOfSquares() {
        return `Сумма квадратов чисел ${this.firstNum} и ${this.secondNum} равна ${this.firstNum ** 2 + this.secondNum ** 2}.`;
    },

    getSquareOfSum() {
        return `Квадрат суммы чисел ${this.firstNum} и ${this.secondNum} равен ${(this.firstNum + this.secondNum) ** 2}.`;
    },

    getDifference() {
        return `Разность чисел ${this.firstNum} и ${this.secondNum} равна ${this.firstNum - this.secondNum}.`;
    },

    getMediana() {
        let n1 = this.firstNum;
        let n2 = this.secondNum;

        if (n1 == n2) {
            return `Между числами ${this.firstNum} и ${this.secondNum} нет других чисел.`;
        }

        let len = Math.abs(n1 - n2);

        if (len % 2 == 0) {
            if (n1 > n2) {
                return `Число ${n1 - len/2} находится посередине между числами ${this.firstNum} и ${this.secondNum}.`;
            }
            else {
                return `Число ${n2 - len/2} находится посередине между числами ${this.firstNum} и ${this.secondNum}.`;
            }
        }
        else {
            if (n1 > n2) {
                return `Число ${((n1 - Math.floor(len/2)) + (n2 + Math.floor(len/2))) / 2} находится между числами ${this.firstNum} и ${this.secondNum}.`;
            }
            else {
                return `Число ${((n1 + Math.floor(len/2)) + (n2 - Math.floor(len/2))) / 2} находится между числами ${this.firstNum} и ${this.secondNum}.`;
            }
        }
    }
};

/*

numbers.firstNum = 10;
numbers.secondNum = 2;

numbers.firstNum = 10;
numbers.secondNum = 3;

numbers.firstNum = 3;
numbers.secondNum = 10;

numbers.firstNum = 6;
numbers.secondNum = -2;

numbers.firstNum = -2;
numbers.secondNum = 6;

numbers.firstNum = 5;
numbers.secondNum = -2;

numbers.firstNum = -2;
numbers.secondNum = 5;

*/

console.log(numbers.getSumOfSquares(), '\n');
console.log(numbers.getSquareOfSum(), '\n');
console.log(numbers.getDifference(), '\n');
console.log(numbers.getMediana(), '\n');