## 题目

https://leetcode.com/problems/reverse-linked-list/ 

## 输入

```js
[1,2,3,4,5]
```

## 期望输出

```js
[5,4,3,2,1]
```

## 解法 1

```js
const reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    const arr = [];
    
    // 转为数组
    while(head) {
        arr.unshift(head);
        
        head = head.next;
    }
    
    // 遍历数组
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        
        item.next = arr[i + 1] || null;
    }
    
    return arr[0];
};
```

思路：

先将链表转存为数组，再一个个反转
