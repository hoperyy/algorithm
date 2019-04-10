const data = require('./data');

function run(head) {
    while(head) {
        if (head.visited) {
            return true;
        }

        head.visited = true;
        head = head.next;
    }

    return false;
}

const result = run(data.link);

console.log(result);