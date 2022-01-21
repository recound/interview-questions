function List(val, next) {
    this.val = val;
    this.next = next;
}

function listFromArray(array) {
    let currentList = null;
    for (let i = array.length; i >= 0; i--) {
        currentList = new List(array[i], currentList);
    }
    return currentList;
}

const list1 = new List(5, new List(4, new List(3, new List(2))))

const list2 = listFromArray([1,2,3,4,5,6])

console.log(list1)
console.log(list2)

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null

function reverseLinkedList(list) {
    let nextList = null;
    let currentNode = list
    while(!!currentNode.next) {
        // Do smth
        nextList = new List(currentNode.val, nextList);

        // next iteration
        currentNode = currentNode.next; 
    }
    return new List(currentNode.val, nextList)
}

function reverseLLinPlace(list) {
    let prevPointer = null;
    let nextPointer = null

    function rec(list) {
        nextPointer = list.next;
        list.next = prevPointer;
        prevPointer = list;

        if (!nextPointer) return prevPointer;
        return rec(nextPointer);
    }
    return rec(list);
}

console.log(reverseLLinPlace(list1));
