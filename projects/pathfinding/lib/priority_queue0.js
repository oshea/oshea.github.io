function PriorityQueue(fn) {
  this.heap = [];
  this.fn = fn;
}

PriorityQueue.prototype.push = function(item) {
  var score = this.fn(item);
  console.log("priority", score);
  if(this.heap.length == 0) {
    this.heap.push(item);
  } else {
    // Find mid point in heap
    var start = 0;
    var end = this.heap.length - 1;
    var i;
    console.log('start', start, 'end', end);
    while((end - start) > 1) {
      console.log('start', start, 'end', end);
      i = Math.floor((end - start)/2) - 1;
      console.log("i", i);
      if(score > this.fn(this.heap[i])) {
        start = i;
      } else {
        end = i;
      }
    }
    console.log("splicing at", start);
    this.heap.splice(start, 0, item);
  }

  return score;
}

PriorityQueue.prototype.lowest = function() {
  return this.heap.pop();
}

PriorityQueue.prototype.highest = function() {
  return this.heap.shift();
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
