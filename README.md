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

* contructor

new Ring(source_arr, start_index)

**source_arr**: an array to init a ring queue, not null;

**start_index**: start in where index, default 0;

* next();

move to next node;

*  getNode(index);

get the node in 'index'; default the latest;

* getIndex();

get the latest index;

* getNext();

get the next index;

* getPrev();

get the preview index;

* isReturn();

Judge whether or not it has run a circle
