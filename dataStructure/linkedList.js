/*
    Linked List
    여러개의 Node로 구성되어 있다. 각각의 Node는 데이터와 다음 Node가 무엇인지 알려주는 주소를 갖고있다.
    이러한 리스트는 데이터를 추가하거나, 데이터의 위치를 찾거나, 제거하는 기능이 있어야 한다.

    1 -> 2 -> 3 -> 4 -> 5 라는 연결리스트가 있다면 1, 2, 3, 4, 5는 데이터, 그리고 '->'는 주소이다.
    자바스크립트에서는 배열 [1, 2, 3, 4, 5]에서 각가의 원소가 데이터, 그리고 idx는 데이터의 위치를 말해주고 있다.
    또한 array.push() or array.splice()를 통해 데이터를 추가, 삭제할 수 있다.

    예시로 일단 연결리스트와 노드를 만들어보자.
*/

/*
    const n1 = {
    data: 100,
    };

    const n2 = {
    data: 200,
    };

    n1.next = n2;

    console.log(n1); //{ data: 100, next: { data: 200 } }

    // n1의 property로 next가 추가되고 n2가 들어있는 것을 확인할 수 있다.
    // 심화된 예제를 살펴보자
*/

class Node {
  constructor(data, next = null) {
    this.data = data; // data
    this.next = next; // 굳이 말하자면 idx
  }
}

class LinkedList {
  constructor() {
    this.haed = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.haed);
    this.size++;
    // 앞의 head는 context가 insertFist, 뒤의 head는 construtor의 head?
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      // if empty, make head
      this.head = node;
    } else {
      // if something in list
      // ????????
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  // Insert at index
  inserAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      // 예외처리
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head); //
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printListData() {
    let current = this.head; // insertFirst의 head
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertLast(400);
ll.printListData();
ll.insertFirst(100);
ll.printListData();
ll.insertFirst(200);
ll.printListData();
ll.insertFirst(300);
ll.printListData();
