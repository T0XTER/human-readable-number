module.exports = function toReadable (number) {
    let arrayOne = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        arrayTwo = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20) {
        return arrayOne[number];
    }

    if (number < 100) {
        return arrayTwo[Math.floor(number / 10) - 2] + (number % 10 !== 0 ? " " + toReadable(number % 10) : "");
    }

    if (number < 1000) {
        return arrayOne[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
    }
}
