function sumBills(...bills) {
    sum = 0;
    bills.forEach(bill => {
        sum += getValueBill(bill);
    });
    return sum;
}

function getValueBill({ value, dueDate, interestPercentPerDay }) {
    days = todaySubDate(dueDate);
    if (days > 0) {
        return value + ((interestPercentPerDay * value) * days);
    }
    return value;
}

function todaySubDate(dbDate1) {
    return Math.floor((new Date() - new Date(dbDate1 + "T00:00:00")) / 86400000);
}

let bill = { id: 1, value: 500.00, dueDate: '2019-05-20', interestPercentPerDay: 0.3 };
let bill2 = { id: 2, value: 500.00, dueDate: '2019-06-01', interestPercentPerDay: 0.3 };
let bill3 = { id: 3, value: 500.00, dueDate: '2019-06-19', interestPercentPerDay: 0.3 };
let bill4 = { id: 4, value: 500.00, dueDate: '2019-06-01', interestPercentPerDay: 0.3 };

sumBills(bill, bill2, bill3, bill4);

