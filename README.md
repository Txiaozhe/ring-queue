# ring-queue

```bash
$ npm install ring-queue --save
```

#### Quick Start

```javascript
const Ring = require('ring-queue');
const ring = new Ring([1, 2, 3, 4, 5]);
```

#### Document

* contructor(构造函数)

new Ring(source_arr, start_index)

**source_arr**: an array to init a ring queue, not null;用于初始化环形队列的数组，不能为空。

**start_index**: start in where index, default 0;开始运行的起始点，默认为0；

* next();

move to next node;移动到下一个节点。

* prev();

move to preview node;移动到上一个节点。

*  getNode(index);

get the node in 'index'; default the latest;获取index指定的节点，默认返回当前节点。

* getIndex();

get the latest index;获取当前索引。

* getNext();

get the next index;获取下一个索引。

* getPrev();

get the preview index;获取上一个索引。

* isReturn();

Judge whether or not it has run a circle;判断是否运行了一个周期
