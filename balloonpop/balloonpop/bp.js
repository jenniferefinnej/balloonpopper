
  var arr, body, tab, tr, td, tn, row, col;

  arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
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

var counter = 0;

$('td').click(function(){
    $(this).text('x');
    counter += 1;
    $('h2').text(counter);
});

var scoreboard = new 
Scoreboard();

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown", 1, 5 );
countdown( "countdown", 100, 5);
// var score = 0; 
// function drawScore() {
  //ctx.font = "16 px Arial";
  //ctx.fillStyle = "#0095DD";
  //ctx.fillText("Score: "+score, 8,20);
//}




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

