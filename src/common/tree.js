function Tree(val, left, right) {
    this.val = val ? val : 0;
    this.left = left;
    this.right = right;
    return this
}

function logTree(tree) {
    console.log(tree.val);
    if (tree.left) { logTree(tree.left) }
    if (tree.right) { logTree(tree.right) }
}

const tree1 = new Tree(6,
    new Tree(4,
        new Tree(3), new Tree(5)),
    new Tree(8,
        new Tree(7), new Tree(9)),
)

// logTree(tree1);

function traverseTree(tree) {
    const stack = [];
    function pushToLefts(treeNode) {
        stack.push(treeNode)
        if (treeNode.left) {
            pushToLefts(treeNode.left);
        }
        return;
    }
    pushToLefts(tree);

    console.log(stack)

    while(stack.length > 0) {
        const currentNode = stack.pop();

        // Visit node
        console.log(currentNode && currentNode.val);
        
        if (currentNode.right) {
            pushToLefts(currentNode.right);
        }
    }    
    return
}


traverseTree(tree1)
