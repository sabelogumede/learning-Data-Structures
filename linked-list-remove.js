/* 
first we create our Constructor function from which we will create 
our node's linked list from.
*/
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// addToHead prototype Method, inside our LinkedList func
LinkedList.prototype.addToHead = function(value) {
  // new node created using the Node-constructor-function
  var newNode = new Node(value, this.head, null);
  // handle check if there are already nodes in our linked list
  //else if not, assign newNode To tail
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  // add newNode to head of our linkedList
  this.head = newNode;
};

// addToTail prototype Method,
LinkedList.prototype.addToTail = function(value) {
  // create new node
  var newNode = new Node(value, null, this.tail);
  // if list has nodes, set tail-next point to newNode
  // else if empty, set head to newNode
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  // add newNode to tail
  this.tail = newNode;
};

// remove methodHead method
LinkedList.prototype.removeHead = function() {
  // if list is empty or there is no list, retun null
  if (!this.head) return null;
  var val = this.head.value;
  // the current head, will be set to a new next head after removing the old head
  this.head = this.head.next;
  // if the is head, set its previous property to null
  // else if there is no-head, set tail to null
  if (this.head) this.head.prev = null;
  else this.tail = null;
  // return the value
  return val;
};

// remove methodTail method
LinkedList.prototype.removeTail = function() {
  // if list is empty, return null
  if (!this.tail) return null;
  //assign tail value to val
  var val = this.tail.value;
  // assign tail before the removed tail to the current tail
  this.tail = this.tail.prev;
  //if list is not empty, set next tail to null
  //else set head to null
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

// create a linked list
var ll = new LinkedList();

// ll.addToHead("one");
// ll.addToHead("two");
// ll.addToTail("three");

ll.addToHead("one");
ll.addToHead("two");
ll.addToHead("three");

// removeHead, removed first, expect the second
// console.log(ll.removeHead());

// removeTail, removed first, expect the second
console.log(ll.removeTail());
