// f(n) = f(n - 1) + f(n - 2)

// 递归
function fn1(n) {
    return n <= 1 ? n : fn1(n - 1) + fn1(n - 2);
}

// 优化
const m = {};
function fn2(n) {
    if (n <= 1) {
        return n;
    } else if (!m[n]) {
        m[n] = fn2(n - 1) + fn2(n - 2);
    }

    return m[n];
}

// 递推（反向）
function fn3(n) {
    const arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}


console.log(fn3(0), fn3(1), fn3(2), fn3(3), fn3(4), fn3(5));