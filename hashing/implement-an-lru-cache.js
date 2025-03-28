// Problem: Implement an LRU Cache
// Category: Hashing (HashMaps, Sets, Rolling Hash, LRU Cache)

// Description:
// Design and implement a data structure for a Least Recently Used (LRU) Cache. It should support the following operations in O(1) time:
// get(key): Retrieve the value associated with key. If the key does not exist, return -1.
// put(key, value): Insert a new key-value pair. If the cache reaches its capacity, remove the least recently used item before inserting.

// Constraints:
// The cache must operate in O(1) time complexity for both get and put.
// You can assume that all key-value pairs contain integers.
// The capacity of the cache is given as an integer when initialized.

const LinkedList = require("../linked-list/doubly-linked-list");

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.size = 0;

        this.linkedList = new LinkedList();
    }

    /**
     * Get the value associated with the key.
     * Returns -1 if the key does not exist.
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            let [_, value] = node.value;
            this.linkedList.remove(node);
            this.linkedList.append([key, value]);

            return value;
        }

        return -1;
    }

    /**
     * Puts a key, value pair into the map.
     * If the LRUCache is at capacity, the least recently used item is ejected.
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.size == this.capacity) {
            let lru = this.linkedList.head;
            let [lruKey, _] = lru.value;
            this.map.delete(lruKey);
            this.linkedList.remove(lru);
        } else {
            this.size++;
        }

        this.linkedList.append([key, value]);
        let tailNode = this.linkedList.tail;
        this.map.set(key, tailNode);
        // this.linkedList.print();
    }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // Expected output: 1
lru.put(3, 3); // Removes key 2 (LRU eviction)
console.log(lru.get(2)); // Expected output: -1 (not found)
lru.put(4, 4); // Removes key 1 (LRU eviction)
console.log(lru.get(1)); // Expected output: -1 (not found)
console.log(lru.get(3)); // Expected output: 3
console.log(lru.get(4)); // Expected output: 4

console.log("---");
const lru2 = new LRUCache(3);
lru2.put(1, 10);
lru2.put(2, 20);
lru2.put(3, 30);
console.log(lru2.get(1)); // Expected output: 10 (now 1 is most recently used)
lru2.put(4, 40); // Removes key 2 (LRU eviction since 1 was accessed)
console.log(lru2.get(2)); // Expected output: -1 (not found)
console.log(lru2.get(3)); // Expected output: 30
console.log(lru2.get(4)); // Expected output: 40

console.log("---");
const lru3 = new LRUCache(1);
lru3.put(5, 50);
console.log(lru3.get(5)); // Expected output: 50
lru3.put(6, 60); // Evicts 5
console.log(lru3.get(5)); // Expected output: -1 (not found)
console.log(lru3.get(6)); // Expected output: 60

console.log("---");
const lru4 = new LRUCache(2);
lru4.put(1, 100);
lru4.put(2, 200);
lru4.put(1, 150); // Updates value of key 1
console.log(lru4.get(1)); // Expected output: 150
lru4.put(3, 300); // Evicts key 2 (since 1 was recently accessed)
console.log(lru4.get(2)); // Expected output: -1 (not found)
console.log(lru4.get(3)); // Expected output: 300
