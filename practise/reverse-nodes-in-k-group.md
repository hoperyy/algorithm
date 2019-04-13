## 题目

https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/

## 输入输出

## 解法 1：先转为数组。性能、内存占用均一般

https://leetcode.com/submissions/detail/222040784/

```js
var reverseKGroup = function(head, k) {
    if (!head || k <= 0) {
        return head;
    }

    // 先转为数组
    const arr = [];

    while (head) {
        arr.push(head);
        head = head.next;
    }

    // 生成二维数组
    let arr2 = [];
    let kCount = 0;
    let arrCount = arr.length % k ? Math.ceil(arr.length / k) : Math.floor(arr.length / k);
    while (kCount < arrCount) {
        arr2[kCount] = [];
        kCount++;
    }

    arr2.forEach((item, index) => {
        for (let i = index * k, len = Math.min((index + 1) * k, arr.length); i < len; i++) {
            item.push(arr[i]);
        }
    });

    // 反转二维数组各项
    let arr3 = [];
    arr2.forEach((item, index) => {
        arr3[index] = [];

        if (item.length < k) {
            arr3[index] = item;
        } else {
            while (item.length) {
                arr3[index].push(item.pop());
            }
        }
    });

    // 二维数组转为一维数组
    let arr4 = [];
    while (arr3.length) {
        const item = arr3.shift();

        while (item.length) {
            arr4.push(item.shift());
        }
    }

    // 拼接为新的链表
    arr4.forEach((item, index) => {
        item.next = arr4[index + 1];
    });

    return arr4[0];
};
```