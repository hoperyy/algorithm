## 题目

https://leetcode.com/problems/swap-nodes-in-pairs/

## 输入输出

Given `1->2->3->4`, you should return the list as `2->1->4->3`.

## 解法 1

https://leetcode.com/submissions/detail/221374792/

```js
const swapPairs = function(head) {
    if (!head) {
        return null;
    }
    
    const arr = [];
    
    // 转为数组
    while(head) {
        arr.push(head);
        head = head.next;
    }
    
    // 反转
    let temp;
    for (let i = 0, len = arr.length; i < len; i += 2) {
        if (arr[i + 1] == undefined) {
            break;
        }
        
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i].next = arr[i + 1];
    }
    
    return arr[0];
};
```

先转为数组，再操作数组反转