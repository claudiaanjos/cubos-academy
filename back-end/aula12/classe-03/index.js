function arriveInTheStore (hours, minutes=0) {
    const openStore = new Date(2015, 1, 1, 8, 0);
    const closeStore = new Date(2015, 1, 1, 18, 1);
    const arriveTime = new Date (2015, 1, 1, hours, minutes);
    if (+arriveTime >= +openStore && +arriveTime < +closeStore) {
        return true;
    } else {
        return false;
    }
}

console.log(arriveInTheStore(2));