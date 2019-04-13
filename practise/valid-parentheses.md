## 题目

https://leetcode.com/problems/valid-parentheses/submissions/

## 解法 1

1. 字符串倒序入栈
2. 右侧字符串直接入栈
3. 左侧字符串
   1. 匹配到的，出栈
   2. 匹配不到，入栈

https://leetcode.com/submissions/detail/222055646/

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const map = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    let letter = '';
    for (let i = s.length - 1; i >= 0; i--) {
        letter = s[i];

        if (map[letter]) { // 右侧字符直接入栈
            stack.unshift(letter);
        } else { // 左侧字符进行匹配，匹配到的出栈，匹配不到的，左侧字符入栈
            // 获取 stack 第一个元素
            const firstLetter = stack[0];
            if (map[firstLetter] == letter) {
                stack.shift();
            } else {
                stack.unshift(letter);
            }
        }
    }

    return !stack.length;
};
```