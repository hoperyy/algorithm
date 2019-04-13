## 题目

https://leetcode.com/problems/linked-list-cycle-ii/submissions/

## 解法 1：标记，循环获取

https://leetcode.com/submissions/detail/222032281/

```js
const detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    
    while(head) {
        if (head.visited) {
            return head;
        }
        
        head.visited = true;
        head = head.next;
    }
    
    return null;
};
```

## 解法 2：一步两步的方式，稍微复杂写，还没有写出来