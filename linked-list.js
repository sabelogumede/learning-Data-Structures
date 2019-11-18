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

// create a new LinkedList with a constructor and store it in "LL"
var LL = new LinkedList();
// using its prototype addToHead, add value for the new node

// LL.addToHead(100);
// LL.addToHead(200);
// LL.addToHead(300);

// create a new LinkedList with a constructor and store it in "LL"
var myLL = new LinkedList();
// using its prototype addToHead, add value for the new node
myLL.addToTail(10);
myLL.addToTail(15);
myLL.addToTail(20);

myLL.addToHead(100);

console.log(LL);
// console.log(myLL.tail.prev.prev);
console.log(myLL);
console.log(myLL.tail.prev.prev.prev);
