// 公式：arr[i][j] = arr[i + 1][j] + arr[i][j + 1];

// 未完成
function fn(row, col) {

    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            arr[i][j] = ar[i + 1][j] + arr[i][j + 1];
        }
    }
}