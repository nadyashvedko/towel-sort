// You should implement your task here.

module.exports = function towelSort(matrix) {
    const resArray = [];
    if (matrix && Array.isArray(matrix)) {
        matrix.forEach((curArr, index) => resArray.push(...(index % 2 === 0 ? curArr : curArr.reverse())))
    }
    return resArray;
}
