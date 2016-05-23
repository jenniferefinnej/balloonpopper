var arr, body, tab, tr, td, tn, row, col; 

arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

body = document.getElementsByTagName('body')[0];
  tab = document.createElement('table');


  for (row = 0; row < arr.length; row++){
    tr = document.createElement('tr');
    
    for (col = 0; col < arr[row].length; col++){
      td = document.createElement('td');
      tn = document.createTextNode(arr[row][col]);
      td.appendChild(tn);
      tr.appendChild(td);
    }
    tab.appendChild(tr);
  }
  body.appendChild(tab);




$('td').click(function(){
    $(this).text('x');
});



// var Stopwatch = function(elem, options) {
  
//   var timer = createTimer(),
//       startButton = createButton("start", start),
//       stopButton = createButton("stop", stop),
//       resetButton = createButton("reset", reset),
//       offset,
//       clock,
//       interval;
  
//   //default options
//   options = options || {};
//   options.delay = options.delay || 1;
//   //append elements 
//   elem.appendChild(timer);
//   elem.appendChild(startButton);
//   elem.appendChild(stopButton);
//   elem.appendChild(resetButton);
  
//   //initialize
//   reset();
//   //private functions
//   function createTimer(){
//     return document.createElement("span");
//   }
  
//    function createButton(action, handler) {
//     var a = document.createElement("a");
//     a.href = "#" + action;
//     a.innerHTML = action;
//     a.addEventListener("click", function(event) {
//       handler();
//       event.preventDefault();
//     });
//     return a;
//   }

//   function start() {
//     if (!interval) {
//       offset   = Date.now();
//       interval = setInterval(update, options.delay);
//     }
//   }

//   function stop() {
//     if (interval) {
//       clearInterval(interval);
//       interval = null;
//     }
//   }

//   function reset() {
//     clock = 0;
//     render();
//   }

//   function update() {
//     clock += delta();
//     render();
//   }

//   function render() {
//     timer.innerHTML = clock/1000; 
//   }

//   function delta() {
//     var now = Date.now(),
//         d   = now - offset;

//     offset = now;
//     return d;
//   }

//   // public API
//   this.start  = start;
//   this.stop   = stop;
//   this.reset  = reset;
// };
