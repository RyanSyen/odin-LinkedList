class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    appendNode(newNode) {
        let node = this.head;
        if (node == null) {
            //Means it's just empty list
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    prepend(newNode) {
        newNode.next = this.head;
        this.head = newNode;
    }

    listSize() {
        let size = 0;
        let node = this.head;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getNode(index) {
        let node = this.head;

        if (index == 0) {
            return this.head;
        }
        while (index--) {
            if (node.next !== null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        return node;
    }

    pop() {
        let node = this.head;
        let secondToLastNode = this.head;
        // after the while loop the variable secondTolastNode is pointing to the last node
        while (node.next) {
            secondToLastNode = node;
            node = node.next;
        }
        // set the secondToLastNode's next to null, which removes the pointer to the last node
        secondToLastNode.next = null;
        return node;
    }

    contains(value) {
        let node = this.head;
        while (node.next) {
            if (node.data === value) return true;
            node = node.next;
        }
        // check the last node as well
        return node.data === value ? true : false;
    }

    find(value) {
        let node = this.head;
        let index = 0;
        while (node.next) {
            if (node.data === value) return index;
            node = node.next;
            index++;
        }
        // check the last node as well
        return node.data === value ? index : null;
    }

    toString() {
        let node = this.head;
        let result = '';
        while (node) {
            result = result.concat(`( ${node.data} ) --> `);
            node = node.next;
        }
        // for the tail
        result = result.concat(`( ${node.data} ) --> null`);
        return result;
    }

    insertAt(index, newNode) {
        let node = this.head;
        if (index == 0) {
            newNode.next = node;
            this.head = newNode;
            return;
        }
        while (--index) {
            if (node.next !== null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }

    removeFrom(index) {
        let node = this.head;
        if (index === 0) {
            if (node !== null) {
                node = node.next;
                this.head = node;
            }
            else
                throw Error("Index Out of Bound");

            return;
        }
        while (--index) {
            if (node.next !== null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        node.next = node.next.next;
    }
}

class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}

