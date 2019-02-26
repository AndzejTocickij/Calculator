

var tuscias ='';

  function zero() {
    document.getElementById('screen').value += 0;
    console.log(0);
    if (!isNaN(y) && !isNaN(x)) {
      document.getElementById('result').innerHTML = z;
  }
  }

  function one() {
    document.getElementById('screen').value += 1;
    console.log(1);
  }

  function two() {
    document.getElementById('screen').value += 2;
    console.log(2);
  }

  function three() {
    document.getElementById('screen').value += 3;
    console.log(3);
  }

  function four() {
    document.getElementById('screen').value += 4;
    console.log(4);
  }

  function five() {
    document.getElementById('screen').value += 5;
    console.log(5);
  }

  function six() {
    document.getElementById('screen').value += 6;
    console.log(6);
  }

  function seven() {
    document.getElementById('screen').value += 7;
    console.log(7);
  }

  function eight() {
    document.getElementById('screen').value += 8;
    console.log(8);
  }

  function nine() {
    document.getElementById('screen').value += 9;
    console.log(9);
  }
  function dot() {
    var str = document.getElementById('screen').value;
    var last = str[str.length - 1];
    if (last !=='.' && last !== '+' && last !== '-' && last !== '/' && last !== '*' && last !== '^') {
      document.getElementById('screen').value += '.';
  }
}

  function addition() {
    var str = document.getElementById('screen').value;
    var last = str[str.length - 1];
    if (last !== '+' && last !== '-' && last !== '/' && last !== '*' && last !== '^') {
      document.getElementById('screen').value += '+';
    }
  }

  function subtract() {
    var str = document.getElementById('screen').value;
    var last = str[str.length - 1];
    if (last !== '+' && last !== '-' && last !== '/' && last !== '*' && last !== '^') {
      document.getElementById('screen').value += '-';
    }
  }

  function multiply() {
    var str = document.getElementById('screen').value;
    var last = str[str.length - 1];
    if (last !== '+' && last !== '-' && last !== '/' && last !== '*' && last !== '^') {
      document.getElementById('screen').value += '*';
    }
  }

  function divide() {
    var str = document.getElementById('screen').value;
    var last = str[str.length - 1];
    if (last !== '+' && last !== '-' && last !== '/' && last !== '*' && last !== '^') {
      document.getElementById('screen').value += '/';
    }
  }

  function equals() {
    if (!isChar(document.getElementById('screen').value)) {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } else {
      document.getElementById('screen').value = '0';
    }
    // document.getElementById('screen').value += '=';
    console.log('=');
  }

  function clearDis() {
    document.getElementById('screen').value = '';
  }

  function isChar(str) {
    if (str.includes('a') || str.includes('b')) {
      return true;
    } else {
      return false;
    }
  }

//console.log(tuscias);
// console.log(lastChar);
// surasti paskutini zenkla
