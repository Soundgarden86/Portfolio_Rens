document.getElementById('knop').addEventListener('click' ,myStopFunction)

var myInterval = setInterval(myRandomColor, 100);

function myRandomColor() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);


  let randomcolor = 'rgb('+ r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = randomcolor;

  }

  function myStopFunction(){
    clearInterval(myInterval);
  }
