
function Nod(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
}

function Graph(nodes, edges) {
    this.nodes = nodes.map(node => new Nod(node, []));
    edges.forEach(([left, right]) => {
        const nodeLeft = this.nodes.find((nod) => nod.val === left);
        const nodeRight = this.nodes.find((nod) => nod.val === right);
        nodeLeft.neighbors.push(nodeRight)
        nodeRight.neighbors.push(nodeLeft)
    });
}

const graph1 = new Graph([1,2,3,4,5], [[1,2], [1,3], [1,4], [4,5], [2,5]])
console.log(graph1.nodes.map(x => x.neighbors));

function bfs(graphNode) {
    const queue = [];
    queue.push(graphNode);
    while(queue.length !== 0) {
        const currentNode = queue.shift();
        if (currentNode.visited) continue;
        // visit current node
        currentNode.visited = true;
        console.log(currentNode.val,queue);

        for (let nb of currentNode.neighbors) {
            if (nb.visited) continue;
            queue.push(nb);
        };
    }
}

function dfs(graphNode) {
    const stack = [];
    let currentNode = graphNode;
    stack.push(currentNode)
    while(stack.length !== 0) {
        if (!currentNode.visited) {
            // visit node;
            console.log(currentNode.val);
            currentNode.visited = true;
        }
        const next = currentNode.neighbors.find(x => !x.visited);
        if (next) {
            // visit node
            console.log(next.val)
            next.visited = true;
            stack.push(next);
            continue;
        };

        currentNode = stack.pop();
        
    }
}

dfs(graph1.nodes[0]);
