const data = require('./data');

function run(head) {
    if (!head || !head.next) {
        return head;
    }

    const result = head.next;

    let next;
    let next2;

    while (head && head.next) {
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
}

const result = run(data.link);

console.log(result);