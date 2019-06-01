function sum(...numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    })
    return sum;
}
document.write(sum(1, 2, 3, 4, 5, 7, 8, 10, 11, 12));
document.write("<br>");
