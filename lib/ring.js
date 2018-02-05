/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-05
 */

class Ring {
  constructor(queue, start = 0) {
    this.queue = queue;
    this.start_index = start;
    this._index = start;
  }

  // 移动到下一个节点
  next() {
    if(this._index >= this.queue.length - 1) {
      this._index = 0;
    } else {
      this._index++;
    }
  }

  // 移动到上一个节点
  prev() {
    if(this._index <= 0) {
      this._index = this.queue.length - 1;
    } else {
      this._index--;
    }
  }

  // 移动到规定位置
  move(step) {
    if(step < 0) {
      for(let i = 0; i > step; i--) {
        this.prev();
      }
      return;
    }

    for(let i = 0; i < step; i++) {
      this.next();
    }
  }

  // 获取当前节点
  getNode(index = this._index) {
    return this.queue[index] || this.queue[this._index];
  }

  // 获取当前索引
  getIndex() {
    return this._index;
  }

  // 获取下一个索引
  getNext() {
    const next = this._index + 1;
    if(next >= this.queue.length) {
      return 0;
    }

    return next;
  }

  // 获取上一个索引
  getPrev() {
    const prev = this._index - 1;
    if(prev < 0) {
      return this.queue.length - 1;
    }

    return prev;
  }

  // 是否到循环的起点
  isReturn() {
    return this._index === this.start_index;
  }
}

module.exports = Ring;
