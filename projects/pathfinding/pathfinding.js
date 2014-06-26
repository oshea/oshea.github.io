
var Node = function(x, y, feature) {
  this.x = x;
  this.y = y;
  this.feature = feature;
  this.actions = function(map) {
    return [];
  }
  this.center = function() {
    return [this.x * TILE_SIZE + TILE_SIZE/2, this.y * TILE_SIZE + TILE_SIZE/2];
  }
};

Node.prototype.toString = function() {
  return this.x + "," + this.y;
}

var FEATURES = ["grass", "rock", "grass"];
var WIDTH = 10;
var HEIGHT = 10;
var TILE_SIZE = 20;
var MAP = [
  "ggrggggggg",
  "ggrggggggg",
  "gggggggrgg",
  "rrrrgggrgg",
  "gggggggggg",
  "gggggggggg",
  "gggrrrrggg",
  "gggggggggg",
  "grrrgggggg",
  "gggggggggg"
];

function loadMap() {
  var map = {};
  _.each(MAP, function(row, y) {
    _.each(row.split(''), function(tile, x) {
      var feature = "grass";
      if(tile == "r") {
        feature = "rock";
      }
      var node = new Node(x, y, feature);
      map[node] = node;
    });
  });
  return map;
}

function graphs() {

  var map = {};
  for(var x = 0; x < WIDTH; x++){
    for(var y = 0; y < HEIGHT; y++) {
      var feature = FEATURES[Math.floor(Math.random() * FEATURES.length)];
      var node = new Node(x, y, feature);
      map[node] = node;
    }
  }

  map = loadMap();
  map["0,0"].feature = "start";
  map["9,9"].feature = "goal";

  renderMap(map);

  setTimeout(function() {
    greedy_best_first(map, map["0,0"], map["9,9"]);
  }, 3000);

  console.log("rendered map");
}

function renderMap(nodes) {
  var map = document.getElementById("map");
  for(var x = 0; x < WIDTH; x++){
    for(var y = 0; y < HEIGHT; y++) {
      var ctx = map.getContext("2d");
      var node = nodes[x + "," + y];
      if(node.feature === "grass") {
        ctx.fillStyle = "green";
      } else if (node.feature === "rock") {
        ctx.fillStyle = "grey";
      } else if (node.feature === "water") {
        ctx.fillStyle = "blue";
      } else if (node.feature === "start") {
        ctx.fillStyle = "yellow";
      } else if (node.feature === "goal") {
        ctx.fillStyle = "red";
      }
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function renderPath(path, color) {
  color = color || "black";
  var map = document.getElementById("map");
  var ctx = map.getContext("2d");
  ctx.beginPath();
  for(var i = 0; i < path.length; i++) {
    var node = path[i];
    if(i === 0) {
      ctx.moveTo(node.center()[0], node.center()[1]);
    } else {
      ctx.lineTo(node.center()[0], node.center()[1]);
    }
  }
  ctx.strokeStyle = color;
  ctx.stroke();
}

function available_actions(map, node) {
  var actions = [];
  function addIfValid(x, y) {
    var node = map[x + "," + y];
    if(node && node.feature !== "rock"){
      actions.push(node);
    }
  }
  addIfValid(node.x + 1, node.y);
  addIfValid(node.x - 1, node.y);
  addIfValid(node.x, node.y + 1);
  addIfValid(node.x, node.y - 1);

  return actions;
}

function DFS_shortest_path(map, start, end, path, shortest_path) {
  console.log("DFS");
  path = path || [];
  path.push(start);
  renderMap(map);
  renderPath(path);
  if(start.toString() == end.toString()) {
    console.log("FOUND PATH");
    if(!shortest_path || path.length < shortest_path.length) {
      shortest_path = path;
    }
  } else {
    var actions = available_actions(map, start);
    if(!shortest_path || path.length < shortest_path.length) {
      for(var i = 0; i < actions.length; i++) {
        var node = actions[i];
        if(!_.any(path, function(n) { return n.toString() == node.toString() })) {
          setTimeout(function() {
            shortest_path = DFS_shortest_path(map, node, end, path.slice(0), shortest_path);
          }, 5);
        }
      }
    }
  }
  return shortest_path;
}

function BFS_shortest_path(map, start, end, q, shortest_path) {
  if(typeof q == "undefined") {
    q = [];
    q.push([start]);
  }
  shortest_path = shortest_path ||  null;
  path = q.shift();
  renderMap(map);
  renderPath(path);
  if(path[path.length - 1].toString() === end.toString() && (!shortest_path || path.length < shortest_path.length)) {
    console.log("found shortest");
    shortest_path = path;
  } else if(!shortest_path || path.length < shortest_path.length) {
    var nodes = available_actions(map, path[path.length - 1]);
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(!_.any(path, function(n) { return n.toString() == node.toString() })) {
        var new_path = path.slice(0);
        new_path.push(node);
        q.push(new_path);
      } else {
      }
    }
  }
  if(q.length > 0) {
    setTimeout(function() {
      BFS_shortest_path(map, start, end, q, shortest_path);
    }, 10);
  } else {
    renderMap(map);
    renderPath(shortest_path, "red");
  }
  return shortest_path;
}

// Non-recursive DFS
function DFSNR_shortest_path(map, start, end, q, shortest_path) {
  if(typeof q == "undefined") {
    q = [];
    q.push([start]);
  }
  shortest_path = shortest_path ||  null;
  path = q.pop();
  renderMap(map);
  renderPath(path);
  if(path[path.length - 1].toString() === end.toString() && (!shortest_path || path.length < shortest_path.length)) {
    console.log("found shortest");
    shortest_path = path;
  } else if(!shortest_path || path.length < shortest_path.length) {
    var nodes = available_actions(map, path[path.length - 1]);
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(!_.any(path, function(n) { return n.toString() == node.toString() })) {
        var new_path = path.slice(0);
        new_path.push(node);
        q.push(new_path);
      } else {
      }
    }
  }
  if(q.length > 0) {
    setTimeout(function() {
      DFSNR_shortest_path(map, start, end, q, shortest_path);
    }, 10);
  } else {
    renderMap(map);
    renderPath(shortest_path, "red");
  }
  return shortest_path;
}

function greedy_best_first(map, start, goal, q, shortest_path) {
  function distance_to_goal(node) {
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
  }
  if(typeof q == "undefined") {
    q = new PriorityQueue(distance_to_goal);
    q.push([start]);
  }
  shortest_path = shortest_path ||  null;
  path = q.lowest();
  renderMap(map);
  renderPath(path);
  if(path[path.length - 1].toString() === goal.toString() && (!shortest_path || path.length < shortest_path.length)) {
    console.log("found shortest");
    shortest_path = path;
  } else if(!shortest_path || path.length < shortest_path.length) {
    var nodes = available_actions(map, path[path.length - 1]);
    for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if(!_.any(path, function(n) { return n.toString() == node.toString() })) {
        var new_path = path.slice(0);
        new_path.push(node);
        q.push(new_path);
      } else {
      }
    }
  }
  if(q.heap.length > 0) {
    setTimeout(function() {
      greedy_best_first(map, start, goal, q, shortest_path);
    }, 10);
  } else {
    renderMap(map);
    renderPath(shortest_path, "red");
  }
  return shortest_path;
}

function astar(map, start, end) {
  console.log("render path", path);
  var q = [start];
  var visited = [];

}

$(document).ready(function() {
  graphs();
});
