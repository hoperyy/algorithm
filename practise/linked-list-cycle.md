## 题目

https://leetcode.com/problems/linked-list-cycle

## 解法 1

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

标记