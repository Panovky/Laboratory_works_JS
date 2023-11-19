let numbers = {
    firstNum: 2,
    secondNum: 10,

    getSumOfSquares() {
        let n1 = this.firstNum;
        let n2 = this.secondNum;
        return `Сумма квадратов чисел ${n1} и ${n2} равна ${n1 ** 2 + n2 ** 2}.`;
    },

    getSquareOfSum() {
        let n1 = this.firstNum;
        let n2 = this.secondNum;
        return `Квадрат суммы чисел ${n1} и ${n2} равен ${(n1 + n2) ** 2}.`;
    },

    getDifference() {
        let n1 = this.firstNum;
        let n2 = this.secondNum;
        return `Разность чисел ${n1} и ${n2} равна ${n1 - n2}.`;
    },

    getAverage() {
        let n1 = this.firstNum;
        let n2 = this.secondNum;

        if (n1 == n2) {
            return `Между числами ${n1} и ${n2} нет других чисел.`;
        }

        return `Между числами ${n1} и ${n2} находится число ${(n1 + n2) / 2}.`
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
console.log(numbers.getAverage(), '\n');