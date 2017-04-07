'use strict'

class PriorityNode {
  constructor(data, priority) {
    this.data = data;
    this.next = null;
    this.priority = priority;
  }
}

export default class Priority {

  constructor(data) {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue( data, priority ) {
    const newPriorityNode = new PriorityNode( data, priority ) //{ data: 'foo', next: null}
    if( this.size === 0 ) {
      this.head = newPriorityNode
      this.tail = newPriorityNode
      this.size++
    } else {
      newPriorityNode.next = this.tail // newPriorityNode = { data: 'foo', next:{data: 'roo', next: null}}
      //this.tail = {{data: 'roo', next: null}
      this.tail = newPriorityNode
      this.size++
    }
  }

  dequeue() {
    if( this.size === 0 ) {
      return null
    } else {
      let removedNode = this.head
      this.head = this.next;
      this.size--;
      return removedNode
    }
  }

  front() {
    if(this.head) {
      return this.head;
    } else {
      return null;
    }
  }

  back(){
    if(this.tail) {
      return this.tail;
    } else {
      return null;
    }

  }

  isEmpty(){
    // if () {
    //   return true
    // } else {
    //   return false
    // }
  }

  length(){
    return this.size
  }
}




// const queue = new Priority()

// queue.enqueue('foo')
// bayarea.push('fred')
// bayarea.push('BMW')
