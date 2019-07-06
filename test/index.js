const data = require('./data');
var isMax = function (rootValue, node) {
    if (!node) {
        return true;
    }
    if (rootValue <= node.val) {
        return false;
    }

    return isMax(rootValue, node.left) && isMax(rootValue, node.right);
};

var isMin = function (rootValue, node) {
    if (!node) {
        return true;
    }
    if (rootValue >= node.val) {
        return false;
    }

    return isMin(rootValue, node.left) && isMin(rootValue, node.right);
};

var isValidBST = function checkIsValidBST(root) {
    if (!root || (!root.left && !root.right)) {
        return true;
    }

    return isMax(root.val, root.left) && isMin(root.val, root.right) && isValidBST(root.left) && isValidBST(root.right);
};

console.log(isValidBST({
    val: 3,
    right: {
        val: 30,
        left: {
            val: 10,
            right: {
                val: 15,
                right: {
                    val: 45
                }
            },

        },
    },
}));

// console.log(isMin(3, {
//     val: 30,
//     left: {
//         val: 10,
//         right: {
//             val: 15,
//             right: {
//                 val: 45
//             }
//         },

//     },
// }));