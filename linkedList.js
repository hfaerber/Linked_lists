class List {
  constructor () {
    this._length = 0;
    this.head = null;
  }

  push(data) {
    let newNode = new ListNode(data);
    this._length ++;
    if (this.head === null) {
      this.head = newNode;
    } else {
      // find nextNode of null then assign
      let found = this.findLastNode(this.head);
      found.nextNode = newNode;
    }
  }

  pop () {
    if (this._length < 1) {
      return null;
    }
    this._length --;
    let lastElement = this.findLastNode(this.head);
    if (this._length === 0 ) {
      this.head = null
    } else {
      let nodeInQuestion = this.head;
      let thePreviousNode;
      // let array = [];
      for (let i = 0; i < this._length + 1; i++) {
        if (nodeInQuestion.nextNode) {
          thePreviousNode = nodeInQuestion;
          nodeInQuestion = nodeInQuestion.nextNode;
        } else {
          thePreviousNode.nextNode = null;
        }
      }
        // if (nodeInQuestion.nextNode) {
        //   array.push(nodeInQuestion);
        //   nodeInQuestion = nodeInQuestion.nextNode;
        // }
      // array[array.length-1].nextNode = null;
    }
    return lastElement
  }

  lastNode() {
    if (this.head === null) {
      return null
    } else {
      return this.findLastNode(this.head)
    }
  }

  include(nodeData) {
    let currentNode = this.head;
    for (let i = 0; i < this._length; i++) {
      if (this.head && currentNode.data === nodeData) {
        return true
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false
  }

  find(nodeData) {
    let found = this.findNode(this.head, nodeData);
    console.log('found', found)
    return found ? found : null;
  }

  findNode(startingNode, data) {
    if (startingNode.data === data) {
      return startingNode
    } else if (startingNode.data !== data && startingNode.nextNode === null) {
      return null;
    } else {
      return this.findNode(startingNode.nextNode, data)
    }
  }

  findLastNode(startingNode) {
    if (startingNode.nextNode === null) {
      return startingNode
    } else {
      return this.findLastNode(startingNode.nextNode)
    }
  }

}
