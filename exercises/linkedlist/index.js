// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    size() {
        let currentNode = this.head
        let counter = 0
        while (currentNode) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }
    getFirst() {
        return this.head
    }
    getLast() {
        let currentNode = this.head
        while (currentNode) {
            if (!currentNode.next) break
            currentNode = currentNode.next
        }
        return currentNode
    }
    clear() {
        this.head = null
    }
    removeFirst() {
        if (!this.head) return
        this.head = this.head.next
    }
    removeLast() {
        if (!this.head) return
        if (!this.head.next) return this.head = null
        let previousNode = this.head
        let currentNode = this.head.next
        while (currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
    }
    insertLast(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            let currentNode = this.getLast()
            currentNode.next = newNode
        }
    }
    getAt(index) {
        let currentNode = this.head
        let counter = 0
        while (currentNode) {
            if (counter === index) return currentNode
            counter++
            currentNode = currentNode.next
        }
        return null
    }
    removeAt(index) {
        let removedNode = this.getAt(index)
        if (!removedNode) return
        if (index === 0) return this.head = this.head.next
        if (removedNode.next === null) {
            return this.head = null
        }
        if (removedNode.next !== null) {
            let previousNode = this.getAt(index - 1)
            let nextNode = removedNode.next
            removedNode.next = null
            previousNode.next = nextNode
        }
    }
    insertAt(data, index) {
        if (this.getAt(index) === null) {
            return this.insertLast(data)
        }
        if (!this.head) {
            return this.head = new Node(data)
        }
        if (index === 0) {
            return this.head = new Node(data, this.head)
        }
        if (index > 0) {
            let previousNode = this.getAt(index - 1)
            let newNode = new Node(data, previousNode.next)
            previousNode.next = newNode
        }
    }
    forEach(fn) {
        let node = this.head
        let counter = 0
        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }
    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }
}



module.exports = { Node, LinkedList };
