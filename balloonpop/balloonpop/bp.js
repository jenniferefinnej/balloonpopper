
  var arr, body, tab, tr, td, tn, row, col;

  arr = [
    [0, "a",2],
    [1,2,3],
    [2,"blah",4]
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
   var $div = $('<div />').appendTo('body');
  $div.attr('id', 'holdy');
 

    //body.appendChild(tab);


// This is in JQuery, a snazzy library that condenses some of the JQuery syntax. Because it's JQuery, it needs to be required. Click on the button next to 'JS' on the top of this JavaScript panel. Inside of that settings panel,  go to the bottom, open the quick add dropdown and select Jquery. Save and come back and try this: 

$('td').click(function(){
    $(this).text('x');
});


// To Do:
//   - On the click, also increase a numerical score that displays next to the box. 
//    -Create a timer that only allows you to click on the boxes during while the time is running
//           - The timer will need a button to know when to start, when clicked. 

// - BONUS: Add a session that keeps track of your highest score






// var arr, body, tab, tr, td, tn, row, col; 

// arr = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ];

// body = document.getElementsByTagName('body')[0];
//   tab = document.createElement('table');


//   for (row = 0; row < arr.length; row++){
//     tr = document.createElement('tr');
    
//     for (col = 0; col < arr[row].length; col++){
//       td = document.createElement('td');
//       tn = document.createTextNode(arr[row][col]);
//       td.appendChild(tn);
//       tr.appendChild(td);
//     }
//     tab.appendChild(tr);
//   }
//   body.appendChild(tab);




// $('td').click(function(){
//     $(this).text('x');
// });


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//            timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var oneminute = 60 * 1,
//         display = document.querySelector('#time');
//     startTimer(oneminute, display);
// };

// // var Stopwatch = function(elem, options) {
  
// //   var timer = createTimer(),
// //       startButton = createButton("start", start),
// //       stopButton = createButton("stop", stop),
// //       resetButton = createButton("reset", reset),
// //       offset,
// //       clock,
// //       interval;
  
// //   //default options
// //   options = options || {};
// //   options.delay = options.delay || 1;
// //   //append elements 
// //   elem.appendChild(timer);
// //   elem.appendChild(startButton);
// //   elem.appendChild(stopButton);
// //   elem.appendChild(resetButton);
  
// //   //initialize
// //   reset();
// //   //private functions
// //   function createTimer(){
// //     return document.createElement("span");
// //   }
  
// //    function createButton(action, handler) {
// //     var a = document.createElement("a");
// //     a.href = "#" + action;
// //     a.innerHTML = action;
// //     a.addEventListener("click", function(event) {
// //       handler();
// //       event.preventDefault();
// //     });
// //     return a;
// //   }

// //   function start() {
// //     if (!interval) {
// //       offset   = Date.now();
// //       interval = setInterval(update, options.delay);
// //     }
// //   }

// //   function stop() {
// //     if (interval) {
// //       clearInterval(interval);
// //       interval = null;
// //     }
// //   }

// //   function reset() {
// //     clock = 0;
// //     render();
// //   }

// //   function update() {
// //     clock += delta();
// //     render();
// //   }

// //   function render() {
// //     timer.innerHTML = clock/1000; 
// //   }

// //   function delta() {
// //     var now = Date.now(),
// //         d   = now - offset;

// //     offset = now;
// //     return d;
// //   }

// //   // public API
// //   this.start  = start;
// //   this.stop   = stop;
// //   this.reset  = reset;
// // };

