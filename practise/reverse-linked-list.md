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
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    let arr = [];
    
    while(head) {
        arr.unshift(head);
        
        head = head.next;
    }
    
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        
        item.next = arr[i + 1] || null;
    }
    
    return arr[0];
};
```

思路：

先将链表转存为数组，再一个个反转
