## 题目

https://leetcode.com/problems/linked-list-cycle

## 解法 1：标记

```js
const hasCycle = function(head) {
    while(head) {
        if (head.visited) {
            return true;
        }

        head.visited = true;
        head = head.next;
    }

    return false;
};
```

## 解法 2：一步两步

```js
const hasCycle = function(head) {
    if (!head) {
        return false;
    }
    
    let next = head.next;
    let next2 = next ? next.next : null;
    
    while(next && next2) {
        if (next == next2) {
            return true;
        }
        
        next = next.next;
        next2 = next2.next ? next2.next.next : null;
    }

    return false;
};
```