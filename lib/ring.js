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

  // 获取当前节点
  getNode() {
    return this.queue[this._index];
  }

  // 获取当前索引
  getIndex() {
    return this._index;
  }

  // 是否到循环的起点
  isReturn() {
    return this._index === this.start_index;
  }
}

module.exports = Ring;
