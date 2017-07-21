function PriorityQueue(fn) {
  this.heap = [];
  this.fn = fn;
}

PriorityQueue.prototype.push = function(item) {
  this.heap.push(item);
  this.heap = _.sortBy(this.heap, this.fn);
}

PriorityQueue.prototype.lowest = function() {
  return this.heap.shift();
}

PriorityQueue.prototype.highest = function() {
  return this.heap.pop();
}

function testPriorityQueue() {
  var pq = new PriorityQueue(function(x) { return x + 2; });
  console.log("testing pq");
  pq.push(5);
  pq.push(10);
  pq.push(4);
  pq.push(1);
  pq.push(15);

  console.log(pq.heap);
  return pq;
}

function tpq() {
  console.log("tpq");
}

console.log("loading priority queue");
