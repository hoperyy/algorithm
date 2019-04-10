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

## 解法 1：遍历

https://leetcode.com/submissions/detail/221364217/

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

先将链表转存为数组，再一个个反转

## 解法 2：遍历

https://leetcode.com/submissions/detail/221368787/

```js
const reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    let pre = null;
    let next = null;
    let result = null;
    
    while(head) {
        result = head;
        
        // 暂存
        next = head.next;
        
        // 转换
        head.next = pre;
        pre = head;
        head = next;
    }
    
    return result;
};
```

通过两个变量 `pre / head` 实现链表反转