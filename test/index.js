var searchMatrix = function (matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        const midIndex = parseInt((left + right) / 2);
        const midItem = matrix[midIndex];
        const midItemLeftVal = midItem[0];
        const midItemRightVal = midItem[midItem.length - 1];

        if (target < midItemLeftVal) {
            right = midIndex - 1;
        } else if (target > midItemRightVal) {
            left = midIndex + 1;
        } else {
            return midItem.indexOf(target) !== -1;
        }
    }

    return false;
};

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 50));