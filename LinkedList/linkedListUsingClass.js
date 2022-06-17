class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //new node created
    const newNode = {
      value: value,
      next: null,
    };

    // add newNode at the tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newHead = {
      value: value,
      next: this.head,
    };
    this.head = newHead;
    this.length++;

    return this;
  }

  //print the values of linkedlist
  printLisnkList() {
    const items = [];
    let currentNode = this.head;
    while (currentNode != null) {
      items.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(items);
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    // lets find the leader
    const leader = this.traverseToIndex(index - 1);
    const holdingPoint = leader.next;
    leader.next = newNode;
    newNode.next = holdingPoint;
    this.length++;
    return this.printLisnkList()
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    const leader = this.traverseToIndex(index-1);
    const deleteIndex = leader.next;
    leader.next = deleteIndex.next;
    this.length--
    this.printLisnkList()
    return this
  }
}

const linkList1 = new LinkedList(0);
linkList1.append(1);
linkList1.append(2);
linkList1.append(3);
// // linkList1.append(4);
// // linkList1.append(5);
// linkList1.prepend(9);
// linkList1.prepend(19);

// linkList1.insert(3, 87);
linkList1.printLisnkList();
linkList1.remove(1)
// console.log(linkList1);


