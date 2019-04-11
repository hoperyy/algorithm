## 题目

https://leetcode.com/problems/swap-nodes-in-pairs/

## 输入输出

Given `1->2->3->4`, you should return the list as `2->1->4->3`.

## 解法 1：先转为数组，再操作数组反转

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

## 解法 2：4 个为一组，处理好各种情况

https://leetcode.com/submissions/detail/221435429/

```js
const swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    const result = head.next;

    let next;
    let next2;
    let next3;

    while(head && head.next) {
        next = head.next;
        next2 = next.next || null;
        next3 = next2 ? next2.next : null;

        // reverse head and next
        head.next = (next2 && next3) ? next3 : next2;
        next && (next.next = head);

        // rewrite head
        head = next2;
    }

    return result;
};
```
