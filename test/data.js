module.exports = {
    link: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
            }
        }
    },
    getLinkCycle() {
        const node1 = {};
        const node2 = {};

        node1.val = 0;
        node1.next = node2;

        node2.val = 1;
        node2.next = node1;

        return node1;
    }
};
