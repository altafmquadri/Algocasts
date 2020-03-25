// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    add(val) {
        this.s1.push(val)
    }

    remove() {
        let removedElement
        //remove everything from first stack
        while (this.s1.peek() !== undefined) {
            this.s2.push(this.s1.pop())
        }
        if (this.s2.peek()) {
            removedElement = this.s2.pop()
        }
        //put everything back into first stack
        while (this.s2.peek() !== undefined) {
            this.s1.push(this.s2.pop())
        }
        return removedElement
    }

    peek() {
        let lastElement
        while (this.s1.peek() !== undefined) {
            this.s2.push(this.s1.pop())
        }
        lastElement = this.s2.peek()
        while (this.s2.peek() !== undefined) {
            this.s1.push(this.s2.pop())
        }
        return lastElement
    }
}

module.exports = Queue;
