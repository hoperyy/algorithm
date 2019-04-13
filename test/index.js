const data = require('./data');

function run(head) {
    if (!head || !head.next) {
        return null;
    }

    let next = head.next;
    let next2 = next.next;

    let count = 0;

    while (next && next2) {
        count++;
        if (next === next2) {
            if (next === next2.next) {
                return next.next;
            } else {
                return next;
            }
        }

        next = next.next;
        next2 = next2.next ? next2.next.next : null;
    }

    return null;
}

const result = run(data.getLinkCycle());

console.log(result);